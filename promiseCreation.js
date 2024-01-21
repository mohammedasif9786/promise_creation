
function promiseCreation(input){

    return new Promise((resolve,reject)=>{

        if(typeof(input) == String){

        setTimeout(()=>{
           resolve(input)
        },1000)
        }

        else{
            reject("oops! looks like you have entered non string valure")
        }
    })
}

promiseCreation.them((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})
