"use strict";

function randomDestination(place){
    return place[Math.floor(Math.random()*place.length)];
}

let destination = ['Michigan', 'South Carolina', 'Texas', 'California', 'Kentucky'];

function randomRestaurant(food){
    return food[Math.floor(Math.random()*food.length)];
}

let restaurant = ["McDonald's", "Wendy's", "Taco Bell", "Subway", "Arby's"];

function randomTransportation(vehicle){
    return vehicle[Math.floor(Math.random()*vehicle.length)];
}

let transportation = ['Car', 'Train', 'Helicopter', 'Jet Ski', 'Lamborfeeties'];

function randomEntertainment(activity){
    return activity[Math.floor(Math.random()*activity.length)];
}

let entertainment = ['Movie', 'Magic Show', 'Sporting event', 'Casino', 'Concert'];

console.log("Congratulations! You have recieved your random day trip. You will travel to " + randomRestaurant(restaurant) + " in " + randomDestination(destination) + " by " + randomTransportation(transportation) + " and finally go to a " + randomEntertainment(entertainment));