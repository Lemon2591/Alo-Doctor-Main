import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import user from "../routers/user.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:12345@cluster0.ouaff6i.mongodb.net/users?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conect ok");
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Starting on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("combined"));

app.use("/api/user", user);

// app.get("/post", (req, res) =>
//   res.send({
//     name: "anh tuan",
//     age: 16,
//     phoneNumber: 09000118,
//   })
// );
