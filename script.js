console.log("Running....");
//Start timer
//if(timer%3==0&&timer%5==0)highlight toes and fingers
//else if(timer%3==0)highlight fingers
//else if(timer%5==0)highlight toes
//reset():input=0 counter=0 highlight=null
//restart():input=0 highlight=null
var i=0;
var count=0,Interval;
var fingers=document.getElementById('fingers'),
	toes=document.getElementById('toes'),
	reset=document.getElementById('reset'),
	restart=document.getElementById('restart'),
	input=document.getElementById('input'),
	counter=document.getElementById('counter'),
	start=document.getElementById('start');

//function for timer
start.addEventListener("click",startFunction);
restart.addEventListener("click",restartFunction);
reset.addEventListener("click",resetFunction);
input.addEventListener("keypress",function(e){	//Adding functionality of ENTER key 
			if(e.keycode===13||event.which===13){
			startFunction();
			}
		});
function startFunction(){
	clearAll();
	var highest=input.value;
    Interval=setInterval(function(){//setting timer
	count++;
	fingers.classList.remove("styleclass");//remove style for both 
	toes.classList.remove("styleclass");
	//code here will be checked for every second
	if(count<=highest){
		if(count%3===0 && count%5===0){
			counter.value=count;
			fingers.classList.add("styleclass");//style class on
			toes.classList.add("styleclass");//styleclass on
	    }
		else if(count%3===0){
			counter.value=count;
			fingers.classList.add("styleclass");
		}
		else if(count%5===0){
			counter.value=count;
			toes.classList.add("styleclass");
		}
		counter.value=count;
	if(count===highest)
	clearInterval(Interval);
	}
},1000)};

function resetFunction(){
	clearAll();
	input.value=0;
	counter.value=0;
	fingers.classList.remove("styleclass");//remove style for both 
	toes.classList.remove("styleclass");
};

function restartFunction(){
count=0;
startFunction();
};

function clearAll(){
	for(var i=1;i<99999;i++){
		clearInterval(i);
	}
}
