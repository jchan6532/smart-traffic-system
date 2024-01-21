const map = document.getElementById("mapCanvas");
map.height = window.innerHeight;
map.width = 200;

const ctx = map.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);