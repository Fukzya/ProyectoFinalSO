const Payment = require("../models/payment");
const axios = require("axios");

// Controlador para procesar el pago
const processPayment = async (req, res) => {
  const { method, card_number, verification_number, valid_at, price, user_id } =
    req.body;

  try {
    const fraudCheckResponse = await axios.get(
      `https://fraudeapi01-braxdrdjc4f4c2hr.centralus-01.azurewebsites.net/api/v1/validate/${user_id}`
    );
    const isFraudulent = fraudCheckResponse.data.is_fraud; // Asumiendo que devuelve true o false

    // Determinar el estado basado en el resultado del fraude
    const status = isFraudulent ? "reached" : "approved";

    const payment = new Payment({
      method,
      card_number,
      verification_number,
      valid_at,
      user_id,
      price,
      status,
    });
    //WWA
    await payment.save();

    res.status(201).json({
      payment_id: payment.payment_id,
      status: payment.status,
      method: payment.method,
      card_number: payment.card_number,
      verification_number: payment.verification_number,
      valid_at: payment.valid_at,
      user_id: payment.user_id,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Error processing payment" });
  }
};

module.exports = { processPayment };
