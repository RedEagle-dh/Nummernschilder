const express = require('express');
const app = express();

const PORT = 3100;

const nummernschildRouter = require(`../api/getNummernschild`);

app.use(express.json());

app.use(`/api/nummernschild`, nummernschildRouter);



app.listen(PORT, () => {console.log(`Started listening on port ${PORT}`)})

