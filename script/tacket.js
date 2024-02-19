document.getElementById('scrollButton').addEventListener('click',function(){
    let nextSection = document.getElementById('section2');
    nextSection.scrollIntoView({behavior: 'smooth'});
})
// add btn function 
const allBtn = document.getElementsByClassName('add-btn');

// button color fixt 
const buttons = document.querySelectorAll('.add-btn');
function changeColorToRed() {
  this.style.backgroundColor = '#1DD100';
  this.style.color = 'white'
}
buttons.forEach(button => {
  button.addEventListener('click', changeColorToRed);
});

// one click and no repeat  dicable
// document.addEventListener('click', function(){
//     document.getElementById("clickButton").disabled = true;
//     count -1;
//     document.getElementById("clickButton").disabled = true;
//     count -1;
    
// }) 


let count = 8;
let countSet= 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){  

        if(countSet <4 ){
            countSet = countSet + 1;
            setInnerText('left-seat',countSet);
        }
        if( count > 0){
            count = count -1;
            setInnerText('t-count',count);
        }

        
         const price = e.target.parentNode.childNodes[1].innerText;
         console.log(price)
         const selectedCont = document.getElementById('select-seat');
         const li = document.createElement('li');
         const p =document.createElement('p');
         p.innerText = price;
         li.appendChild(p);
         selectedCont.appendChild(li);
         setInnerText(count)

    })
}
function setInnerText (id , value){
    document.getElementById(id).innerText = value;
}

