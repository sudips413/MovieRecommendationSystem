
const router = require('express').Router();
const spawn = require('child_process').spawn;
router.post('/', (req, res) => {
    console.log(req.body);
    const process = spawn('python', ['./Moive-Recommendation-System/index.py', req.body.movie_name]);
    // const process = spawn('python', ['./routes/test.py', req.body.movie_name]);
    process.stdout.on('data', (data) => {
        console.log(data.toString());
        res.send((data));
    });

});

module.exports = router;