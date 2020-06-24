var arr = []
while(arr.length < 8){
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

var total = 0;

for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
}

var max = Math.max.apply(null,arr);
var min = Math.min.apply(null,arr);
document.write("Nilai acak : "+arr);
document.write("<br>");
document.write("Nilai maximal : "+max);
document.write("<br>");
document.write("Nilai minim : "+min);
document.write("<br>");
document.write("Nilai rata-rata : "+total/arr.length);