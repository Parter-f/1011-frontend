

function fvNeve(param1 , param2){

}
let masikFv = function(param1 , param2){
console.log(param1);
}

/*
let init = 
document.addEventListener('DOMContentLoaded' , function(){

    console.log('Page loaded');

    document.getElementById('szinezes').addEventListener('click' , function(){
        document.body.style.backgroundColor = 'lightblue';
    })
 });
*/
function osszehasonlit(a , b){
    if(a < b){
        return -1;
    }
    else if(a > b){
        return 1;
    }
    else{
        return 0;
    }
}

let t = [4 , 78 , 715 , -99];
/*
t.sort((a , b) => {
    if(a < b){
        return -1;
    }
    else if(a > b){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(t);
*/
t.sort((a,b) => {return a-b});
t = t.filter((e) => Math.abs(e) > 50)
t = t.map(e => e.toFixed(2));
t.forEach((e , index) => {
    console.log(index , e);
})
console.log(t);


 document.addEventListener('DOMContentLoaded' , () => {
    console.log('Negrid');
    let idozito; 

    document.getElementById('szinezes').addEventListener('click' , ()=> {
        document.body.style.backgroundColor = 'lightblue';
        setTimeout(()=>{
                document.body.style.backgroundColor = 'white';
        },2000);

        if(idozito !== undefined){
            console.log('Clearing timer' , idozito);
            clearInterval(idozito);
        }
        
        idozito = setInterval(()=>{
            console.log(document.body.style.backgroundColor);
        },1000);
    });
 });