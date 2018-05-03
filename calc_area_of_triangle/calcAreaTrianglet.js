function triangleSquare()
{
	var a = +document.getElementById("a").value;
	var b = +document.getElementById("b").value;
	var c = +document.getElementById("c").value;

	if(a>(b+c) || b>(a+c) || c>(b+c))
	{
		alert("It's impossible to create a triangle!");
	}

	else 
	{
		let p=(a+b+c)/2;
		let s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
		alert('The square root is '+s);
	}
}



