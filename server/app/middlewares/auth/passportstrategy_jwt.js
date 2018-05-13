/**
 * PassportJS authentication middleware
 * Json Web Token STRATEGY
 * https://github.com/themikenicholson/passport-jwt
 *
 * $npm install --save passport-jwt
 *
 * Principles:
 * 1. First you need to get token, which usualy is generated after successful login by username:pass .
 * Jwt token is generated by calling POST /examples/auth/passport/jwtstrategy-gettoken
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YTYwMTY4NGFhZGY3ZTgzYWViZTJlNSIsImlhdCI6MTQ3MDU3MTU2MX0.zwSfbzW6bgYF1D1-yktY86daez-bSgs5YUNQZV1bVoU
 *
 * 2. put that token into header: Authorization: JWT <token>
 * 3. request GET /examples/auth/passport/jwtstrategy
 * 4. JWTStrategy takes config.api_secret and decodes jwt_payload
 */
var passport = require('passport');
var JWTStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var users_model = require('../../models').users_model;
var config = require('app/config');
// var authLib = require('dex8-common').lib.authLib;

// define strategy for dashboard login ('users' collection, used username:password to generate JWT token)
module.exports.defineStrategy4users = function () {
    'use strict';

    var jwtOpts = {
        secretOrKey: config.api_secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
    };

    passport.use('jwt-users', new JWTStrategy(jwtOpts, function (jwt_payload, done) {
        //jwt_payload is decoded payload
        // console.log('jwt_payload:\n', JSON.stringify(jwt_payload, null, 2));

        var queryObj = {
            _id: jwt_payload.id,
            username: jwt_payload.username
        };

        users_model.getOne(queryObj)
            .then(function (userDoc) {

                //if user is not found
                if (!userDoc) {
                    var err = new Error('Bad token! User id and username given by payload are wrong.');
                    err.status = 403;
                    return done(err, false);
                }

                /* var 'userDoc' is transfered into req.user and can be used in controller req.user */
                return done(null, userDoc);

            })
            .catch(function (err) {
                return done(err);
            });

    }));
};
/*
jwt_payload:
{
  "id": "57a72695370bc50962e345fe",
  "username": "sasa",
  "iat": 1470572244
}
 */