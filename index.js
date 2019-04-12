require("dotenv").config();

const app = require("./api/app.js");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
