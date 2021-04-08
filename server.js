const express = require("express");
const PORT = process.env.PORT || 4000;

// connect to database
require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/todos", require("./routers/todoRouter"));

// app.use("/auth", require("./routers/authRouter"));
// app.use("/users", require("./routers/usersRouter"));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
