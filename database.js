var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var RoomTypes = 'Single VIP DoubleShare MaleWard FemaleWard ICU CCU MICU Dialysis '.split(' ');

var Superhero = new Schema({
  Email:{
        type: String,
        trim: true,
        unique: true,
        index:true,
        //required: 'Email address is required',
        //validate: [validateEmail, 'Please fill a valid email address'],
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String,
               // required: true
              },
	
	devices: [{
	Floor: {type: String}, // 1. Required validation
	
    RoomType: {type: String,enum:RoomTypes}, // 1. Required validation
    RoomNumber:  {type: String}, // 1. Required validation
    BedNumber: {type: String}, // 1. Required validation
    IP: {type: String,unique: true,//required: true,
         index: true,match: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/}, // 1. Required validation
	
    
     }],
	
});

mongoose.model('superheros', Superhero);

mongoose.connect('mongodb://localhost/node-superhero');
