
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
    
    if(document.getElementById('option1').checked==true){
    var c= Math.sqrt((a*a)+(b*b));
    
    text=c;
    rez.innerHTML='Знайдена сторона: '+text;
    }else
    
    if(document.getElementById('option2').checked==true){
        if(a>b){
    var c= Math.sqrt((a*a)-(b*b));
    text=c;
        }else{           
    var c= Math.sqrt((b*b)-(a*a));
    text=c; 
        }
    rez.innerHTML='Знайдена сторона: '+text;
    }
    
}


button_calc1.addEventListener('click', function(){
    var a =document.querySelector('#stor_a');
    var b =document.querySelector('#stor_b');
    var c =document.querySelector('#stor_c');
    
    a=parseFloat(a.value);
    b=parseFloat(b.value);
    c=parseFloat(c.value);
    
    var d=Math.sqrt((b*b)-4*(a*c));
    
    
    
    if(d>0){
    
    
    var x1=(-b-Math.sqrt((b*b)-4*(a*c)))/(2*a);
    var x2=(-b+Math.sqrt((b*b)-4*(a*c)))/(2*a);
    
    
    
    
    
    text1='X1 = '+x1+ ' X2 = '+x2;
    rez1.innerHTML=text1;
    }else
        text1='Дискримінант менше нуля, тому рівняння не має дійсних коренів.';
    rez1.innerHTML=text1;
}
)

button_calc2.addEventListener('click', function(){
    var a =document.querySelector('#start');
    var b =document.querySelector('#finish');
    var c =document.querySelector('#step');
    
    a=parseFloat(a.value);
    b=parseFloat(b.value);
    c=parseFloat(c.value);
    
    var c1=a;
    
    var result;
    
    var i=0;
    for(a;c1<b;c1+=c){
        result=Math.cos(c1)+(5*5);
    text2='Значення x: '+c1.toFixed(2)+' Результат: '+result.toFixed(4)+' ';        
    rez2.innerHTML+=text2+"<br>";
    }
}
)