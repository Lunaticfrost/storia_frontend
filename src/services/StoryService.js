import axios from 'axios';

class ProductService {
  getAllProducts() {
    return axios.get('/api/products')
      .then(response => response.data);
  }

  getProductById(id) {
    return axios.get(`/api/products/${id}`)
      .then(response => response.data);
  }

  createProduct(productData) {
    return axios.post('/api/products', productData)
      .then(response => response.data);
  }
}

export default new ProductService();