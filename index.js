const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const name = "mohit_dhawan_14102001";
const email = "mohit0628.cse19@chitkara.edu.in";
const rollNo = "1910990628";

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/bfhl", async (req, res) => {
  const details = {};
  const number = [];
  const alphabet = [];
  let issuc=true;
  try {
    const body = await req.body;

    const detail = body.data;
    for (const d of detail) {
      if (parseInt(d)) {
        number.push(d);
      } else {
        alphabet.push(d);
      }
    }
    details["issuc"]=issuc;
    details["email"] = email;
    details["user_id"] = name;
    details["roll_number"] = rollNo;
    details["number"] = number;
    details["alphabet"] = alphabet;
    details["issuc"]=issuc;

    res.send(details);
  } catch (error) {
      issuc=false;
  }
});

app.listen(port, () => console.log(`app listening on port ${port}!`));