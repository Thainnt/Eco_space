require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const morgan = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["secrect key are really hard to break", "2565evchsb 66edvc3tf27"],
  })
);

// routes
app.use("/api/users", usersRouter);
app.use("/api/products", indexRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
