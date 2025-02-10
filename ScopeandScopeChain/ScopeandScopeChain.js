//! if have anything in under the function it's call function scope
// ** if have outside the function it's call global scope

// !! if have under the {} it's call block scope



const globalVariable = "Hello, I'm global variable";

function globalFunction() {
    console.log(globalVariable);
}

globalFunction();



// block scope

{
    let blockVariable = "Hello, I'm block variable";

    const blockFunction = () => {
        console.log(blockVariable);
    }

    blockFunction();
}



// scope chain

const outerFunction = () => {
    const outerVariable = "Hello, I'm outer variable";

    const innerFunction = () => {
        console.log(outerVariable);
    }

    innerFunction();
}