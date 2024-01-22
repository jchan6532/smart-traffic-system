const map = document.getElementById("mapCanvas");
map.width = 200;

const ctx = map.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate() {
    car.update();

    map.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}