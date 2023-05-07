const port = process.env.PORT || 3001;
const express  = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log("server successfully connected");
});
