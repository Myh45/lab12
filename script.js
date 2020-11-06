
var rez = document.querySelector('.rez');
var rez1 = document.querySelector('.rez1');
var rez2 = document.querySelector('.rez2');

var button_calc=document.querySelector('.calc');
var button_calc1=document.querySelector('.calc1');
var button_calc2=document.querySelector('.calc2');


var text='';
var text1='';
var text2='';

function calc_click(){
    var a =document.querySelector('#var_a');
    var b =document.querySelector('#var_b');
    
    a=parseFloat(a.value);
    b=parseFloat(b.value);    
    
    
    if(a>b){
        var c= Math.sqrt((a*a)-(b*b));
        text=c;
    }
    else{           
        var c= Math.sqrt((b*b)-(a*a));
        text=c; 
    }
    rez.innerHTML='Знайдена сторона: '+text;
    
    
}


