/* 
퀵정렬

 1. 분할정복을 사용한다. 배열의 원소를 나누어서 계산한다.

 2. 평균속도는 엔곱하기 엔로그가 나온다. 엔로그는 사실상 상수라고 할 수 있을 정도로 작다.

 3. 처음엔 어려울 수 있으나 알면 쉽다.

 4. 메인아이디어 - 특정한 값을 기준으로 큰 숫자와 작은 숫자로 나눈다.

 5. 기준이 되는 특정한 pivot 값을 사용한다.
    pivot 보다 작은 값의 인덱스가 큰 값의 인덱스보다 작아지는 경우(엇갈린 경우)가 중요하다.
    이런 경우에 배열이 분할 되는 것이다.

 6. 깔끔한 구현을 위해 재귀를 사용하는 경우가 많다.

 7. 퀵 정렬의 최악의 경우에는 엔제곱이다. 하지만 일반적으로 엔로그엔이다.

 8. 이미 정렬되어 있는 경우가 최악이 된다. 하나씩만 정렬이 일어나기 때문에 분할정복의 이점을 볼 수 없게 된다.

*/

var arr = [ 1, 10, 5, 8, 7, 6, 4, 3, 2, 9 ];
console.log(123);
function quickSort( data, start, end ) {
    if( start >= end ) { //원소가 1개인 경우
        return;
    }

    var key = start; //첫 번째 값
    var i = start + 1; //배열의 앞에서 부터 인덱스를 의미한다.
    var j = end; //배열의 뒤에서 부터 인덱스를 의미한다.
    var temp;

    while( i <= j ){ //엇갈릴 때까지 반복
        while( data[ i ] <= data[ key ] ){ //키 값보다 큰 값을 만날때
            i++;
        }
        while( data[j] >= data[key] && j > start ){ //키 값보다 작은 값을 만날때 까지
            j--;
        } 
        if(i > j){ //엇갈리는 경우
            temp = data[ j ];
            data[ j ] = data[ key ];
            data[ key ] = temp;
        } else {
            temp = data[ j ];
            data[ j ] = data[ i ];
            data[ i ] = temp;

        }

    }
    // 데이터가 엇갈려 빠져나온 경우 왼쪽 오른쪽은 다시 퀵정렬 수행
    quickSort( data, start, j-1 );
    quickSort( data, j+1, end );
}

quickSort(arr, 0, arr.length-1);
console.log(arr);