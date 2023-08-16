// Global Scope

const globalVariable = "It is Global Scope!!! ";

function globalFunction() {
    console.log(globalVariable); // Accessible here
}

globalFunction();


// local scope

function localScopeExample() {
    const localVariable = "It is local Scope!!! ";
    console.log(localVariable); // Accessible here

    if (true) {
        const nestedVariable = "nested";
        console.log(nestedVariable); // Accessible here
    }
}

localScopeExample();