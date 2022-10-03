const express  = require("express");
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get("/krystins-favorite-movie", (req, res, next) => {
   res.send( `
    <h1 style = "color: pink;">
        LOVE & BASKETBALL
    </h1>
    `
 );
})