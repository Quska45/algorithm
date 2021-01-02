/* 
버블 정렬

 1. 메인 아이디어
  - 옆에 있는 값과 비교해서 더 작은 값을 앞으로 보내자

 2. 가장 효율이 떨어지는 알고리즘이다. 

 3. 구현자체는 더 쉬운 편이다.

 4. 반복을 할 떄마다 위치를 바꿔주는 방식이다.

 5. 선택정렬과 같은 시간 복잡도 이지만 실제 동작은 훨씬 느리다.
    이유는 자리를 계속 바꾸기 때문에 연산이 더 많아지기 때문이다.
*/

var index;
var temp;
var arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9, 56,34,75,45,36];

for(var i=0; i<arr.length; i++){
    console.log(1)
    for(var j=arr.length; j>=0; j--){
        if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr)
