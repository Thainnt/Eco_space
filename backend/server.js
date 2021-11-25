require("dotenv").config();
const chat = require("./chat");
const socketio = require("socket.io");
const express = require("express");
const http = require("http");
// const { Server } = require("socket.io");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const morgan = require("morgan");
const cors = require("cors");
const storePRouter = require("./routes/storeP");
const usersRouter = require("./routes/users");
const freePRouter = require("./routes/freeP");
const contactRouter = require("./routes/contact");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
chat(io);

const PORT = process.env.PORT || 8080;

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["secrect key are really hard to break", "2565evchsb 66edvc3tf27"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/api/users", usersRouter);
app.use("/api/store", storePRouter);
app.use("/api/freecycle", freePRouter);
app.use("/api/contact", contactRouter);

//stripe setup
app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "CAD",
      description: "Eco Space",
      payment_method: id,
      confirm: true,
    });
    console.log("payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
