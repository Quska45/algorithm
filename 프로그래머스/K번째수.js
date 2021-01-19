function solution(array, commands){
    var answer = [];
    commands.forEach(function(command){
        var result = array.reduce(function(acc, cur, i){
            if(command[0]-1<=i && command[1]-1>=i){
                acc.push(cur);
            }
            return acc;
        }, []).sort();

        answer.push(result[command[2]-1]);
    })

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))