export interface User {
  username: string;
  token: string;
}

let data: number | string = 42;

data = "10";

interface Car {
  color: string;
  model: string;
  interior: string;
  price?: number;
}

const car1: Car = {
  color: 'navy',
  model: 'Defender',
  interior: 'brown',
  price: 100000
}

const car2: Car = {
  color: 'dark grey',
  model: 'Y',
  interior: 'light grey',
  price: 90000
}

const car3: Car = {
  color: 'light green',
  model: 'Aston Martin',
  interior: 'black'
}

const multiply = (x: number, y: number): void => {
  x * y;
}
