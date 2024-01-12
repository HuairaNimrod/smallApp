const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

const server = app.listen(8080, () => {
  console.log(`Server listening on port ${server.address().port}`);
});

app.get('/', (_, res)=>{
    res.send('hi')
})


/**
 * Fetch popular movies from TMDB
 *  @returns {Array} movies
 */
const fetchMovies = async (title) => {
    try {
      let result;
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_apikey}&query=${title}&language=en-US&include_adult=false&region=US`
        )
        .then((response) => {
          result = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      return result;
    } catch (error) {
      console.error(error);
    }
  };

app.get('/movies', async (req, res, next)=>{
    try {
        const {query} = req.query;
        const data = await fetchMovies(query);

        const movies = data.slice(0,10); //only first 10

      
        return res.status(200).json({
          status:200,
        //   message: `${data.length}`, 
          movies
        })
      } catch (err) {
        return next(err);
      }
})
