var mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost:27017/boardHunter");
var dB ={}
dB.collecData = mongoose.model('collecData',new mongoose.Schema(
    {
        name : String,
        cordinates : String,
        location : String,
        country : String
    },
    {
        collection : 'collecData'
    }
));
/*
var obj = new collecData({
    name : "Microsoft Building",
    cordinates : "25.4333,147.243",
    location : "Dubai",
    country : "UAE"
})
obj.save(function(err){console.log(err)})
*/
module.exports = dB;
