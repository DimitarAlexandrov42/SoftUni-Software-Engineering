
    function lockedProfile() {
        Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle))

        function toggle(e) {
            console.log(e);
            const profile = e.target.parentElement
            const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked

            if (isActive) {
                let div = profile.querySelector('div')

                if (e.target.textContent == 'Show more') {
                    div.style.display = 'block'
                    e.target.textContent = 'Hide it'
                } else {
                    div.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
            }
        }
    }


    
    // function lockedProfile() {
//     let lockedStatus = document.querySelectorAll('[value="lock"]')
//     let unlockStatus = document.querySelectorAll('[value="unlock"]')


//     let moreInfoButtons = Array.from(document.querySelectorAll('button'))

//     let profile1MoreInf = document.getElementById('user1HiddenFields')
//     let profile2MoreInf = document.getElementById('user2HiddenFields')
//     let profile3MoreInf = document.getElementById('user3HiddenFields')

//     moreInfoButtons[0].addEventListener('click', showMore)
//     moreInfoButtons[1].addEventListener('click', showMore)
//     moreInfoButtons[2].addEventListener('click', showMore)




//     for (let i = 0; i < lockedStatus.length; i++) {

//         lockedStatus[i].addEventListener('click', locked)
//         unlockStatus[i].addEventListener('click', unlocked)
//     }





//     function locked(ev) {

//         console.log(ev.cuexplicitOriginalTarget.value);

//     }
//     function unlocked(ev) {

//         console.log(ev.explicitOriginalTarget.value);

//     }

//     function showMore(ev) {
//         ev.currentTarget.parentElement.children[9].style.display = 'block'

//     }
// }


// ------------------------------------------------------------------------------------



