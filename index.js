const pLimit = require('p-limit');
 
const limit = pLimit(1);
 
const input = [
    limit(() => fetchSomething('foo')),
    limit(() => fetchSomething('bar')),
    limit(() => doSomething())
];
 
(async () => {
    // Only one promise is run at once
    const result = await Promise.all(input);
    console.log(result);
})();