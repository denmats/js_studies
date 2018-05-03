function countMinMax()
{
	var a=+prompt('a:?','');
	var b=+prompt('b:?','');
	var c=+prompt('c:?','');

	(a>b&&a>c) ? alert('the maximum number is'+a):
	(b>a&&b>c) ? alert('the maximum number is'+b):
	alert('the maximum number is'+c);
  
	(a<b&&a<c) ? alert('the minimum number is'+a):
	(b<a&&b<c) ? alert('the minimum number is'+b):
	alert('the minimum number is'+c);
}