import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/api/products');

const service = axios.create({ withCredentials: true, baseURL });

const PRODUCT_SERVICE = {
CREATE_PRODUCT: data => service.post('/createProduct', data)
};

export default PRODUCT_SERVICE;