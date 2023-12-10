const mongoose=require('mongoose')
const UserSchema=mongoose.Schema(
    {
        productID: { type: mongoose.Schema.Types.ObjectId, required: true},
        userID: { type: mongoose.Schema.Types.ObjectId,required: true },
        color:{type: String, required: true },
        price:{type: String, required: true },
        qty:{type: String, required: true },
        size:{type: String, required: true },

        firstName: {type: String,required: true},
        lastName: {type: String,required: true},
        email: {type: String, required: true,unique: true},
        password: {type: String,required: true},
        address: String,
        phoneNumber: String
    }
)
const UserModel=mongoose.model('users',UserSchema);
module.exports=UserModel;