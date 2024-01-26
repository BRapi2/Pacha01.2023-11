//metoodos pa ra usar
const express = require('express')
require('dotenv').config()

const axios = require('axios');
/////////////////

const app = express()
const port = process.env.PORT
<<<<<<< HEAD
const axios = require('axios');
app.get('/', (req, res) => {let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=48MOSXXZat3w5vyV3cxaLV6v3zU6q38m',
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
=======
//ejemplo
app.get('/', (req, res) => {
>>>>>>> fuentes/main
    res.send('Hello World!')
})
//uso
app.get("/clima", (req,res)=>{
    let ubicacion = req.query.ubicacion;
    //console.log(ubicacion);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.tomorrow.io/v4/weather/forecast?location='+ubicacion+'&apikey='+process.env.APIKEY,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        res.status(500).send("Hubo un error en la aplicacion")
      });
      
});
//para llamar al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})