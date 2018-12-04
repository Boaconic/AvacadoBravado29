var sq;
var feed = [];
var numFood = 10;

function setup(){
    createCanvas(640, 480);
    sq = new Rat();
}

function draw(){
    sq.display();
}

function Food(x, y){
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.display = function(){
        fill(250, 145, 12);
        ellipse(this.x, this.y, 50, 50);
    }
}

function Rat(){
    
    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x) + Math.pow(y - other.y));
        return dist;
    }
    
    this.eat = function(){
        
    }
    
    this.display = function() {
        
        background('#FFFAED');
        var x = mouseX;
        var y = mouseY;
        
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