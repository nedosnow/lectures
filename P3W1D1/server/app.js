require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;

const list = [
  {
    id: "222",
    author: "Дж. Р. Р. Толкиен",
    title: "Властелин колец",
  },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json(list);
});

app.post("/api", (req, res) => {
  const { author, title } = req.body;

  if (author && title) {
    const newBook = {
      id: Date.now(),
      author,
      title,
    };

    list.push(newBook);

    return res.status(201).json(newBook);
  }

  return res.sendStatus(406);
});

app.listen(PORT, () => {
  console.log(`success`);
});
