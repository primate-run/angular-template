import is from "@rcompat/is";
export default function coerceInt(x) {
    if (is.numeric(x))
        return Number(x);
    return x;
}
//# sourceMappingURL=int.js.map