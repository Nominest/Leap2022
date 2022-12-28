const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let cars = [
  {
    id: 0,
    model: "Prius 20",
    brand: "Toyota",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 1,
    model: "Prius 30",
    brand: "Toyota",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 3,
    model: "Aqua",
    brand: "Toyota",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 4,
    model: "Prius 10",
    brand: "Toyota",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    image: "https://catalogphoto.goo-net.com/carphoto/10102518_201105g.jpg",
  },
];
let index = cars.length;

const app = express();
app.use(cors());
app.use(bodyParser());

app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/cars", (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  cars.push(car);
  res.send(car);
});

app.delete("/api/cars", (req, res) => {
  cars = cars.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
