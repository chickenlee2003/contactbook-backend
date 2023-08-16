const express = require("express");
const cors = require("cors");

const app = express();

const contactsRouter = require("./app/routes/contact.route");

app.get("/", (rep, res) => {
    res.json({ message: "Welcome to contact book application."});
});

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

module.exports = app;