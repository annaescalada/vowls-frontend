import axios from 'axios';

class VowlsService {
  constructor() {
    this.vowls = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  }

  getVowls() {
    return this.vowls.get('/vowls/all')
      .then(({ data }) => data);
  }

  saveVowl(vowl) {
    return this.vowls.post('vowls/save', vowl)
    .then(({data}) => data);
  }

  deleteVowl() {
    return this.vowls.delete('vowls/delete/:id')
    .then(response => response.data)
  }
}

const vowlsService = new VowlsService();

export default vowlsService;