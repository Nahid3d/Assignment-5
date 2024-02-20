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
         console.log(btn)

        if(countSet <4 ){
            countSet = countSet + 1;
            setInnerText('left-seat',countSet);
        }
       
        if( count > 0){
            count = count -1;
            setInnerText('t-count',count);

        }
      

         


        
         const price = e.target.parentNode.childNodes[1].innerText;
         const mainPrice =e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[4].parentNode.parentNode.childNodes[1].childNodes[5].childNodes[1].childNodes[9].childNodes[3].innerText;

         const name = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[4].parentNode.parentNode.childNodes[1].childNodes[5].childNodes[1].childNodes[9].childNodes[5].childNodes[1].innerText;

        

         const seceltCentainerMain = document.getElementById('select-seat')
         const li = document.createElement('li');
         const p1 = document.createElement('p');
         p1.innerText = name;
         const p2 = document.createElement('p');
         p2.innerText = mainPrice;

         li.appendChild(p1);
         li.appendChild(p2);
         seceltCentainerMain.appendChild(li);
         

         const selectedCont = document.getElementById('select-seat');
         const h3 = document.createElement('h3');
         const p =document.createElement('p');
         p.innerText = price;
         h3.appendChild(p);
         selectedCont.appendChild(h3);

  
         const totalAmount = document.getElementById('totalAmout').innerText;
        const pricesConvartade =parseInt(mainPrice);
        document.getElementById('select-seat').innerText
         console.log(typeof pricesConvartade)
         const convartadeAmount = parseInt(totalAmount);
         document.getElementById('totalAmout').innerText =
          convartadeAmount + parseInt(pricesConvartade);
        console.log(typeof parseInt(totalAmount))


        
        const grandTotal = document.getElementById('grandTotal').innerText;
        const grand =parseInt(mainPrice);
        document.getElementById('select-seat').innerText
         console.log(typeof pricesConvartade)
         const convartadeGrand = parseInt(grandTotal);
         document.getElementById('grandTotal').innerText =
          convartadeGrand + parseInt(grand);
        console.log(typeof parseInt(grandTotal))
    
         setInnerText(select-seat,count);


       


    })
}


