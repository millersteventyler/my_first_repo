"use strict";

function randomDestination(place){
    return place[Math.floor(Math.random()*place.length)];
}

let destination = ['Michigan', 'South Carolina', 'Texas', 'California', 'Kentucky'];
console.log(randomDestination(destination));

function randomRestaurant(food){
    return food[Math.floor(Math.random()*food.length)];
}

let restaurant = ["McDonald's", "Wendy's", "Taco Bell", "Subway", "Arby's"];
console.log(randomRestaurant(restaurant));




let transportation = ['Car', 'Train', 'Helicopter', 'Jet Ski', 'Lamborfeeties'];
let entertainment = ['Movie', 'Magic Show', 'Sporting event', 'Casino', 'Concert']