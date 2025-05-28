//your code here
let count=0;
let input=document.querySelector("#evaluatedText");
input.addEventListener("input",()=>{
	count=input.value.length;
	let h=document.querySelector("#letterCount");
	h.innerText=count;
})