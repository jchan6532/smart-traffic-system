const map = document.getElementById("mapCanvas");
map.width = 200;

const ctx = map.getContext("2d");
const road = new Road(map.width/2, map.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "AI");
const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2, "blue")
];

animate();

function animate() {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
        
    }
    car.update(road.borders, traffic);

    map.height = window.innerHeight;

    ctx.translate(0, -car.y + map.height*0.7);
    road.draw(ctx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(ctx);
    }
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}