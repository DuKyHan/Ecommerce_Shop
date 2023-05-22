import React from 'react';
import white_front from '../assets/tshirt/white-front.png';
import white_back from '../assets/tshirt/white-back.png';
import black_front from '../assets/tshirt/black-front.png';
import black_back from '../assets/tshirt/black-back.png';
import red_front from '../assets/tshirt/red-front.png';
import red_back from '../assets/tshirt/red-back.png';
import green_front from '../assets/tshirt/green-front.png';
import green_back from '../assets/tshirt/green-back.png';
import blue_front from '../assets/tshirt/blue-front.png';
import blue_back from '../assets/tshirt/blue-back.png';
import pink_front from '../assets/tshirt/pink-front.png';
import pink_back from '../assets/tshirt/pink-back.png';
import './index.css';

export const tshirts = [white_front, white_back, black_front, black_back];

export default function TshirtView({ color, direction }) {
  switch (color) {
    case 'black':
      if (direction === 'front') {
        return <img src={black_front} class="imageChange" alt="tshirt" />;
      }
      return <img src={black_back} class="imageChange" alt="tshirt" />;
    case 'green':
      if (direction === 'front') {
        return <img src={green_front} class="imageChange" alt="tshirt" />;
      }
      return <img src={green_back} class="imageChange" alt="tshirt" />;
    case 'red':
      if (direction === 'front') {
        return <img src={red_front} class="imageChange" alt="tshirt" />;
      }
      return <img src={red_back} class="imageChange" alt="tshirt" />;
    case 'blue':
      if (direction === 'front') {
        return <img src={blue_front} class="imageChange" alt="tshirt" />;
      }
      return <img src={blue_back} class="imageChange" alt="tshirt" />;
    case 'pink':
      if (direction === 'front') {
        return <img src={pink_front} class="imageChange" alt="tshirt" />;
      }
      return <img src={pink_back} class="imageChange" alt="tshirt" />;
    default:
      if (direction === 'front') {
        return <img src={white_front} class="imageChange" alt="tshirt" />;
      }
      return <img src={white_back} class="imageChange" alt="tshirt" />;
  }
}
