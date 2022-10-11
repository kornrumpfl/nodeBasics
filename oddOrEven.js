const arr = process.argv

if(+process.argv[2]%2===0){
    console.log("The number " + process.argv[2] + " is even")
}else{
    console.log("The number " + process.argv[2] + " is odd")
}