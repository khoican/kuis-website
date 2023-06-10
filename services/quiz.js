const url = './../data.json'

window.addEventListener('DOMContentLoaded', () => {
    
    const image = document.querySelector('#image');
    const question = document.querySelector('#question')
    const getOption = document.querySelector('#option')
    function quiz() {



    }
    quiz()

    const option = document.querySelectorAll('.option')
    const modalBenar = document.querySelector('#modal-benar')
    const modalSalah = document.querySelector('#modal-salah')
    function answer() {
        let answer = "Aceh"
        
        for(let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                
                if(option[i].value == answer) {
                    modalBenar.classList.remove('hidden')
                    modalBenar.classList.add('flex')
                } else {
                    modalSalah.classList.remove('hidden')
                    modalSalah.classList.add('flex')
                }
    
            })
    
        }
    
    }
    answer()

})