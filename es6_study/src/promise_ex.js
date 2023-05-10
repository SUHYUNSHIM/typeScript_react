// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         var num = Math.random();
//         if(num >= 0.8){
//             reject("생성된 숫자가 0.8이상인가 " +num);
//         }
//         resolve(num);
//     }, 2000);
// });

// p.then((result) => {
//     console.log("처리 결과: ", result);
// }).catch((error) => {
//     console.log("에러: ",error);
// });

// console.log('## promise 객체 생성!');



var p = new Promise((resolve, reject)=>{
    resolve("first");
});
p.then((msg) => {
    console.log(msg);   
    throw new Error("## 에러!") 
    return "second";
})
.then((msg)=> {
    console.log(msg);
    return "third"
})
.then((msg) => {
    console.log(msg);
})
.catch((error)=> {
    console.log("에러 발생 ==> "+error);
})