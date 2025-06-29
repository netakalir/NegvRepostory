const users = [];
export function greetUser(name) {
    if (users.includes(name)) {
        console.log(`Welcome back ${name}!`);
    } else {
        users.push(name);
        console.log(`Welcome ${name}!`);
    }
    
}