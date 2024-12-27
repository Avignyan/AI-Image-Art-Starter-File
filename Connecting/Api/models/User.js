const moongoose = require('mongoose');
const userSchema = moongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    },
    credit : {
        type : Number,
        default : 0,
    },
    post: [{
        type: moongoose.Schema.Types.ObjectId,
        ref: 'post',
    }],
    following: [{
        type: moongoose.Schema.Types.ObjectId,
        ref: 'user',
    }],
},{
    timestamps: true,  
});
 const user = moongoose.model('post', userSchema);
    module.exports = user;
