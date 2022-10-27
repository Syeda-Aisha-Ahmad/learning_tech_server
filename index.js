const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const allCourses = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('name');
})
app.get('/courses', (req, res) => {
    res.send(allCourses)
})

app.listen(port, () => {
    console.log('anything', port)
})
