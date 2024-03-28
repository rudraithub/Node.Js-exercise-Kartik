//## - 1401 - write a program to create simple addition using async-await

async function add(a, b){
    return a + b
}

async function result(){
    const res = await add(2, 4)
    return res
}

result().then(function res(result){
    console.log(result)
})