const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    // should serve the React app in ./vite-project/dist/client
    res.sendFile(__dirname + '/vite-project/dist/client/index.html');

  
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});