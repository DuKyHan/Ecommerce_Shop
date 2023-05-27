import ItemBig1Image from '../assets/item-big-1.png';

import Item1Image from '../assets/item-1.png';
import Item2Image from '../assets/item-2.png';
import Item3Image from '../assets/item-3.png';
import Item4Image from '../assets/item-4.png';
import Item5Image from '../assets/item-5.png';
import ItemBig2Image from '../assets/item-big-2.png';
import ItemBig3Image from '../assets/item-big-3.png';
import ItemBig4Image from '../assets/item-big-4.png';
import * as axios from 'axios';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  discount: number;
  image: string;
  categoryId?: string;
}

export interface Category {
  id: number;
  name: string;
}

export const categoryData: Category[] = [
  {
    id: 1,
    name: 'Áo',
  },
  {
    id: 2,
    name: 'Quần',
  },
  {
    id: 3,
    name: 'Áo Khoác',
  },
];

export const popularProductData: Product[] = [
  {
    id: 1,
    name: 'Summer Shirt',
    price: 100000,
    description: 'Product 1 description',
    discount: 0.6,
    image: ItemBig1Image,
    categoryId: '1',
  },
  {
    id: 2,
    name: 'Blue Pants',
    price: 150000,
    description: 'Product 1 description',
    discount: 0.3,
    image: ItemBig2Image,
    categoryId: '2',
  },
  {
    id: 3,
    name: 'Golden Coat',
    price: 500000,
    description: 'Product 1 description',
    discount: 0.5,
    image: ItemBig3Image,
    categoryId: '3',
  },
  {
    id: 4,
    name: 'Snow Hoodie',
    price: 70000,
    description: 'Product 1 description',
    discount: 0.4,
    image: ItemBig4Image,
    categoryId: '3',
  },
];

export const discoverProductData = [
  {
    id: 5,
    name: 'Summer Shirt',
    price: 100000,
    description: 'Product 1 description',
    discount: 0.6,
    image: Item1Image,
    categoryId: '1',
  },
  {
    id: 6,
    name: 'Snow Hoodie',
    price: 20000,
    description: 'Product 1 description',
    discount: 0.4,
    image: Item2Image,
    categoryId: '3',
  },
  {
    id: 7,
    name: 'White Shirt',
    price: 80000,
    description: 'Product 1 description',
    discount: 0.1,
    image: Item3Image,
    categoryId: '1',
  },
  {
    id: 8,
    name: 'Thunder Hoodie',
    price: 100000,
    description: 'Product 1 description',
    discount: 0,
    image: Item4Image,
    categoryId: '3',
  },
  {
    id: 9,
    name: 'Crimson Coat',
    price: 100000,
    description: 'Product 1 description',
    discount: 0.3,
    image: Item5Image,
    categoryId: '3',
  },
];

export const allProductData: Product[] = [
  ...popularProductData,
  ...discoverProductData,
];

export const axiosClient = new axios.Axios({
  baseURL: 'http://localhost:3002',
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  responseType: 'json',
  transformResponse: function (data) {
    if (typeof data === 'string') {
      try {
        const parsed = JSON.parse(data);
        return parsed;
      } catch (err) {
        return data;
      }
    }
    return data;
  },
});

axiosClient.interceptors.request.use(req => {
  if (req.data instanceof Object) {
    req.data = JSON.stringify(req.data);
  }
  return req;
});
axiosClient.interceptors.request.use(req => {
  let accessToken = localStorage.getItem('accessToken');
  req.headers.set('Authorization', `Bearer ${accessToken}`);
  console.log(`Bearer ${accessToken}`);
  return req;
});

// axiosClient.interceptors.response.use(res => {
//   console.log(res);
//   if (typeof res.data === 'string') {
//     try {
//       res.data = JSON.parse(res.data.toString());
//     } catch (err) {
//       return res;
//     }
//   }
//   return res;
// });
