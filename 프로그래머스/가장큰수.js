function solution(numbers){
    var answer = '';

    function mergeSort( numbers ){
        if( numbers.length < 2 ) return numbers;
        
        var pivot = Math.floor( numbers.length / 2 );
        var left = numbers.slice( 0, pivot );
        var right = numbers.slice( pivot, numbers.length );

        return merge( mergeSort( left ), mergeSort( right ) );
    }

    function merge( left, right ){
        var result = [];
        while( left.length && right.length ){
            if( left[0].toString()[0] < right[0].toString()[0] ){
                result.push(right.shift() );
            } else if( left[0].toString()[0] > right[0].toString()[0] ){
                result.push( left.shift() );
            } else {
                
            }
        }

        while( left.length ) result.push( left.shift() );
        while( right.length ) result.push( right.shift() );

        return result;
    }

    var result = mergeSort( numbers );
    //console.log(result);
    result.forEach(function( num ){
        answer += num.toString()
    });
    console.log(answer)
    return answer;
}

solution(	[6, 10, 2])
