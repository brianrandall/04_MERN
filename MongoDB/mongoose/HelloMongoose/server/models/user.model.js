const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		first_name: {
			type: String, 
			required: [true, 'first name required'],
			minlength: [2, 'first name must be at least 2 characters long']
		},
		last_name: {
			type: String, 
			required: [true, 'last name required'],
			maxlength: [20, 'last name must be at least 4 characters long']
		},
		age: {
			type: Number, 
			min: [18, 'you must be 18 to register'],
			max: [100, 'you are too old']
		},
		email: {
			type: String, 
			required: [true, 'first name required'],
			unique: [true, 'email already in use'],
			validate: {
				validator: function (v) {
					return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
				},
				message: props => `${props.value} is not a valid email address!`
			}
		},
	},
	{
		timestamps: true
	}
);

const User = mongoose.model("User", UserSchema);

module.exports = User;