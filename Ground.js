class Ground{
constructor (x,y,width,height){
var option ={
isStatic : true
}
this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
World.add(world,this.body);
}
display(){
var posi = this.body.position;
rectMode (CENTER);
fill (186);
rect(posi.x,posi.y,this.width,this.height);


}

}