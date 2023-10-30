var cel=document.getElementById('cel');
var fah=document.getElementById("fah");
let result;

cel.addEventListener('input',function(){
    console.log("cel changed")
    let c=this.value;
    let f=(c * 9/5)+32;
    console.log(f)
    result=f;
    
    if(!Number.isInteger(f)){
        f.toFixed(4);
    }
   // console.log(f)
    fah.value=f;


})

fah.addEventListener('input',function(){
    console.log("fah changed")
    let f=this.value;
    let c=(f-32) * 5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    //console.log(c)
    cel.value=c;


})


