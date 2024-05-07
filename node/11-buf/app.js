const buf = Buffer.from('hi');

console.log(buf);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.length);
console.log(buf.toString());

// create

const buf2 = Buffer.alloc(3);
const buf3 = Buffer.allocUnsafe(3); //
buf2[0] = 104;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());
