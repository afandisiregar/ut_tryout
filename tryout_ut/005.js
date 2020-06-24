function clickdate() {
    var inputdate1 = document.getElementById('inputdate1').value;

    var inputdate2 = document.getElementById('inputdate2').value;

    var arr = [];
    arr.push(inputdate1,inputdate2);
    for (let i = 0; i < arr.length; i++) {
        if ((0 == arr[i] % 4) && (0 != arr[i] % 100) || (0 == arr[i] % 400)) {
            console.log(arr[i]+" adalah tahun kabisat");
        }else{
            console.log(arr[i]+" adalah bukan tahun kabisat");           
        }
    }
    
}