var i = 0;
function curto() {
    while (i <= 100) {
        if(i % 3 == 0 && i !=0 && i % 5 == 0 ){
            msg.innerHTML += ` <br> É TRI!É PENTA!`;
        }
        if (i % 3 == 0 && i !=0) {
             msg.innerHTML += ` <br> É TRI!`;
    } else if (i % 5 == 0 && i !=0) {
            msg.innerHTML += `<br>É PENTA!`;
        }
         else { 
            msg.innerHTML += `<br>${i}`;
        }
        i++
    }
}