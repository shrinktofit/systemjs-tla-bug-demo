
console.log(`Execute ${import.meta.url}`);

console.log(`Blocking ${import.meta.url}...`);

await new Promise((resolve) => {
    setTimeout(resolve, 3000);
});

console.log(`Unblock ${import.meta.url}`);

export default class A {
    sayHello() {
        console.log(`Hello`);
    }
}
