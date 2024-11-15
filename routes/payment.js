const express = require("express");
const router = express.Router();
const { processPayment } = require("../Controllers/postPaymentsController");
const { getPayments } = require("../Controllers/getPaymentsController");
const { getPaymentById } = require("../Controllers/getPaymentByIdController");
const {
  getPaymentsByUserId,
} = require("../Controllers/getPaymentsByUserController");
const { deletePayment } = require("../Controllers/deletePaymentsController");

//Crear un pago especifico
router.post("/process_payment", processPayment);

// Obtener un pago específico (GET)
router.get("/payments", getPayments);

// Obtener un pago específico por payment_id
router.get("/payments/:payment_id", getPaymentById);

// Obtener pagos por user_id
router.get("/payments/user/:user_id", getPaymentsByUserId);

// Eliminar un pago específico (DELETE)
router.delete("/payments/:payment_id", deletePayment);

module.exports = router;
//AS
