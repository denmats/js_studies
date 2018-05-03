//alert('ok');
function changeLetters()
{
	var twoWords=document.getElementById("words").value; //catch the words from html form
	let len=twoWords.length;//check the phrase length
	
	let gap=0;

	//search break between words(with ACSII table: break has code 32)
	for(i=0;i<len;i++)
	{
		if(twoWords.charCodeAt(i)==32)
		{
			gap++;
			var gapIndex=i; //remember index of break in variable 'gapIndex'
			//alert('gapIndex='+gapIndex);
		}
		
	}	
		//check condition, when we have a deal with two words
		//if the phrase consists more or less than two words, program ends
		if(gap==1) 
		{
			
			var firstWord='';
			var secondWord='';
			//write out the first word
			for(i=0;i<gapIndex;i++)
			{
				firstWord=firstWord+twoWords.charAt(i);
			}	
			
			//write out the second word
			for(i=gapIndex+1;i<len;i++)
			{
				secondWord=secondWord+twoWords.charAt(i);
			}	
			
			//cut out the first letters in both words and put down to 'buffer1' and 'buffer2'
			var buffer1=firstWord.substr(0,1)
			var buffer2=secondWord.substr(0,1)
			
			//change the first letters in both words with clause 'replace'
			var fw=firstWord.replace(buffer1,buffer2);
			var sw=secondWord.replace(buffer2,buffer1);
			
			//another variant to change letters without usage clause 'replace'
			
			
			//show the new words inner html code
			document.getElementById('newWords').innerHTML=(fw+' '+sw);
			
		}
		else if(gap<1) 
		{
			alert('You have written less than two words!');	
		}
		else 
		{
			alert('You have written more than two words!');
		}	
}

