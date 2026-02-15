import ParsedKey from "#ParsedKey";
import join from "#path/join";
export default function next(s, options) {
    const base = options?.[ParsedKey] ?? "";
    return options === undefined
        ? { [ParsedKey]: join("", String(s)) }
        : { ...options, [ParsedKey]: join(base, String(s)) };
}
//# sourceMappingURL=next.js.map