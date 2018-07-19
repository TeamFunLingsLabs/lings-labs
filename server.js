const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");


//New student application and id assignment
function applicationTemplate() {
  const applications = {};
  let applyId = 0;

  function newApplications(application) {
    if (application === 'GET') {
      return applications
    }
    applyId++;
    applications[applyId] = Object.assign({}, application, { id: applyId });
    return applications[applyId];
  }

  return newApplications;
}

const newApplication = applicationTemplate();

// app.post("/api/applications", function (req, res) {
//   const application = newApplication(req.body);
//   console.log("application", application);
//   res.json(application);
// });

app.post("/api/applications", function (req, res) {
  application = newApplication(req.body);
  console.log("application", application);
  res.json(application);
});

app.get("/api/applications", function (req, res) {
  const applicants = newApplication('GET');
  res.json(applicants);
});

// app.get("/api/applications", function (req, res) {
//   const applicants = getApplicants();
//   console.log("Applicants ", applicants)
//   res.json(applicants);
// });
// function getApplicants() {
//   return applications;
// }



const storage = {
  merch: {
    1: {
      id: 1,
      name: "Rubber Duck",
      price: 2.71,
      img: "/static/images/duck.jpg",
      desc:
        "This sagely rubber duck will provide all the answers to your coding problems"
    },
    2: {
      id: 2,
      name: "Luxury Egg Timer",
      price: 8.6,
      img: "/static/images/egg.jpg",
      desc:
        "Never get stuck at your computer for longer than it takes to hard boil an egg"
    },
    3: {
      id: 3,
      name: "Note Book",
      price: 11.83,
      img: "/static/images/notebook.jpg",
      desc: "This is a note book"
    },
    4: {
      id: 4,
      name: "Desk Fan",
      price: 15.0,
      img: "/static/images/fan2.jpg",
      desc: "This is a desk fan"
    },
    5: {
      id: 5,
      name: "Signed Hoodie",
      price: 300.0,
      img: "/static/images/hoodie.jpg",
      desc: "This is a signed hoodie"
    },
    6: {
      id: 6,
      name: "Laptop Sticker",
      price: 2.15,
      img: "/static/images/sticker2.jpg",
      desc: "This is a laptop sticker"
    },
    7: {
      id: 7,
      name: "Beard Comb",
      price: 12.5,
      img: "/static/images/comb.jpg",
      desc: "This is a beard comb"
    },
    8: {
      id: 8,
      name: "Novelty Dmitri Disguise",
      price: 9.75,
      img: "/static/images/disguise.jpg",
      desc: "This is a novelty Dmitri disguise"
    }
  },
  orders: {}
};

//Merch functionality

function getMerch(storage) {
  return storage.merch;
}

function getOrders(storage) {
  return storage.orders;
}

app.get("/api/merch", function (req, res) {
  const merch = getMerch(storage);
  res.json(merch);
});

app.post("/api/order", function (req, res) {
  const orderId = `order-${storage.id++}`;
  const tempOrder = req.body;
  tempOrder.id = orderId;
  storage.orders = Object.assign({}, storage.orders, { [orderId]: tempOrder });

  res.status(201).json(tempOrder);
});

app.get("/api/order", function (req, res) {
  const orders = getOrders(storage);
  res.json(orders);
});

app.delete("/api/order/:key", function (req, res) {
  orderhistory = storage.orders;
  delete orderhistory[req.params.key];
  res.status(201).json(orderhistory);
});

app.get("*", function (req, res) {
  res.render("index");
});

const port = process.env.PORT || 8081;
app.listen(port, function () {
  console.log(`Listening on port number ${port}`);
});
