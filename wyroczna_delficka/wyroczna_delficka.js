//alert('ok');





function checkUpWishes()
{
	var ProbilityEvent=Math.floor(Math.random()*100)+1;
	
	document.getElementById("answer").innerHTML=ProbilityEvent;
	
		
	if(ProbilityEvent>=0 && ProbilityEvent<34)
		addEventListener("click",document.getElementById("phrase").style.color='red');
	else if(ProbilityEvent>33 && ProbilityEvent<67)
		addEventListener("click",document.getElementById("phrase").style.color='blue');
	else (ProbilityEvent>67 && ProbilityEvent<=100)
		addEventListener("click",document.getElementById("phrase").style.color='green');		
}


	
	
	
	
	
