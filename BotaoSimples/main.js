const peq = document.querySelector(".pequeno");

peq.onclick = function () {
    if (peq.style.marginLeft == "0%") {
        peq.style.marginLeft = "50%";
        peq.style.backgroundColor = "green";
        return;
    } else {
        peq.style.marginLeft = "0%";
        peq.style.backgroundColor = "red";
    }
}