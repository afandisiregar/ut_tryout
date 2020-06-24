function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}


function clickbutton() {
    var input = document.getElementById('inputangka').value;
    var fromNumber = parseInt(input);
    countDown(fromNumber);   
}