const {model, Schema} = require('mongoose')

exports.User = model(
  "User",
  new Schema({
        username: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        profile: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
    isAdmin: {
        type:Boolean,
        default:false
    }
}, {
    timestamp: true
})
);