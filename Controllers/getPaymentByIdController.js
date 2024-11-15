const Payment = require("../models/payment");

// Controlador para obtener un pago específico por payment_id
const getPaymentById = async (req, res) => {
  const { payment_id } = req.params;

  try {
    const payment = await Payment.findOne({ payment_id });

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    // Formatear la respuesta
    const formattedPayment = {
      id: payment._id,
      payment_id: payment.payment_id,
      user: payment.user_id,
      method: payment.method,
      status: payment.status,
      price: payment.price,
      valid_at: payment.valid_at,
      created_at: payment.createdAt,
      updated_at: payment.updatedAt,
    };

    res.status(200).json(formattedPayment);
  } catch (error) {
    console.error("Error fetching payment:", error);
    res.status(500).json({ error: "Error fetching payment" });
  }
};

module.exports = { getPaymentById };
