import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/api/auth');

const service = axios.create({ withCredentials: true, baseURL });
//Configuracion de conexiones al back de User
const AUTH_SERVICE = {
  SIGNUP: data => service.post('/signup',data),
  LOGIN: data => service.post('login',data),
  CURRENT_USER: () => service.get('/logged'),
  LOGOUT: () => service.get('/logout')
};

export default AUTH_SERVICE;
