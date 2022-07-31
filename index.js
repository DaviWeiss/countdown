function countDown(){
    const finalDate = new Date("August 12, 2022 23:59:59").getTime();
    const time = setInterval(function() {
        const todayDate = new Date().getTime();
        const distance = finalDate - todayDate;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
        if (distance < 0) {
            clearInterval(time);
            document.getElementById("content-time").innerHTML = "TEMPO EXPIRADO";
        }
    }, 1000);
}

countDown()


function switchModal(){
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display;
    console.log(actualStyle)

    if(actualStyle == 'flex') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'flex'
    }
}

window.onclick = function(event) {
    const modal = document.querySelector('.modal')
    if (event.target == modal) {
        switchModal()
    }
}

