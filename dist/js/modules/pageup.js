function pageup() {

    window.addEventListener('scroll', () => {
        if(window.pageYOffset  > 1600) {
             document.querySelector('.pageup').style.display='block';   
        } else {
            document.querySelector('.pageup').style.display='none'; 
        }

    });

document.querySelector('.pageup').addEventListener('click', () => {
    document.querySelector('#up').scrollIntoView({block: "center", behavior: "smooth"});
});



} 




export default pageup;