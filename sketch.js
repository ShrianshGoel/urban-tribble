var back,back1,b1,b2,b3,b4;
var naruto,n1;
var rule,r1,r2;
var l1,g1,soundee
var ifame
var slider,s1;
var audio
var logo
var gameState=0
var data
var fire
var legend,girl

var ch1,ch;
var fo
    var info,info1,info2,info3
   var cam=0;
var cha=0
    var next
   var open,close
var sd=0;
var sound
var input;
var gameState=0;
var name;
var character,c1,c2,c3;
var selection=0
var video
var shuriken,s1;
var legend,girl
var button;
var value=0
var sound2;

function preload(){
  back1= loadAnimation("https://shrianshgoel.github.io/stunning-octo-bassoon/giphy.gif");
  sound=loadSound("final-battle_zkeWNgBO_WM.mp3");
  s1=loadAnimation("FlyingStar.gif");
  n1=loadAnimation("n.gif");
  b2=loadAnimation("https://shrianshgoel.github.io/super-duper-octo-fortnight/pro_blur-b14as11h2r.gif");
  sound2=loadSound("pro_blur-b14as11h2r.mp3");
 legend=loadSound("https://shrianshgoel.github.io/solid-octo-palm-tree/legends.mp3")
  girl=loadSound("https://shrianshgoel.github.io/solid-octo-palm-tree/girl.mp3")
 c1=loadAnimation("c1.png")
  c2=loadAnimation("c2.png")
  c3=loadAnimation("c3.png")
  logo=loadImage("IMG_20210928_154050.jpg")
 c4=loadAnimation("c4.png")
  b3=loadAnimation("https://c.tenor.com/o23PLsTxPLoAAAAd/wallpaper.gif")
 
  b4=loadAnimation("https://shrianshgoel.github.io/solid-octo-palm-tree/smile_loader_by_gleb.gif");
  fire=loadFont("8ee4d571-40e4-4898-8a5f-712403e1e7b9.ttf")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  back = createSprite(width/2,height/2,20,20);
  back.addAnimation("screenshots",back1);
  back.addAnimation("in",b2);
back.addAnimation("b4",b4)
  back.addAnimation("ch",b3)
  back.scale= width/319
  
 
  
        l1 = createButton("Play Legends Never Die");
      l1.class("o")
  l1.hide()
      l1.position(width/2.20,height/8.20);
      
           g1 = createButton("Play Lyrical Music");
      g1.class("o")
  g1.hide()
      g1.position(width/6.20,height/8.20);
      
      
           soundee = createButton("Play theme music");
      soundee.class("o")
      soundee.position(width/1.20,height/8.20);
  soundee.hide()
  
  slider= createSlider(0,1.2,1);
  slider.class("start")
  slider.position(width/2,height/2)
  slider.hide()
  
  input = createInput("").attribute("placeholder","Name Please","color:Red");
  input.position(width/2.50,height/2.40);
  input.size(width/07,width/32);

  
  
  
  button= createButton("Lets Get Started!!");
  button.position(width/2.40,height/1.80)
  button.size(width/07,width/22);
  button.class("o")
  
  character=createSprite(width/2,height/2,90,90);
  character.addAnimation("c1",c1);
  character.addAnimation("c2",c2);
  character.addAnimation("c3",c3);
  character.addAnimation("c4",c4);
  character.scale=width/2222
  character.visibile=false;
  character.depth=0
  
         he= createSprite(width/12,height/9,90,90)
    he.scale=0.50
  
      he.addImage(logo)
  
 rule = createElement("h4","2nd Use Up arrow Key to jump, left and right to move, down to duck") 
  rule.position(width/6.5,height/5.10) 
  rule.hide();
  
  
     info = createButton("Rai is an assasination expert who has never one failed she was raised in the mountains and excels in using swords")
      info.class("info");
      info.position(width/7,height/13)
        info.hide()
  info.size(width/3,height/8)
  
   info1 = createButton("John is an agent he specializes in magical bullets and hand to hand combat")
      info1.class("info");
      info1.position(width/7,height/13)
    info1.size(width/3,height/8)
        info1.hide()
  
     info2 = createButton("Lee is the op sorcerer in ice and fire magic he is also a good kung-fu user")
      info2.class("info");
      info2.position(width/7,height/13)
        info2.hide()
    info2.size(width/3,height/8)
  
  
     info3 = createButton("Zhang is a boy with the power to move things and make a person mentally suffer, If a person is caught in it it is hard to dodge it")
      info3.class("info");
      info3.position(width/7,height/13)
        info3.hide()
    info3.size(width/3,height/8)
  
          next= createButton("")

    next.class("next");
    next.position(width/1.40,height/1.70)
      next.size(width/10.50,width/10.50)
        next.hide()
      fo =createButton("Start")
      fo.position(width/2.20,height/1.10);
        fo.size(width/12.50,height/11.10)
        fo.class("start")
        fo.hide()
  
  
  r1=createElement("h4","1st No Copyright allowed");
  r1.position(width/2.50,height/2);
  r1.class("o3");
  r1.hide()
  
    
  r2=createElement("h4","3rd Please Wait while players are joining");
  r2.position(width/1.50,height/5.10);
  r2.class("o4");
  r2.hide()
  
  shuriken = createSprite(width/3,height/3.21,90,90);
  shuriken.addAnimation("ok",s1);

  shuriken.scale=width/7222
      shuriken.velocityX=2;
  
  sound.play()
  
  naruto = createSprite(width/2,height/1.20,90,90);
  naruto.addAnimation("toon",n1);
  naruto.scale=width/1432;
 
  input.class("text");
  
open=createButton("")
  open.class("camera");
open.position(width/9.40,height/1.70)
  open.size(width/10.50,width/10.50)
  open.hide();
  
}

function draw() {
  background(220);
  drawSprites();


   sound.volume = slider.value()
    cursor('https://github.com/ShrianshGoel/sturdy-octo-giggle/blob/main/curor.png?raw=true')

  
  if(cha>3){
    cha=3
  }
    
  if(cha<0){
    cha=0
  }
  
  if(gameState===4){
        info.hide()
            info2.hide()
var iframe2
textFont(fire)
            info3.hide()
if(frameCount<500){
      fill("blue")
    textSize(32)
       text("Waiting for players",width/2.80,height/1.30)
}
    if(frameCount>500&&frameCount<700){
          fill("blue")
    textSize(32)
       text("Checking Database",width/2.80,height/1.30)
    }
    
        if(frameCount>700&&frameCount<1100){
          fill("blue")
    textSize(32)
       text("Loading",width/2.40,height/1.30)
    }
    if(frameCount===1100){
      if(cha===1){
      var link = createElement("a","Click to Continue(Further Game in Development)").attribute("href","https://shrianshgoel.github.io/reimagined-octo-goggles")
      link.class("start")
      link.position(width/3,height/1.30)
    }
          if(cha===2){
      var link1 = createElement("a","Click to Continue(Further Game in Development)").attribute("href","https://preview.p5js.org/shriansh.goel-jade/present/iYyNP9Yel")
      link1.class("start")
      link1.position(width/3,height/1.30)
          }
            if(cha===0){
      var link2 = createElement("a","Click to Continue(Further Game in Development)").attribute("href","https://preview.p5js.org/shriansh.goel/present/2Qo4KPHmJ")
      link2.class("start")
      link2.position(width/3,height/1.30)
    }
            if(cha===3){
      var link4 = createElement("a","Click to Continue(Further Game in Development)").attribute("href","https://preview.p5js.org/shriansh.goel-jade/present/VUHcFEMR3")
      link4.class("start")
      link4.position(width/3,height/1.30)
    }
    }
        info1.hide()
    if(frameCount===10){
       iframe = createElement("iframe").attribute("src", "https://preview.p5js.org/shriansh.goel-jade/present/dyrKLqB7r");
  iframe.hide()
iframe.class("text1")
  iframe.position(width/9,height/1.90)
  
    iframe.show()
      
             iframe2 = createElement("iframe").attribute("src", "https://sketchfab.com/models/92c4b2fb726d4bf0bca7f6d471fa76cd/versions/660f66c0e08f4a19a97bf6ac7c3fc82c/embed?autostart=1&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0");
  iframe2.hide()
iframe2.class("text1")
  iframe2.position(width/1.40,height/1.90)
  
    iframe2.show()
   
      
l1.show()
      g1.show()
      soundee.show()
    }
    l1.mousePressed(
    ()=>{
      sound.stop()
      legend.play()
      girl.stop()
    }
    )
        g1.mousePressed(
    ()=>{
      sound.stop()
      legend.stop()
      girl.play()
    }
    )
        soundee.mousePressed(
    ()=>{
      sound.play()
      legend.stop()
      girl.stop()
    })
  }
  
  
  
  if(gameState===3){
 

//creating buttons and increasing values
    if(selection===0){
      if(frameCount===10){
    fo.show()
        info.show()
        next.show()
        
      }
    }
      next.mousePressed(
      ()=>{
  
        cha=cha+1
        
       
      })
           open.mousePressed(
      ()=>{
        cha=cha-1
      })
   
    
 
    //changing sprites
      if(cha===1){
        character.changeAnimation("c2",c2)
        info.hide()
            info2.hide()
            info3.hide()
        info1.show()
      }
     if(cha===0){
        character.changeAnimation("c1",c1)
        info.show()
            info2.hide()
            info3.hide()
        info1.hide()
      }
      
          if(cha===2){
        character.changeAnimation("c3",c3)
             info.hide()
            info2.show()
            info3.hide()
        info1.hide()
      }
          if(cha===3){
        character.changeAnimation("c4",c4)
             info.hide()
            info2.hide()
            info3.show()
        info1.hide()
      }
      
      
      fo.mousePressed(
              ()=>{
                fo.hide()
                info.hide()
                next.hide()
                frameCount=0
                back.changeAnimation("b4",b4)
                open.hide()
                   gameState=4
                sound.play()
                  })

      
      open.show()
      
    

  }
  
 if(gameState===2){
rule.class("o2")
  rule.show();
   r1.show();
   r2.show();
 var  button2
         button2= createButton( "I "+input.value()+" have read the rules");
  button2.position(width/2,height/1.20)
  button2.size(width/07,width/22)
  button2.class("o");
   button2.hide();
   var score = 0
   if(frameCount===10){

  button2.show();
   }
   if(score===1){
     button2.hide();
   }
 button2.mousePressed(
   ()=> {
          button2.hide()
         r1.hide()
       gameState=3
         r2.hide();
    back.changeAnimation("ch",b3)
      character.depth=5
        rule.hide();
    back.scale= width/429
 score = 1
     frameCount=0
         character.visibility=true;
   
     })
 }
  
  
  
  if(gameState===1){
 
    
    if(frameCount===10){
        button1= createButton("Lets Begin "+input.value());
  button1.position(width/2,height/1.20)
  button1.size(width/07,width/22)
  button1.class("o");

 button1.mousePressed(
   ()=> {
     gameState=2;
     button1.hide();
     he.destroy()
     frameCount=0;
   })
    }
  }
  
  
  if (value===0){
      if (frameCount%1890===0){
        sound.play();
      }
      }

  
  if(value===1){
         naruto.depth=0;

    if(frameCount===120&&gameState==0){
      gameState=1;
      frameCount=0;
    }
  }
if(gameState===0&&keyWentDown("Enter")&&sd===0){
     input.hide();
    button.hide();


 back.changeAnimation("in",b2);
     sound2.play();
  sd=1
  shuriken.destroy()
     sound.stop();
     value=1
    frameCount=0;
}
  button.mousePressed(
   ()=> {
   input.hide();
     shuriken.destroy()
    button.hide();
 back.changeAnimation("in",b2);
     sound2.play();
     sound.stop();
     naruto.destroy()
     value=1
    frameCount=0;
  }
)
}
