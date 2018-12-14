var sq;
var feed = []; // an empty array
var numFood = 10;

var a = [1,2,3];

function setup(){
    createCanvas(640, 480);
    sq = new Rat();
    
    // initializing 10 pieces of food
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw(){
    background(0, 255, 0);
    sq.display();
    
    // display all the food
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function keyReleased() {
    sq.eat();
}

function Food(x, y){
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function(){
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Rat(){
    
    var x = mouseX;
    var y = mouseY;
    var x1 = mouseX+20;
    var y1 = mouseY+20;
    var x2 = mouseX-20;
    var y2 = mouseY+10;
    var x3 = mouseX+10;
    var y3 = mouseY+20;
    
    var diameter = 200;
    
    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function(){
        for(var i = feed.length-1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
            }
        }
    }
    
    this.display = function() {
        
        if(keyIsPressed === false){
            
            background('#FFFAED');
            x = mouseX;
            y = mouseY;
            //x = width/2;
            //y = height/2;
            x1 = mouseX+20;
            y1 = mouseY+20;
            x2 = mouseX-20;
            y2 = mouseY+10;
            x3 = mouseX+10;
            y3 = mouseY+20;
            
            
            //Rat
            
            //face (top)
            fill('#FFFFFF');
            ellipse(x, y, 200, 200);
            
            //face (bottom)
            noStroke();
            fill('#663300');
            arc(x, y, 200, 200, 0*Math.PI, 1*Math.PI);
            
            //nose
            fill('#331900');
            push();
            translate(x+ 25, y+10);
            rotate(-Math.PI/10);
            ellipse(0, 0, 96, 32);
            pop();
            
            //noseTip
            fill('#000000');
            ellipse(x+60, y-4, 25, 25);
            
            //eyeLeft
            fill('#000000');
            ellipse(x+42, y-26, 32, 32);
            
            //eyeRight
            fill('#000000');
            ellipse(x-42, y-26, 32, 32);
            
            //earLeftOuter
            fill('#663300');
            triangle(x-115, y - 105, x - 50, y-92, x-97, y-45);
            
            //earLeftInner
            fill('#FFCCFF');
            triangle(x-110, y - 100, x - 55, y-90, x-95, y-50);
            
            //earRightOuter
            fill('#663300');
            triangle(x+115, y - 105, x + 50, y-92, x+97, y-45);
            
            //earRightInner
            fill('#FFCCFF');
            triangle(x+110, y - 100, x + 55, y-90, x+95, y-50);
            
            //tongue
            fill('#EE3E36');
            arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
            
        } else {
            
            
            background('#FFFAED');
            //face (top)
            fill('#FFFFFF');
            ellipse(x, y, 200, 200);
        
            //face (bottom)
            noStroke();
            fill('#663300');
            arc(x, y, 200, 200, 0*Math.PI, 1*Math.PI);
            
            //earLeftOuter
            fill('#663300');
            triangle(x-115, y - 105, x - 50, y-92, x-97, y-45);
            
            //earLeftInner
            fill('#FFCCFF');
            triangle(x-110, y - 100, x - 55, y-90, x-95, y-50);
            
            //earRightOuter
            fill('#663300');
            triangle(x+115, y - 105, x + 50, y-92, x+97, y-45);
            
            //earRightInner
            fill('#FFCCFF');
            triangle(x+110, y - 100, x + 55, y-90, x+95, y-50);
            
            //outerMouth
            fill('#A62727');
            ellipse(x, y, 190, 190);
            
            x1 = x-94;
            y1 = y+20;
            x2 = x-60;
            y2 = y+20;
            x3 = x-80;
            y3 = y+50;
            
            //outerTeeth
            fill('#FFFFFF');
            triangle(x1, y1, x2, y2, x3, y3);
            triangle(x1, y1-35, x2-7, y2-20, x3-15, y3-35 );
            triangle(x1+15, y1-70, x2, y2-40, x3-12, y3-70);
            triangle(x1+15, y1-70, x2+15, y2-60, x3+20, y3-125);
            triangle(x1+70, y1-110, x2+35, y2-75, x3+20, y3-125);
            triangle(x1+70, y1-110, x2+55, y2-75, x3+90, y3-143);
        }
    
    }
}