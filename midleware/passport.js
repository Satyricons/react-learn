const key = require("../config/key");
const mongoose = require('mongoose')
const User = mongoose.model('users')
const JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.jwt

module.exports = passport => {
	passport.use(new JwtStrategy(opts, async (payload, done) => {
		try {
			const user = await User.findById(payload.userId).select('email id')
			if (user) {
				done(null, user)
			} else {
				done(null, false)
			}
		} catch (e) {
			console.log(e)
		}
	}));
}


