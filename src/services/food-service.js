import axios from 'axios';

class FoodService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  }

  getFoods() {
    return this.auth.get('/foods/all')
      .then(({ data }) => data);
  }

}

const foodService = new FoodService();

export default foodService;