var a = 0;
var password = prompt('Password');
var pwd = "tekkihcarp";
function setup(){
  createCanvas(displayWidth ,displayHeight);
}

function draw(){
  if(password == pwd){
    a = 1;
  }
  else{
    a = 2;
  }

  if(a === 1){
    text("Idea for Sillicon valley app.The app will tell the user about isro like when it was started when it launched it's first satellite,all the past missions and upcoming missions ",displayWidth/2-480,displayHeight/2-450);
  }

  else{
    text("Your password - "+password+"is wrong",displayWidth/2-50,displayHeight/2);
    text("Hint-8,33,55,55,444,44,222,2,777,7",displayWidth/2-50,displayHeight/2);
    password = prompt('Password');
  }
  console.log(a);

}
