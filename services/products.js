import { get } from 'axios';
import { endpoints } from '../constants';

export const getProducts = () => {
  return get(endpoints.product)
    .then((response) => response.data)
    .then((data) => data.product);
};
