const express = require("express");
const connectDB = require("./database/db");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
require("dotenv").config();

const teamRoute = require("./routes/team");
const sponsorRoute = require("./routes/sponsor");
const patronRoute = require("./routes/patrons");

//Using helmet and CORS to secure the application
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:*",
  })
);

if (process.env.NODE_ENV === "maintainance") {
  app.use("*", (req, res) => res.sendStatus(503));
}
// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Routes
app.use("/api/v1", teamRoute);
app.use("/api/v1", sponsorRoute);
app.use("/api/v1", patronRoute);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error.");
    }
  });
}

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.url}`,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
