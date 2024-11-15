const Payment = require("../models/payment");

// Controlador para obtener pagos específicos por user_id
const getPaymentsByUserId = async (req, res) => {
  const { user_id } = req.params;

  try {
    const payments = await Payment.find({ user_id, is_deleted: false });

    if (payments.length === 0) {
      return res.status(404).json({ error: "No payments found for this user" });
    }

    // Formatear los datos para una respuesta más clara
    const formattedPayments = payments.map((payment) => ({
      id: payment._id,
      payment_id: payment.payment_id,
      user: payment.user_id,
      method: payment.method,
      status: payment.status,
      price: payment.price,
      valid_at: payment.valid_at,
      created_at: payment.createdAt,
      updated_at: payment.updatedAt,
    }));

    res.status(200).json({ payments: formattedPayments });
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "Error fetching payments" });
  }
};

module.exports = { getPaymentsByUserId };
