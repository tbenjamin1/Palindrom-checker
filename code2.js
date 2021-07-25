function palind() {
var string=document.getElementById("ben").value;

var regular = /[^A-Za-z0-9]/g;
    var lowerstring = string.toLowerCase().replace(regular, '');
    var reversestring = lowerstring.split('').reverse().join(''); 

if (( reversestring == lowerstring)&&(string!='')){
     document.getElementById('ben1').innerHTML='Yaay, You  got yourself a PALINDROME!';
     var m= document.getElementById('ben1');
     m.style.color="green"
    }
 else if( reversestring!=lowerstring&&string!=''){
 document.getElementById('ben1').innerHTML='Naay, that  ain’t no palindrome!';
 var m= document.getElementById('ben1');
 m.style.color="red"
   }
 else
  
 document.getElementById('ben1').innerHTML='not checker';
}