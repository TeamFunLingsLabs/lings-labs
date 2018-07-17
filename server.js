const express = require("express");
const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

const storage = {
  merch: {
    1: {
      id: 1,
      name: "Rubber Duck",
      price: 2.71,
      img: "",
      desc: "This is a rubber duck"
    },
    2: {
      id: 2,
      name: "Egg Timer",
      price: 8.6,
      img: "",
      desc: "This is an egg timer"
    },
    3: {
      id: 3,
      name: "Note Book",
      price: 11.83,
      img: "",
      desc: "This is a note book"
    },
    4: {
      id: 4,
      name: "Desk Fan",
      price: 15.0,
      img: "",
      desc: "This is a desk fan"
    },
    5: {
      id: 5,
      name: "Signed Hoodie",
      price: 300.0,
      img: "",
      desc: "This is a signed hoodie"
    },
    6: {
      id: 6,
      name: "Laptop Sticker",
      price: 2.15,
      img: "",
      desc: "This is a laptop sticker"
    },
    7: {
      id: 7,
      name: "Beard Comb",
      price: 12.5,
      img: "",
      desc: "This is a beard comb"
    },
    8: {
      id: 8,
      name: "Novelty Dmitri Disguise",
      price: 9.75,
      img: "",
      desc: "This is a novelty Dmitri disguise"
    }
  },
  orders: {}
};

function getMerch(storage) {
  return storage.merch;
}

function getOrders(storage) {
  return storage.orders;
}

app.get("/api/merch", function(req, res) {
  const merch = getMerch(storage);
  res.json(merch);
});

app.post("/api/order", function(req, res) {
  const orderId = `order-${storage.id++}`;
  const tempOrder = req.body;
  tempOrder.id = orderId;
  storage.orders = Object.assign({}, storage.orders, { [orderId]: tempOrder });

  res.status(201).json(tempOrder);
});

app.get("/api/order", function(req, res) {
  const orders = getOrders(storage);
  res.json(orders);
});

app.delete("/api/order/:key", function(req, res) {
  orderhistory = storage.orders;
  delete orderhistory[req.params.key];
  res.status(201).json(orderhistory);
});

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
