let proto = {
    hello () {
        return `Hello, my name is ${ this.name}`;
    }
};

let greeter = (name) => Object.assign(Object.create(proto), {
    name,
    state: ["false", "true"]
});

let guy = greeter("guy");
let gal = greeter("gal");

guy.state[0] = "one";
let m = guy.state;
let n = gal.state;

console.log(m);
console.log(n);