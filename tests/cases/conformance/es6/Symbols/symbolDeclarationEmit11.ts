//@target: ES6
//@declaration: true
class C {
    static [Symbol.iterator] = 0;
    static [Symbol.toPrimitive]() { }
    static get [Symbol.toPrimitive]() { return ""; }
    static set [Symbol.toPrimitive](x) { }
}