/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import axios from 'axios';

/*----------------------------------------------------------------------------
Export API
----------------------------------------------------------------------------*/
export default axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
  headers: {
    'x-rapidapi-key': '982e812c5amsh2660fc6fabf4f33p142c7fjsnc04dc1c32cab',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    useQueryString: true,
  },
});
