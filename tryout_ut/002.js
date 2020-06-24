function inputevent(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
            return false; 
        return true;
}

function clickangka() {
    var inputangka = document.getElementById('inputangka').value;

    if (inputangka % 2 == 0) {
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>Angka " +inputangka+ " merupakan bilangan genap</p>";
    }else if (inputangka % 2 == 1) {
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>Angka " +inputangka+ " merupakan bilangan ganjil</p>";
    }
}