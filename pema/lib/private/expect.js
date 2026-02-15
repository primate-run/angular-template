const types = {
    a: "array",
    b: "boolean",
    bb: "blob",
    bi: "bigint",
    co: "constructor",
    d: "date",
    f: "file",
    i: "int",
    n: "number",
    nl: "null",
    o: "object",
    s: "string",
    sy: "symbol",
    u: "undefined",
    ui: "uint",
    ur: "url",
};
const prefix = (at) => at ? `.${at}: ` : "";
function print_got(got) {
    if (got === undefined) {
        return "undefined";
    }
    if (got === null) {
        return "null";
    }
    return `\`${got}\` (${typeof got})`;
}
export default function expect(type, got, at = "") {
    return `${prefix(`${at}`)}expected ${types[type]}, got ${print_got(got)}`;
}
//# sourceMappingURL=expect.js.map