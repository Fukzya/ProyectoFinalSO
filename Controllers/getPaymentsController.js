const Payment = require("../models/payment");

// Controlador para obtener todos los pagos
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ is_deleted: false });
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

module.exports = { getPayments };

//delete logico, update no va get all y byidpayment
//Completar documetacion del rfc
