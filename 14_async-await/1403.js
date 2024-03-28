//## - 1403 - write a program to create simple multiplication using async-await
async function mul(a, b){
    return a * b
}

async function result(){
    const res = await mul(2, 4)
    return res
}

result().then(function res(result){
    console.log(result)
})