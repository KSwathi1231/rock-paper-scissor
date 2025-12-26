let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("pick");
const mine=document.getElementById("mine");
const other=document.getElementById("comp");
const ref=document.getElementById("but");
const select=document.getElementById("select");

ref.addEventListener("click",()=>{
    user=0;
    comp=0;
    mine.innerText=0;
    other.innerText=0;
    msg.innerText="Pick Your Move";
    msg.style.backgroundColor="grey";
    select.classList.add("hide");
})

const drawGame=()=>{
    msg.innerText="Draw...";
    msg.style.backgroundcolor="pink";
}

const showResult=(userwins)=>{
    if(userwins===true){
        user++;
        mine.innerText=user;
        msg.innerText="You won...";
        msg.style.backgroundcolor="green";
        msg.style.color="white";
    }
    else{
        comp++;
        other.innerText=comp;
        msg.innerText="Computer Won...";
        msg.style.backgroundolor="red";
        msg.style.color="white";
    }
}

const generate=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const playGame=(userChoice)=>{
    console.log("User choice is "+userChoice);
    select.classList.remove("hide");
    const compChoice=generate();
    select.innerText="computer choice is "+compChoice;

    if(userChoice===compChoice){
        console.log("Draw");
        msg.innerText="Draw...";
        msg.style.backgroundcolor="blue";
        drawGame();
    }
    else{
        let userwins=true;
        if(userChoice=="rock"){
            if(compChoice=="scissor"){
                userwins=true;
            }
            else{
                userwins=false;
            }
        }
        else if(userChoice=="paper"){
            if(compChoice=="scissor"){
                userwins=false;
            }
            else{
                userwins=true;
            }
        }
        else if(userChoice=="scissor"){
            if(compChoice=="paper"){
                userwins=true;
            }
            else{
                userwins=false;
            }
        }
        showResult(userwins);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        const userChoice=e.currentTarget.id;
        playGame(userChoice);
    });
});