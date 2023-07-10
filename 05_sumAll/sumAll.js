const sumAll = function(num1, num2) {
    var total = 0
    if (num2 > num1){
        for (var i = num1; i<= num2; i++){
            total = total + i
        }
        console.log(total)
    }
    else{
        for (var i = num2; i <= num1; i++){
            total = total + i
        }
        console.log(total)
    
    }
    return total;
    };

// Do not edit below this line
module.exports = sumAll;
