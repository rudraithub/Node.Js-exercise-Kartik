//## - 1402 - write a program to create simple subtraction using async-await

async function sub(a, b){
    return a - b
}

async function result(){
    const res = await sub(2, 4)
    return res
}

result().then(function res(result){
    console.log(result)
})