const Payment = require("../models/payment");

// Controlador para realizar un delete lógico
const deletePayment = async (req, res) => {
  const { payment_id } = req.params;

  try {
    // Buscar y actualizar el campo `is_deleted`
    const payment = await Payment.findOneAndUpdate(
      { payment_id },
      { is_deleted: true },
      { new: true } // Devuelve el documento actualizado
    );

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    res.status(200).json({ message: "Payment marked as deleted", payment });
  } catch (error) {
    console.error("Error deleting payment:", error);
    res.status(500).json({ error: "Error deleting payment" });
  }
};

module.exports = { deletePayment };
