const OrderRoute = require("express").Router();
const Order = require("../model/order.model");

// Fetch all active orders
OrderRoute.get("/", async (req, res) => {
  try {
    const items = await Order.find({ delevred: false, cancel: false });
    res.status(200).send({ good: true, result: items, length: items.length });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Fetch order by ID
OrderRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Order.findById(id);
    if (!item) return res.status(404).send({ good: false, message: "Order not found" });
    res.status(200).send({ good: true, result: item });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Fetch canceled orders
OrderRoute.get("/cancel/show", async (req, res) => {
  try {
    const items = await Order.find({ cancel: true });
    res.status(200).send({ good: true, result: items });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Fetch delivered orders
OrderRoute.get("/done/show", async (req, res) => {
  try {
    const items = await Order.find({ delevred: true, cancel: false });
    res.status(200).send({ good: true, result: items });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Fetch orders marked as taken
OrderRoute.get("/take/show", async (req, res) => {
  try {
    const items = await Order.find({ take: true, cancel: false });
    res.status(200).send({ good: true, result: items });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Mark order as canceled
OrderRoute.put("/cancel/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Order.findByIdAndUpdate(id, { cancel: true }, { new: true });
    if (!item) return res.status(404).send({ good: false, message: "Order not found" });
    res.status(200).send({ good: true, result: item });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Mark order as taken
OrderRoute.put("/take/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Order.findByIdAndUpdate(id, { take: true }, { new: true });
    if (!item) return res.status(404).send({ good: false, message: "Order not found" });
    res.status(200).send({ good: true, result: item });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Mark order as delivered
OrderRoute.put("/delivered/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Order.findByIdAndUpdate(id, { delevred: true }, { new: true });
    if (!item) return res.status(404).send({ good: false, message: "Order not found" });
    res.status(200).send({ good: true, result: item });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

// Create a new order
OrderRoute.post("/", async (req, res) => {
  try {
    const item = await Order.create(req.body);
    res.status(201).send({ good: true, result: item });
  } catch (error) {
    res.status(400).send({ good: false, message: error.message });
  }
});

// Delete an order
OrderRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Order.findByIdAndDelete(id);
    if (!item) return res.status(404).send({ good: false, message: "Order not found" });
    res.status(200).send({ good: true, result: item });
  } catch (error) {
    res.status(500).send({ good: false, message: error.message });
  }
});

module.exports = OrderRoute;
