function inputevent(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
            return false; 
        return true;
}

function clickangka() {
    var inputangka = document.getElementById('inputangka').value;

    if (inputangka >= 90) {
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>A</p>";
    }else if(inputangka >=80 && inputangka <=89){
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>B</p>";
    }else if(inputangka >=70 && inputangka <=79){
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>C</p>";
    }else if(inputangka >=60 && inputangka <=69){
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>D</p>";
    }else if(inputangka <=59){
        var hasil = document.getElementById('hasil');
        hasil.innerHTML = "<p>E</p>";
    }
}