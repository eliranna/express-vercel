const express = require("express");
const app = express();
const subscribe = require("./api/subscribe");

app.use(express.json({ extended: false }));

//app.use("/api/product", product);
app.use("/api/subscribe", subscribe);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
