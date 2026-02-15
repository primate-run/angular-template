import is from "@rcompat/is";
export default function coerceBigInt(x) {
    // normalize from string to number; other types unaffected
    const n = is.numeric(x) ? Number(x) : x;
    // normalize from number to bigint; other types unaffected
    if (is.int(n))
        return BigInt(n);
    // bigint or invalid
    return x;
}
//# sourceMappingURL=bigint.js.map