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
    sq.display();
    
    // display all the food
    for(var i = 0; i < numFood; i++) {
        feed[i].display();
    }
}

function mousePressed() {
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
    var diameter = 200;
    
    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function(){
        console.log('try to eat');
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                console.log('hit');
            }
        }
    }
    
    this.display = function() {
        
        background('#FFFAED');
        x = mouseX;
        y = mouseY;
        
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
    
    }
}