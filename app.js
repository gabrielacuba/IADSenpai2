const express = require("express");
const router = require("express");
const app = express();


app.get("/", async (request, response)=> {
    /*const data = await procesarData(); */
    response.send("Mba'eichapa");
})

const routes =require("./routes/routes");
app.use('/api/v1', routes);
module.exports = app; 