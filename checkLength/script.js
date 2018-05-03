//alert('ok');
function checkLenPosWord()
{
	var w=document.getElementById('word').value;
	//alert(w);
	
	var len=w.length;
	//alert(len);
	
	var searchWord=w.search('kot');
	//alert(searchWord);
	
	(len>=6)&&(searchWord+3==len)? document.getElementById('answer').innerHTML='<b>'+w+'</b>'+' this lettering has at least six characters and it ended with word "kot"':
	(len>=6)? document.getElementById('answer').innerHTML='<b>'+w+'</b>'+' this lettering has at least six characters but it have not ended with word "kot"':
	document.getElementById('answer').innerHTML='<b>'+w+'</b>'+' this lettering ended with word "kot", but it does not have at least six word';
	
	
}