import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        data: 'Welcome to the API',
        error: null,
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});