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
app.get('/details/:id', (req, res) => {
    const allDetails = parseInt(req.params.id);
    const details = allCourses.find(detail => detail.id === allDetails);
    res.send(details)
})
app.listen(port, () => {
    console.log('anything', port)
})
