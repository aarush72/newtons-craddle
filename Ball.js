class Ball {
constructor(x,y,r) {

var option = {
restitution : 1,
friction : 0.5,
density : 0.5
}

this.x = x;
this.y = y;
this.r = r;
this.body = Bodies.circle(this.x,this.y,this.r/2,option);
World.add(world,this.body)

}

display() {
var ballpos = this.body.position;

push()
translate(ballpos.x,ballpos.y);
strokeWeight(5);
fill("cyan");
ellipse(0,0,this.r, this.r);
pop()

}




}