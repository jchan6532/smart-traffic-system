const map = document.getElementById("mapCanvas");
map.width = 200;

const ctx = map.getContext("2d");
const road = new Road(map.width/2, map.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);
car.draw(ctx);

animate();

function animate() {
    car.update();

    map.height = window.innerHeight;

    ctx.translate(-car.x + map.width*0.5, -car.y + map.height*0.8);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}