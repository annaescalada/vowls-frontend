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

  getOne(vowlID) {
    return this.vowls.get(`vowls/getOne/${vowlID}`)
    .then(({ data }) => data);
  }

  saveVowl(vowl) {
    return this.vowls.post('vowls/save', vowl)
    .then(({data}) => data);
  }

  lastGeneratedVowl(vowl) {
    return this.vowls.put('/vowls/last-vowl', vowl)
    .then(({ data }) => data);
  }

  deleteVowl(vowlID) {
    return this.vowls.delete(`vowls/delete/${vowlID}`)
    .then(({data}) => data);
  }
}

const vowlsService = new VowlsService();

export default vowlsService;