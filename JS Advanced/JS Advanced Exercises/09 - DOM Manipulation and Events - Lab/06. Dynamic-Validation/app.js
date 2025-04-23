function validate() {
    const pattern = /^[a-z]+@[a-z]+.[a-z]+$/

    let input = document.getElementById('email')


    input.addEventListener('change', checkEmail)
    
    function checkEmail(ev) {

        if (pattern.test(ev.target.value)) {
            ev.target.removeAttribute('class')
            return
        }
        ev.target.className = 'error'
    }


}

// -------------------------------------------------------------


// function validate() {
//     let reg = /^[a-z]+@[a-z]+.[a-z]+$/;
//     let inputElement = document.getElementById('email');
//     let value = inputElement.value;

//     inputElement.addEventListener('change',checkEmail);

//     function checkEmail(event) {
//         if(reg.test(event.target.value)){
//             event.target.removeAttribute('class');
//             return;
//         }

//         event.target.className = 'error';
//     }
//  }
