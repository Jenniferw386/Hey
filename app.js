// template_6ndm3ab
//service_5qg5ngh
//4k8_T225bAJgNZ9FV

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}






function contact(event) {
    event.preventDefault();
    const sucesss = document.querySelector('.overlay--success')
    const loading = document.querySelector('.modal__overlay--loading')
    
    emailjs
   .sendForm(
        'service_5qg5ngh',
        'template_6ndm3ab',
       event.target,
       '4k8_T225bAJgNZ9FV'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        sucesss.classList +=  " modal__overlay--visible";
    }).catch(() => {
loading.classList.remove("modal__overlay--visible");
    alert(
        "This email service is temporarily unavailable, please contact me directly at Jenniferw386@gmail.com"
    );
   })
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
console.log('it worked')
}, 1000);
}



let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}