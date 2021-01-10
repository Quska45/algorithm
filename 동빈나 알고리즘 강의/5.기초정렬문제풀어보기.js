var arr = [1, 5, 2, 6, 3, 7, 4];
var coms = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    var answer = [];
    var com;
    var temp;
    var tempArr;

    for( var i=0; i<commands.length; i++ ){
        com = commands[i];
        tempArr = JSON.parse(JSON.stringify(array))
        for( var j=com[0]; j<com[1]; j++ ){
            var k = j;
            while( tempArr[k-1] > tempArr[k] ){
                temp = tempArr[k];
                tempArr[k] = tempArr[k-1];
                tempArr[k-1] = temp;
                k--;
            }
        }
        answer.push(tempArr[ com[0]+com[2]-2 ]);
    }
    return answer;
}

solution( arr, coms );