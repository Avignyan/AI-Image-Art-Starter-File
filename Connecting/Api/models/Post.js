const moongoose = require('mongoose');
const PostSchema = moongoose.Schema({
    user : {
        type : moongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true,
    },
    prompt : {
        type : String,
        trim: true,
    },
    Negativeprompt : {
        type : String,
        trim: true,
    },
    size: {
        type: String,
        trim: true,
    },
    quality : {
        type: String,
        trim: true,
    },
    quantity : {
        type: Number,
        trim: true,
    },
    style : {
        type: String,
        trim: true,
    },
    aiModal :{
        type: String,
        trim: true,
    },
    aiMage :[{
        type: String,
        required: true,
    }],
    images: [{
        type: String,
        required: true,
    }],
    likes: [
        {
            user: {
                type: moongoose.Schema.Types.ObjectId,
                ref: 'users',
            },
        },
    ],
},{
    timestamps: true,  
});
 const Post = moongoose.model('post', PostSchema);
    module.exports = Post;
