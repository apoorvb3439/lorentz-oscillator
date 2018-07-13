var a=10;
var b=8.0/3.0;
var c=28;

var dx;
var dy;
var dz;
var dt=0.01;

var x=0.01;
var y=0.01;
var z=0.01;
var r=0.3;

var arr=[];
var arrsize=100000;
var s=5;
function Vector3(x,y,z){
	this.x=x;
	this.y=y;
	this.z=z;
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw(){
  background(250);
	scale(s);
  rotateY(frameCount * dt);

	if(arr.length==arrsize)
	{
		shiftArr();
	}

for(var i=0;i<arr.length;i++){
  push();
  translate(arr[i].x,arr[i].y,arr[i].z);
  sphere(r);
  pop();
}

  dx=dt*a*(y-x);
  dy=dt*(x*(c-z)-y);
  dz=dt*(x*y-b*z);

  x=x+dx;
  y=y+dy;
  z+=dz;
	arr.push(new Vector3(x,y,z));


}

function shiftArr()
{
	for(var j=1;j<arr.length;j++)
	{
		arr[j-1]=arr[j];
	}
	arr.splice(arr.length-1,1);
	//pop(arr);
}
