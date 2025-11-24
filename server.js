const express = require("express");
const cors = require("cors");
const path = require("path");
const branchesRoutes = require("./routes/branches");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/branches", branchesRoutes);

app.use("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use("/public", express.static("public"));

app.listen(5001, () => {
    console.log("Server running at http://localhost:5001");
});
