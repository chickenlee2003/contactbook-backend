const express = require("express");
const cors = require("cors");
const app = express();
const ApiError = require("./app/api-error");

const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json()); 
app.get("/", (rep, res) => {
    res.json({ message: "Welcome to contact book application."});
});

app.use("/api/contacts", contactsRouter);

//handle 404 response
app.use((req, res, next) => {
    //code ở đây sẽ chạy khi không có route được định nghĩa nào
    //  khớp vơi yêu cầu. Gọi next() để chuyển sang middleware xử lí lỗi
    return next(new ApiError(404, "Resource not found"));
});

//define ereo handling middleware last, affter other app.use() and routes calls
app.use((err, req, res, next) => { 
    // Middleware xử lí lỗi tập trung.
    // Trong các đoạn code xử lí ở các route, gọi next(error)
    //       sẽ chuyển về middleware xử lý lỗi này
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});


module.exports = app;