const peq = document.querySelector(".pequeno");
const gran = document.querySelector(".grande");
peq.onclick = function () {
    if  (peq.style.marginLeft == "0%") {
        peq.style.backgroundColor = "green";
        peq.style.marginLeft = "100%";
        peq.style.transform = "translateX(-100%)";
        return;
    } else{
        peq.style.marginLeft = "0%";
    }

    peq.style.marginLeft = "0%";
         peq.style.backgroundColor = "red";
        peq.style.transform = "translateX(0%)";
}