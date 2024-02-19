document.getElementById('scrollButton').addEventListener('click',function(){
    let nextSection = document.getElementById('section2');
    nextSection.scrollIntoView({behavior: 'smooth'});
})
// add btn function 
const allBtn = document.getElementsByClassName('add-btn');
console.log(allBtn)
let count = 8;
for(const btn of allBtn){
    btn.addEventListener('click', function(){
       
        
            count = count - 1;
        document.getElementById('t-count').innerText = count ;

    })
}