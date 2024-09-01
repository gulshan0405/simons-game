let gameSeq=[];
let userSeq=[];

let btns=["yellow","pink","blue","green"];

let started=false;
let level=0;
let highestScore=0;

let h3= document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    },250);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },250);
 }
 

function levelup(){
    userSeq=[];
 level++;
 h3.innerText=`Level ${level}`;

 let randidx=Math.floor(Math.random()*4);
 let randomColor=btns[randidx];
 let randombtn=document.querySelector(`.${randomColor}`);
 //random btn choose
//  console.log(randidx);
//  console.log(randomColor);
//  console.log(randombtn);
gameSeq.push(randomColor); 
console.log(gameSeq);

 gameFlash(randombtn);
}
function checkAns(idx){
//console.log("curr level : ",level)
if(userSeq[idx]===gameSeq[idx]){
  if(userSeq.length==gameSeq.length ){
    setTimeout(levelup,1000);
  }
    
}
else{
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    h3.innerHTML=`Game Over! Your score was <b>${level}<b> <br> Press any key to start..`;
    if (level > highestScore) {
        highestScore = level;
        let p = document.createElement("p");
        p.innerHTML = `<b>Your highest Score is ${highestScore}</b>`;
        document.body.appendChild(p);
        p.style.textAlign="centre";
    }
    reset();
}
}

function btnPress(){
    
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

