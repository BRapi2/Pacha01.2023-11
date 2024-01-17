const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
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
  
    res.send('Hello World!')
})

app.get("/clima", (req,res)=>{
    res.send("Hola desde clima")
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})