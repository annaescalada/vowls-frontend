import axios from 'axios';

class MealsService {
  constructor() {
    this.vowls = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  }

  saveMeals(meals) {
    return this.vowls.put('/meals/save', meals)
      .then(({ data }) => data);
  }
}

const mealsService = new MealsService();

export default mealsService;