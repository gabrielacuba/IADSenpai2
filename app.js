const express = require("express");
const app = express();


app.get("/", async (request, response)=> {
    /*const data = await procesarData(); */
    response.send("Mba'eichapa");
})
module.exports = app; 