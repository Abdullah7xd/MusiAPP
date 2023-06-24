const mongoose = require('mongoose');
const url = 'mongodb+srv://<music123>:<music321>@cluster0.ihx3lfc.mongodb.net/music-app?retryWrites=true&w=majority';


mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

module.exports = mongoose;
