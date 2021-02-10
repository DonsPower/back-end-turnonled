const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cors=require('cors');
var io = require('socket.io')(app.listen(8081));
//var five = require('johnny-five');
const { Board, Led } = require("johnny-five");
app.use(cors());
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var board = new Board({
    port: "COM5"
});
board.on("ready",function(){
    app.post('/led', function (req,res) { 
        var cont=req.body.contador; 
        

        res.send(req.body);
        var estado=req.body.estado;
        if(estado==1){
        
                const led = new Led(13);
                // Blink every half second
                led.on();
            setTimeout(function(){
                led.stop().off();
            },4000);
            
        }
    });
    app.post('/ledred', function (req,res) { 
        var cont=req.body.contador; 
        

        res.send(req.body);
        var estado=req.body.estado;
        if(estado==1){
        
                const led = new Led(11);
                // Blink every half second
                led.on();
            setTimeout(function(){
                led.stop().off();
            },4000);
            
        }
    });
});
// // console.log(es);
// // estado=0;
// // if(es){
// //     board.on("ready",()=>{
// //         const led = new Led(13);
// //         // Blink every half second
// //         led.blink(500);
// //     });
// // }


// // board.on('ready', function () {
// //     var speed, commands, motors;
// //     var anode = new Led.RGB({
// //         pins: {
// //             red: 13,
// //             green: 11,
// //             blue: 10
// //         },
// //         isAnode: true
// //     });

// //     commands = null;

// //     anode.on();
    

// //     anode.blink(1000);

// //     var blink = true;

// //     io.on('connection', function (socket) {
// //         socket.on('azul', function (){
// //             anode.on();
// //             anode.color("#3366CC");
// //         });

// //         socket.on('verde', function (){
// //             anode.on();
            
// //         });

// //         socket.on('rojo', function (){
// //             anode.on();
            
// //         });

// //         socket.on('stop', function (){
// //             if (blink){
// //                 anode.stop(); // to stop blinking
// //                 blink = false;
// //             }
// //             else{
// //                 anode.blink(1000);
// //                 blink = true;
// //             }
// //         });

// //         socket.on('off', function (){
// //             anode.off();  // to shut it off (stop doesn't mean "off")
// //         });

// //         socket.on('on', function (){
// //             anode.on(); // to turn on, but not blink
// //         });

// //     });
// });
