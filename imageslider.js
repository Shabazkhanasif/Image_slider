var nxtbtn=document.querySelector(".prevbtn");
var prevbtn=document.querySelector(".nextbtn");
var image=document.querySelector(".images");


let count=0;
nxtbtn.addEventListener("click",next);
prevbtn.addEventListener("click",prev);

function next(){
	count++;
    if(count=='5')
    {
    count=count-5;
    }
	image.style.background=`url("images/Eband-${count}.jpg")`;
}

function prev(){
	count--;
	if(count<"0")
	{
		count=count+5;
	}
	image.style.background=`url("images/Eband-${count}.jpg")`;
}