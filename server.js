const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// keys for twilio
accountSid = "ACb43bace59bfbef821723be7b56b1b7a6";
authToken = "2e1f9e637912d69716ea8c490efb4033";
const client = require("twilio")(accountSid, authToken);

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

//New student application and id assignment
function applicationTemplate() {
  const applications = {};
  let applyId = 0;

  function newApplications(application) {
    if (application === "GET") {
      return applications;
    }
    applyId++;
    applications[applyId] = Object.assign({}, application, { id: applyId });

    return applications[applyId];
  }
  return newApplications;
}

const newApplication = applicationTemplate();

app.post("/api/applications", function(req, res) {
  application = newApplication(req.body);
  res.json(application);
});

app.get("/api/applications", function(req, res) {
  const applicants = newApplication("GET");
  res.json(applicants);
});

app.post("/sendsms", (req, res) => {
  client.messages
    .create({
      to: "+447762071057",
      from: "+441298918018",
      body:
        "alert(New Padawan application ready for assessment, Master Dmitri!)"
    })
    .then(message => console.log(message.sid));
});

const storage = {
  merch: {
    1: {
      id: 1,
      name: "Rubber Duck",
      price: 2.71,
      img: "/static/images/duck.jpg",
      desc:
        "This sagely rubber duck will provide all the answers to your coding problems."
    },
    2: {
      id: 2,
      name: "Luxury Egg Timer",
      price: 8.6,
      img: "/static/images/egg.jpg",
      desc:
        "Never get stuck at your computer for longer than it takes to hard boil an egg."
    },
    3: {
      id: 3,
      name: "Note Book",
      price: 11.83,
      img: "/static/images/notebook.jpg",
      desc:
        "Why type your notes when you could write them out by hand? It's not like you're a computer programmer or anything..."
    },
    4: {
      id: 4,
      name: "Desk Fan",
      price: 15.0,
      img: "/static/images/fan2.jpg",
      desc:
        "Handy little fan that plugs into your laptop USB port and keeps you free of embarrassing sweat patches."
    },
    5: {
      id: 5,
      name: "Signed Hoodie",
      price: 300.0,
      img: "/static/images/hoodie.jpg",
      desc:
        "Signed by a group of legends, this hoodie is worth every penny. Only one other like it in existence."
    },
    6: {
      id: 6,
      name: "Laptop Sticker",
      price: 2.15,
      img: "/static/images/sticker2.jpg",
      desc:
        "Pimp your laptop with a sought-after Constructor Labs sticker. Be the envy of all your friends."
    },
    7: {
      id: 7,
      name: "Beard Comb",
      price: 12.5,
      img: "/static/images/comb.jpg",
      desc:
        "It's all too easy to develop scruffy facial hair in this industry with all the beard scratching. Fix that now."
    },
    8: {
      id: 8,
      name: "Novelty Dmitri Disguise",
      price: 9.75,
      img: "/static/images/disguise.jpg",
      desc:
        "Look like the legend himself this Halloween with our reasonably-priced novelty Dmitri disguise."
    },
    9: {
      id: 9,
      name: "Beard Wax",
      price: 7.85,
      img: "/static/images/hairwax.jpg",
      desc:
        "Also in our beard grooming range is this top of the range beard wax - endorsed by Dmitri Grabov."
    },
    10: {
      id: 10,
      name: "Vlad the Ted",
      price: 19.99,
      img: "/static/images/vladted.jpg",
      desc:
        "If you didn't manage to get it all off your chest with the duck, try talking to Dmitri's teddybear Vlad."
    },
    11: {
      id: 11,
      name: "Sushi Flashdrive",
      price: 8.69,
      img: "/static/images/sushiusb.jpg",
      desc:
        "This cute little USB stick is a replica of Dmitri's favourite snack."
    },
    12: {
      id: 12,
      name: "Pint of Vodka",
      price: 7.0,
      img: "/static/images/pint.jpg",
      desc:
        "You want to code like him, but can you drink like him? His beverage of choice is a pint of Stoli."
    },
    13: {
      id: 13,
      name: "False Beard",
      price: 14.32,
      img: "/static/images/fakebeard.jpg",
      desc:
        "Every discerning programmer needs a beard. If you don't have one or can't grow one (ladies), this is the fake for you."
    },
    14: {
      id: 14,
      name: "Plastic Whiteboard Sheets",
      price: 10.01,
      img: "/static/images/plastic.jpg",
      desc:
        "Who needs a whiteboard when you could use disposable plastic sheets that magically stick on the wall?"
    },
    15: {
      id: 15,
      name: "Patterned Shorts",
      price: 32.07,
      img: "/static/images/shorts.jpg",
      desc:
        "Get Dmitri's slick summer style and don a pair of patterned shorts - keeping it cool in both senses."
    },
    16: {
      id: 16,
      name: "You Don't Know JS",
      price: 26.53,
      img: "/static/images/JSBook.jpg",
      desc:
        "We stock every title in Kyle Simpson's 'You Don't Know JS' series - because let's face it, you don't know JS!"
    },
    17: {
      id: 17,
      name: "Computer Chair",
      price: 67.88,
      img: "/static/images/compchair.jpg",
      desc:
        "Get the exact chair used by Dmitri's students. Comes with authentic scratchiness and anti-sweat technology."
    },
    18: {
      id: 18,
      name: "Keyboard Wipes",
      price: 3.16,
      img: "/static/images/wipes.jpeg",
      desc:
        "We all love pair programming but it spreads diseases. Stay safe and keep your keyboard sanitized between drivers."
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
