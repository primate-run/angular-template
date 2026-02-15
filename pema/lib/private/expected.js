function print_got(x) {
    if (x === undefined) {
        return "undefined";
    }
    if (x === null) {
        return "null";
    }
    return `\`${x?.toString() ?? x}\` (${(typeof x)})`;
}
export default (type, x) => `expected ${type}, got ${print_got(x)}`;
//# sourceMappingURL=expected.js.map