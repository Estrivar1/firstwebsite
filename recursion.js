function setup(){
    createCanvas(1000,800)
    

}

function draw(){
tri(width/2,0,width,height)

}
 function tri(x,y,w,h){
triangle(x,y,x+w/2,y+h,x-w/2,y+h)
if(w>3){
    tri(x,y,w/2,h/2)
    tri(x+w/4,y+h/2,w/2,h/2)
    tri(x-w/4,y+h/2,w/2,h/2)
    
}
 }