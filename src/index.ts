import express from 'express';

const app = express();
app.get('/', (_, res) => res.status(200).send('Hello, world!'));
const port = 5000;
const server = app.listen(port, '0.0.0.0', () => {
    console.log('i am alive!!!!');
    console.log(`http://localhost:${port}/`);
});
