import OptionalType from "#OptionalType";
import Parsed from "#Parsed";
export default class PureType extends Parsed {
    get name() {
        return "pure";
    }
    get Name() {
        return undefined;
    }
    optional() {
        return new OptionalType(this);
    }
    parse(x) {
        // no parsing of static types
        return x;
    }
    toJSON() {
        return { type: "pure" };
    }
}
//# sourceMappingURL=PureType.js.map