// Node.js Timer

//0201
const myfun1=(a,b)=>{
    console.log("hello!")
};
setTimeout(myfun1,4000);


//0202
const myfun2=(a,b)=>{
    console.log(a+b+11)
};
setTimeout(myfun2,4000,4,5);

const myfun3=(a,b)=>{
    console.log("hello!")
};
setTimeout(myfun3,4000);

//0203
const ID=setInterval(sum,2000,40,20,20);
function sum(a,b,c){
    console.log("after 2 sec sum:"+(a+b+c))
    clearInterval(ID);
}
try{
    const a=1;
    const b=2;
    const c=a+b;
    console.log(c)
}catch(err){
    console.log(err);
}

