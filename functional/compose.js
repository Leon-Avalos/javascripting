

function h(x){
    return x + 1
}

function g(x){
    return x * x
}

function composed(x){
    return x.toString()
}

const y = composed(g(h(3)))

console.log(y)