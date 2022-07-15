const express = require("express");

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://db-AloDoctor:12345@cluster0.ouaff6i.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conect ok");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.get("/", (req, res) => res.send("hello world"));

const PORT = 3000;

app.listen(PORT, () => console.log(`OK ${PORT}`));
