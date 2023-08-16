const app = require("./app");
const config = require("./app/config");

//start sercer
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Servcer is running on port ${PORT}.`);
});