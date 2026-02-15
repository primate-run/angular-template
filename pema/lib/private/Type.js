import DefaultType from "#DefaultType";
import OptionalType from "#OptionalType";
import Parsed from "#Parsed";
export default class Type extends Parsed {
    optional() {
        return new OptionalType(this);
    }
    default(value) {
        return new DefaultType(this, value);
    }
    get Name() {
        return undefined;
    }
}
//# sourceMappingURL=Type.js.map