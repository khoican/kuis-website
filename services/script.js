window.addEventListener('DOMContentLoaded', () => {
    let i = 0
    const typingText = document.querySelector("#typing-text");
    function typing() {
        let text = "Tahu Kah Kamu ?";
    
        if(i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 150)
        }
    }
    setTimeout(typing, 5000)

    const corouselItem = document.querySelectorAll('.corousel-item');
    function corousel() {

        setTimeout( () => {
            corouselItem[0].classList.add('top-[-350px]')
            corouselItem[1].classList.add('top-[-350px]')
        },2500)

        setTimeout( () => {
            corouselItem[1].classList.add('top-[-700px]')
            corouselItem[2].classList.add('top-[-700px]')
        },9000)

    }
    corousel()
    
})