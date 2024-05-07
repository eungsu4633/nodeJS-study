function hello() {
    console.log(this);
    console.log(this === global);
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFuntion() {
        console.log('-----class------');
        console.log(this);
        console.log(this === global);
    }
}

const result = new A(1);
result.memberFuntion();
