class CustomError extends Error{
    constructor(args){
        super(args);
        this.message = "Custom Error";
    }
    throwGenericError(){
        throw new Error("Generic Error");
    }
    throwCustomError(){
        throw new CustomError().message;
    }
}
const myError = new CustomError();

console.log("Force generic error");
try{
    console.log("Generic error try block");
    myError.throwGenericError();
} catch{
    console.log("Generic error catch block");
    console.log(myError.throwGenericError());
} finally{
    console.log("Generic answer finally block");
}

console.log("Force custom error");
try{
    console.log("Custom error try block");
    myError.throwGenericError();
} catch{
    console.log("Custom error catch block");
    console.log(myError.throwCustomError());
} finally{
    console.log("Custom answer finally block");
}