const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const PaymentSchema = new mongoose.Schema(
  {
    method: { type: String, required: true },
    card_number: { type: String, required: true },
    verification_number: { type: String, required: true },
    valid_at: { type: String, required: true },
    user_id: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: String, default: "pending" }, // Valor por defecto
    payment_id: { type: String, default: uuidv4 },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
//WA
