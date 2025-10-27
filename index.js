const animateElements = document.querySelectorAll('.animate-on-scroll');
const eduBtn = document.querySelector('#educationBtn');
const professionalBtn = document.querySelector('#professionalBtn')
//querySelectorAll for selecting all elements with a same class

const education = document.querySelector('.education');
const professional = document.querySelector('.professional')



function handleAnimating(){
    const triggerZone = window.innerHeight * 0.85;
    //this is 850 px since 1000 innerheight time 0.85
    
    for(let elementsAnimated of animateElements){
        const reactWindow = elementsAnimated.getBoundingClientRect().top;

        //if reactWindow is greater pixels than the riggerzone it will not animate 
        if (reactWindow < triggerZone){
            elementsAnimated.classList.add('show')
        }else{
            elementsAnimated.classList.remove('show')
        }
    }
}
 window.addEventListener('scroll', handleAnimating);
  handleAnimating();

  eduBtn.addEventListener('click', ()=>{
    //getComputedStyle method use to read the css file
    const currentStyle = getComputedStyle(education).display;
    const currentStyle = getComputedStyle(profe).display;

        if(currentStyle=== 'none'){
            education.style.display = 'flex'
            professional.style.display = 'none'
        } else{
            education.style.display = 'none'
        }
  })
    professionalBtn.addEventListener('click', ()=>{
    //getComputedStyle method use to read the css file
    const current = getComputedStyle(professional).display;

        if(current === 'none'){
            professional.style.display = 'flex'
            education.style.display = 'none'
        } else{
            professional.style.display = 'none'
        }


  })
