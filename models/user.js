const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: {
		type: Number,
		// required: true,
		default: 0,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		default: "none"
	},
	login: {
		type: String,
		// required: true,
		// unique: true,
		default: "my login"
	},
	password: {
		type: String,
		required: true,
		default: "none"
	},
	name: {
		type: String,
		// required: true,
		default: "my name"
	},

	foto: {
		type: String,
		// required: true,
		default: ""
	},

	status: {
		type: String,
		// required: true,
		default: ""
	},

	follow: {
		type: Array,
		// required: true,
		default:[]
	},

	allmessage: {
		type: Array,
		// required: true,
		default:[]
	}
})

module.exports = mongoose.model('users', userSchema)