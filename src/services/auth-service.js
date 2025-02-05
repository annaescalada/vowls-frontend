import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  signup(user) {
    const { username, password } = user;
    return this.auth.post('/auth/signup', {username, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(({ data }) => data);
  }

  me() {
    return this.auth.get('/auth/me')
    .then(({ data }) => data);
  }

  update(newUser) {
    return this.auth.put('/auth/update', newUser)
    .then(({ data }) => data);
  }

  changePassword(newPassword) {
    return this.auth.put('/auth/change-password', newPassword)
    .then(({ data }) => data);
  }

  delete() {
    return this.auth.delete('/auth/delete')
    .then(({ data }) => data);
  }

}

const authService = new AuthService();

export default authService;