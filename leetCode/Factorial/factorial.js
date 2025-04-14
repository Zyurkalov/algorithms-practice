const factorial = () => {
    const memo = {}

    return function getFactorial(f) {
        if(f<=1) return 1
        if(memo.f) return memo.f 
    
        memo.f = f * getFactorial(f-1)
        return memo.f
    }
};

console.log(factorial()(5)) //120 