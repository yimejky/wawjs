// contains (strings or arrays)
var nContains = ~str1.indexOf(str2);                  
var bContains = !!~str1.indexOf(str2);              
var bDoesNotContain = !~str1.indexOf(str2); 

// string (array) starts with       
var bStartsWith = !str1.indexOf(str2);              

//used instead of new Date().valueOf() or new Date.getTime()
//shortest, 
//comparable speed to others in  MSIE 9, 
//quite surprisingly slow in CHROME ? http://jsperf.com/various-strange-syntaxes/
// also quite slow in FF
+new Date;

//truncate,Math.floor for positive, Math.ceil for negative,  be carefull works only on 32bits, 
~~floatNumber;

//attributes normalization (usually), used instead of o = o || {}; or o = o ? o : {}; 
//very fast for both empty 0 and already assigned o, http://jsperf.com/various-strange-syntaxes/
//and short as well
o || (o = {});

//isNaN
//extremly faster than isNaN on FF, Chrome
any !== any //isNaN, avoiding often falsy assertion that "any" is number

// immutable sort
[].concat[arr].sort()

// immutable reverse
[].concat[arr].reverse()