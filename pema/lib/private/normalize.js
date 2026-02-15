import ArrayType from "#ArrayType";
import ConstructorType from "#ConstructorType";
import LiteralType from "#LiteralType";
import NullType from "#NullType";
import ObjectType from "#ObjectType";
import ParsedKey from "#ParsedKey";
import TupleType from "#TupleType";
import UndefinedType from "#UndefinedType";
import is from "@rcompat/is";
function isParsed(x) {
    return !!x && typeof x === "object" && ParsedKey in x;
}
function isPlain(x) {
    return !!x && typeof x === "object" &&
        Object.getPrototypeOf(x) === Object.prototype;
}
export default function normalize(x) {
    if (isParsed(x))
        return x;
    if (x === null)
        return new NullType();
    if (x === undefined)
        return new UndefinedType();
    if (typeof x === "string" || typeof x === "number" || typeof x === "boolean")
        return new LiteralType(x);
    if (is.newable(x))
        return new ConstructorType(x);
    if (Array.isArray(x)) {
        return x.length === 1
            ? new ArrayType(normalize(x[0]))
            : new TupleType(x.map(normalize));
    }
    if (isPlain(x)) {
        const props = {};
        for (const [k, v] of Object.entries(x))
            props[k] = normalize(v);
        return new ObjectType(props);
    }
    throw new TypeError("Unsupported type-like value passed to asType");
}
//# sourceMappingURL=normalize.js.map