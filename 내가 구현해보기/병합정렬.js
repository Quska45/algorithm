function mergeSort( arr ){
    if( arr.length < 2 ) return arr;
    var pivot = Math.floor( arr.length/2 );
    var left = arr.slice( 0, pivot );
    var right = arr.slice( pivot, arr.length );
    return merge( mergeSort( left ), mergeSort( right ) );
}

function merge( left, right ){
    var result = [];
    while( left.length && right.length ){
        if( left[0] <= right[0] ){
            result.push( left.shift() );
        } else {
            result.push( right.shift() );
        }
    }

    while( left.length ){
        result.push( left.shift() );
    };
    while( right.length ){
        result.push( right.shift() );
    };
    console.log(result);
    return result;
}



console.log(mergeSort( [5,2,4,7,6,1,3,8] ));