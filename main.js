var btn=document.querySelectorAll(".calculate");
var input=document.querySelectorAll(".in");
var price=document.querySelectorAll(".cost");

function calc(){
    let a=this.parentNode.previousElementSibling.previousElementSibling;
    let b=a.innerText;
    let c=parseInt(b);

    let d=this.parentNode.previousElementSibling.firstChild;
    let e=d.value;
    let t=c*e;

    let total = this.parentNode.nextElementSibling;
    total.innerText=t;
}

btn.forEach(function(b){
    b.addEventListener("click",calc);
}
)


