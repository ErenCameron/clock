var expandera = (250); //used for interactive ellipse
var expanderb = (0); //used for interactive ellipse

var smallSpeed = 5;

function setup() {
    createCanvas(500,500);
  // pt setup code here
    
}

function draw() {
    
    if (mouseIsPressed) {
        background (255,255,255); //background white if mouse pressed 
    }else{
        background(0,0,0) //background black if mouse unpressed 
    }
    noStroke(); 
    fill(0,0,0) // black 
     if (mouseIsPressed) {
       ellipse(expandera,expandera,expanderb,expanderb); 
         // this expands the ellipse when mouse is pressed
       expanderb=expanderb+.75;
        fill("white");
        textSize(32);
        textAlign(CENTER);
        text('PROGRESS',250,75);
        text('IS',250,240);
        text('RELATIVE',250,430);
    
    } else {
       ellipse(expandera,expandera,expanderb,expanderb);
    } 
    if (mouseIsPressed) {
        stroke(0,0,0);
    }else{
        stroke(255,255,255)
    }

    line(250,110,250,160) //12 o'clock
    line(280,190,330,110) //1 o'clock
    line(320,210,400,170) //2 o'clock
    line(320,250,370,250) //3 o'clock
    line(310,290,370,320) //4 o'clock
    line(290,310,310,360) //5 o'clock
    line(250,330,250,380) //6 o'clock
    line(210,340,180,380) //7 o'clock
    line(190,310,120,330) //8 o'clock
    line(180,250,130,250) //9 o'clock
    line(190,220,130,180) //10 o'clock
    line(220,180,170,110) //11 o'clock

    push();
    rectMode(CENTER);
    translate(250,250);


    rotate(frameCount * PI / 50);
    rect(0,20,8,40,[],[],[330,110],[]);
    pop();
    
    push();
    rectMode(CENTER);
    translate(250,250);
    rotate(frameCount * PI / 250);
    rect(0,32.5,15,75,[],[],[330,110],[]);
    pop();

   
   // figure out if possible to rotate two objects at different speeds, unlikely in p5.
   
}

//    var r = random(0, 255);
//    fill(r);
   
// These are the lines used for the clock face
    //line(250,110,250,160) //12 o'clock
    //line(280,190,330,110) //1 o'clock
    //line(320,210,400,170) //2 o'clock
    //line(320,250,360,250) //3 o'clock
    //line(310,290,370,320) //4 o'clock
   // line(290,310,310,360) //5 o'clock
   // line(250,330,250,380) //6 o'clock
   // line(210,340,180,380) //7 o'clock
   // line(190,310,120,330) //8 o'clock
   // line(180,250,130,250) //9 o'clock
   // line(190,220,130,180) //10 o'clock
  //  line(220,180,170,110) //11 o'clock
    
    
  // put drawing code here