const animateElements = document.querySelectorAll('.animate-on-scroll');
const eduBtn = document.querySelector('#educationBtn');
const professionalBtn = document.querySelector('#professionalBtn')
const educationScroll = document.querySelectorAll('.animate_scroll')
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


  //default
  eduBtn.classList.add('show')

  
    eduBtn.addEventListener('click', () => {
    education.style.display = 'flex';
    professional.style.display = 'none';

    eduBtn.classList.add('show')
     professionalBtn.classList.remove('show')
    //method given by web
    //education.scrollIntoView({ behavior: 'smooth' });
    })


professionalBtn.addEventListener('click', () => {

    professionalBtn.classList.add('show')
    eduBtn.classList.remove('show')

    professional.style.display = 'grid';
    education.style.display = 'none';

    //method given by web
    //professional.scrollIntoView({ behavior: 'smooth' });
});  
