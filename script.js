const allHeading=document.querySelectorAll('.contentHeading');
const headingNavBar=document.querySelector('#headingNavBar');

allHeading.forEach(element => {
    var navDiv=document.createElement('a');
    // navDiv.addEventListener('click', ()=>{
    //     console.log(element.id)
    // });
    navDiv.setAttribute("href", '#'+element.id);
    navDiv.innerHTML=element.innerHTML;
    headingNavBar.appendChild(navDiv);
});