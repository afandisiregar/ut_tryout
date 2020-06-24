function palindrome(str) {
    var re = /[\W_]/g;    
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    document.write(str + "=");
    document.write(reverseStr === lowRegStr);
  }

   var str = prompt("masukkan kata")
  palindrome(str);