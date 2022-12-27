const express = require("express");
const cors = require("cors");

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
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FToyota_Prius_%2528XW20%2529&psig=AOvVaw3F6Fq1dZFapOBFQtNrkioE&ust=1672199988116000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDH-cP0mPwCFQAAAAAdAAAAABAE",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goo-net-exchange.com%2Fcatalog%2FTOYOTA__PRIUS_ALPHA%2F10069162%2F&psig=AOvVaw38XEVmIP_bjAxaiQ2N79cS&ust=1672200133375000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMD7t4n1mPwCFQAAAAAdAAAAABAE",
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
    image: "",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    image: "",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    image: "",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    image: "",
  },
];
let index = cars.length;

const app = express();
app.use(cors());

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
