var array_data = [
    {"id":1, "name" : "Udin", "age" : 12},
    {"id":2, "name" : "Reane", "age" : 51},
    {"id":3, "name" : "Budi", "age" : 34},
    {"id":4, "name" : "Agus", "age" : 16},
    {"id":5, "name" : "Sari", "age" : 19},
    {"id":6, "name" : "Ririn", "age" : 20},
    {"id":7, "name" : "Dessy", "age" : 23}
];

function searchage(array_data) {
    array_data2 = [];
    array_data.forEach(data => {
        if (data.age <= 21) {
            array_data2.push(data);
        }
        
    });
}

searchage(array_data)

console.log(array_data2);
