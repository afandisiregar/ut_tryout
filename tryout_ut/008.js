var count = 0;

var inputtext = prompt("masukkan kata");

while (inputtext) {
    var inputtext = prompt("masukkan kata");
    count++;

    if (inputtext === "=") {
        inputtext = false;
    }
}

document.write('inputan dilakukan sebanyak '+count+' kali');