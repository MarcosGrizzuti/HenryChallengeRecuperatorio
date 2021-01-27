const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { query } = require('express');


/* PATH a CACHE */
const cacheFilePath = path.join(__dirname, '../cache/cache.json');
const cache = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8'));

/* Funcion Request Api */
async function apiResquest(query) {
  var productArray = [];
  var queryArray = {};
  const requestApi = axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
  const respuesta = await requestApi
  respuesta.data.results.map((product) => {
    productArray.push({
      id: product.id,
      title: product.title,
      price: product.price,
      currency_id: product.currency_id,
      available_quantity: product.available_quantity,
      thumbnail: product.thumbnail,
      condition: product.condition,
    })
  })

  queryArray = {
    [query]: productArray
  }

  productCache = [...cache, queryArray]
  fs.writeFileSync(cacheFilePath, JSON.stringify(productCache, null, ' '));
  return await productArray;
}

/* Busca un producto segun la Query */
router.get("/api/search", (req, res, next) => {
  const { query } = req.query
  const filter = cache.filter((elemento) => {
    return elemento[query]
  })

  if(filter[0]) {
    console.log("Busco en el cache")
    res.json(filter[0][query])
  } else {
    console.log("Busco en la API")
    async function fetch() {
      var productosRefinados = await apiResquest(query)
      res.json(productosRefinados)
    }

    fetch()
  }
});

module.exports = router;

