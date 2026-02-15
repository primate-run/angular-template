import expected from "#expected";
import ParsedKey from "#ParsedKey";
export default function error(name, x, options) {
    return [{
            input: x,
            message: expected(name, x),
            path: options?.[ParsedKey] ?? "",
        }];
}
;
//# sourceMappingURL=error.js.map