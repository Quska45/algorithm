/* 
선택정렬(Selection sort)

 1. 핵심 아이디어
  - 가장 작은 것 부터 앞으로 오도록 해보자.

 2. temp를 이용해서 배열 내의 요소를 swap 해주면 된다.

 3. 선택 정렬은 등차 수열이 이용된다.
  - 10 + 9 + 8 + … + 1
  - 10 * (10 + 1)/2 = 55
  - N * (N + 1)/2
  - O(N * N) : 시간 복잡도 계산해서 더하기 빼기는 큰의미가 없는 것으로 본다.
  - O(N제곱)
  - 따라서 만개의 데이터는 1억번 실행 해야 정렬할 수 있어 비효율 적이다.

 4. 그래프로 그리면 제곱형은 곡선이 나오고 곡선은 값이 조금만 커져도 처리 횟수가 많아지고 좋은 알고리즘이 아니다.
*/

var arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
var temp;
var min;
var index;

for( var i=0; i<arr.length; i++ ){
    min = arr[i];
    index = i;
    for( var j=i; j<arr.length; j++ ){
        if( min > arr[j] ){
            min = arr[j];
            index = j;
        }
    }

    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
}

console.log(arr);