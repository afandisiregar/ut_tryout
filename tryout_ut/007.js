function reversetext(str){
    var reversestr = str.split('').reverse().join('');
    
    var showtext = document.getElementById('showtext');
    showtext.innerHTML = '<p>'+reversestr+'</p>';
}

function clickbutton() {
    var inputtext = document.getElementById('inputtext').value;

    reversetext(inputtext);
}