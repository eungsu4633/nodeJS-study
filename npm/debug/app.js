let sayHello = () => {
    console.log('hello');
    console.log('eungsu');
};

let calculate = (x, y) => {
    console.log('calculating...');
    const resulet = x + y;
    console.log('resulet: ', resulet);
    sayHello();
    return resulet;
};

calculate(1, 2);

const stop = 4;
console.log('.....');

for (let i = 0; i < 10; i++) {
    console.log('count', i);
    if (i === stop) {
        break;
    }
}
