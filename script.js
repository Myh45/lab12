var rez = document.querySelector('.rez');
var button_calc=document.querySelector('.calc');

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


