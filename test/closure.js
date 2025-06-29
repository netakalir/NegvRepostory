//1
function createCounter() {
    let counter = 0;
    return (() => {
        counter += 1
        return counter
    })

}

// const counter = createCounter()
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//2
function secretHolder(yourSecret) {
    let secret = yourSecret;
    const obj = {
        get: function getSecret() {
            return secret
        },
        set: function setSecret(newSecret) {
            secret = newSecret
        }
    }
    return obj
}
// const mySecret = secretHolder("abc");
// console.log(mySecret.get())
// mySecret.set("123");
// console.log(mySecret.get());

//3
function buildFunctions() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

const funcs = buildFunctions();
funcs[0](); // should print 0
funcs[1](); // should print 1
funcs[2](); // should print 2