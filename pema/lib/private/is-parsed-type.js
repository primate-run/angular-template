import ParsedKey from "#ParsedKey";
export default function isParsedType(x) {
    return !!x && typeof x === "object" && ParsedKey in x;
}
;
//# sourceMappingURL=is-parsed-type.js.map