const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const log = console.log;

app.listen(PORT, () => {
  log(`Server is starting at PORT ${PORT}`);
});
