import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails=[

    {
      id:1,
      foodName: 'Pancake With Sliced Strawberry',
      foodPrice: 200,
      foodImage:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:2,
      foodName: 'Perfecto Pizza',
      foodPrice: 440,
      foodImage:'https://images.pexels.com/photos/12261065/pexels-photo-12261065.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id:3,
      foodName: 'Ham Burger With Vegetables',
      foodPrice: 280,
      foodImage:'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id:4,
      foodName: 'Fries With Leaves Dish',
      foodPrice: 299,
      foodImage:'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:5,
      foodName: 'Sliced of Pastry',
      foodPrice: 100,
      foodImage:'https://images.pexels.com/photos/3071821/pexels-photo-3071821.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id:6,
      foodName: 'Chocolate gateau',
      foodPrice: 250,
      foodImage:'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id:7,
      foodName: 'Delicious Pizza',
      foodPrice: 100,
      foodImage:'https://images.pexels.com/photos/12645186/pexels-photo-12645186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:8,
      foodName: 'Saucisse Pizza',
      foodPrice: 300,
      foodImage:'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:9,
      foodName: 'Vegg Pizza',
      foodPrice: 299,
      foodImage:'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:10,
      foodName: 'eggo Pizza',
      foodPrice: 250,
      foodImage:'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:11,
      foodName: 'Cheesy Pizza',
      foodPrice: 199,
      foodImage:'https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:12,
      foodName: 'Pizza With Red Pepper and Cheese',
      foodPrice: 230,
      foodImage:'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:13,
      foodName: 'Bowl of Vegetable Salad',
      foodPrice: 300,
      foodImage:'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:14,
      foodName: 'Meato Pizza',
      foodPrice: 255,
      foodImage:'https://images.pexels.com/photos/2274787/pexels-photo-2274787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:15,
      foodName: 'Mixo Pizza',
      foodPrice: 599,
      foodImage:'https://images.pexels.com/photos/3761662/pexels-photo-3761662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id:16,
      foodName: 'Opps Sandwich',
      foodPrice: 220,
      foodImage:'https://images.pexels.com/photos/1633559/pexels-photo-1633559.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id:17,
      foodName: 'Baff Burger',
      foodPrice: 240,
      foodImage:'https://images.pexels.com/photos/2267538/pexels-photo-2267538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:18,
      foodName: 'Double Buff Burger',
      foodPrice: 330,
      foodImage:'https://images.pexels.com/photos/9328473/pexels-photo-9328473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
]
}
