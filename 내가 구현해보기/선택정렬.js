var arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
var temp;
for(var i=0; i<arr.length; i++){
    for(var j=i; j<arr.length; j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr);