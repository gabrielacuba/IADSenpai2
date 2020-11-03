require("dotenv").config();

const server = require('./app');

let port= process.env.PORT || 3000;
server.listen(port, () => {
    console.log("El servidor está funcionando en el puerto " + port );
})