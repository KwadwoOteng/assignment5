const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Todo", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Don't worry koraaa, Database connected successfully"))
  .catch((err) => console.log(err.message));
