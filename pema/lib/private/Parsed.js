import CoerceKey from "#CoerceKey";
import ParsedKey from "#ParsedKey";
export default class Parsed {
    get [ParsedKey]() {
        return "ParsedKey";
    }
    get infer() {
        return undefined;
    }
    get nullable() {
        return false;
    }
    [CoerceKey](x) {
        return x;
    }
}
//# sourceMappingURL=Parsed.js.map