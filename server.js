const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const env=require("dotenv")

env.config()

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.USERNAME_MONGO}:${process.env.PASSWORD_MONGO}@myfirstsoftware.zsl60.mongodb.net/?retryWrites=true&w=majority&appName=myfirstsoftware`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

// Define routes here
app.use("*",require("./routes/auth"))
app.use("*",require("./routes/discussions"))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
