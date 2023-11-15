let btn=document.querySelector(".send");
let screen=document.querySelector(".screen");
let inp=document.querySelector(".message");
let h4=document.querySelector("h4");
let notification=document.querySelector(".notification-icon");
let username=prompt("enter username");
let member=document.createElement("p");
member.innerText="Welcome "+username;
member.style.color="white";
h4.appendChild(member);
let login=document.querySelector(".login-button");
btn.addEventListener("click",()=>{
    let chats=document.querySelector(".chats");

    btn.style.backgroundColor="green";
    notification.style.color="green";
    setTimeout(()=>{
        notification.style.color="white";
    },1000);
    btn.innerText="Sent";
    setTimeout(()=>{btn.style.backgroundColor="black";
    btn.style.color="white";
    btn.innerText="Send"},1000);
    let h5=document.createElement("h5");
    h5.innerText=username.toUpperCase();
    h5.classList.add("username");
    let p=document.createElement("p");
    p.innerText=inp.value;
    p.classList.add("chat");
    chats.appendChild(h5).appendChild(p);
    p.addEventListener("click",()=>{
        let user=prompt("Do you want to delete");
        if(user=="yes"){
            p.remove();
            h5.remove();
            alert("Ok thanks for the input");
        }
        else{
            alert("Ok thanks for the input");
        }
    })
})
login.addEventListener("click",()=>{
    alert("Sorry this feature is not yet in use");
})

/*if(inp.value=="delete"){
    p.remove();
    h5.remove();
}*/
