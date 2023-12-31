const mongoose = require('mongoose');
const orderSchema =mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
  items: [ {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  totalAmount: {type: Number,required: true,min: 0},
  shippingAddress: {type: String,required: true},
  status: {type: String,required: true,default: 'Pending'}
});

const OrderModel = mongoose.model('Orders', orderSchema);

module.exports = OrderModel;
