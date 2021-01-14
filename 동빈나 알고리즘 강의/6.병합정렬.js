/*
병합정렬
    - 편향된 분할에 대한 가능성이 없다.
    - 무조건 절반 씩으로 나누기 때문
    - 하나씩 부터 시작해서 묶어나가 면서 한다.
    - 정렬 된 상태 인 것들을 합쳐서 다시 정렬 시켜나가면서 최종 정렬을 만든다.
    - 엔로그엔을 보장한다는 점에서 좋은 알고리즘이다.
    - 반복적으로 쪼개고 그 다음에 합친다.
*/
var mergeSort = function( array ){
    if( array.length < 2 ) return array; //원소가 하나일 떄는 그대로 내보냅니다.
    var pivot = Math.floor( array.length / 2 ); //대략 반으로 쪼개는 코드
    var left = array.slice( 0, pivot ); 
    var right = array.slice( pivot, array.length );
    return merge( mergeSort(left), mergeSort(right) ); //재귀적으로 쪼개고 합칩니다.
}

function merge( left, right ){
    var result = [];
    while( left.length && right.length ){
        if( left[0] <= right[0] ){ //두 배열의 첫 원소를 비교
            result.push( left.shift() ) //더 작은 수를 결과에 넣어줍니다.
        } else {
            result.push( right.shift() ) //오른쪽도 마찬가지
        }
    }
    while( left.length ) result.push( left.push() ); //어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
    while( right.length ) result.push( right.push() )
    console.log(result);
    return result;
}


