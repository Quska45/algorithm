var arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
var temp;
for(var i=0; i<arr.length; i++){
    for(var j=arr.length; j>=0; j--){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
    }
}

console.log(arr);