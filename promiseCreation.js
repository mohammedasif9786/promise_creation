function promiseCreation(input){

    return new Promise((resolve,reject)=>{

        if(typeof(input) == "string"){

        setTimeout(()=>{
           resolve(input)
        },1000)
        }

        else{
            reject("oops! looks like you have entered non string valure")
        }
    })
}

promiseCreation("asif").then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})