const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
console.log("today is " + [day] + " " + [hour] + ":" + [minute]);


const number = (x) => {
    console.log(toString(x));
}
number("84");


const string = (number) => {
    console.log(Number(number));
}
string(48);


const type = (datatype) => {
    console.log(typeof datatype);
}
type(false);


const add = (x, y) => {
    console.log (x + y);
}
add(4,6);


const a = 6;
const b = 9;
const c = 12;

function twoTrue() {
    if (b>a && c>b) {
        console.log(a+b);
    }
}
twoTrue();

const oneTrue = (x,y) => {
    if (x>y || x==y) {
        console.log(x+y);
    }
}
oneTrue(3,1);

const noneTrue = (x,y) => {
    if (!x>y && !x==y) {
        console.log(x+y);
    }
}
noneTrue(1,3);