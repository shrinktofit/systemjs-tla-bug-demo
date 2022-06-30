let state = 0;
const expected = ['c', 'b', 'c', 'b', 'a', 'a', 'main', 'main'];
export let failed = false;
export function reporter(name: string) {
    console.log(name);
    if (expected[state++] !== name) {
        failed = true;
    }
}

reporter('c');

await new Promise(resolve => setTimeout(resolve, 10)).then(() => {
    reporter('c');
});