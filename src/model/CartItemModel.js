const mongoose = require('mongoose');
const cartItemSchema =mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'users',required: true},
  product: {type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true},
  quantity: {type: Number,required: true, min: 1}
});

const CartItemModel = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItemModel;
