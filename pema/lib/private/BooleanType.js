import CoerceKey from "#CoerceKey";
import PrimitiveType from "#PrimitiveType";
import Storable from "#Storable";
import is from "@rcompat/is";
export default class BooleanType extends PrimitiveType {
    get name() {
        return "boolean";
    }
    get datatype() {
        return "boolean";
    }
    [CoerceKey](x) {
        return is.boolish(x) ? x === "true" : x;
    }
    toJSON() {
        return Storable.serialize(this);
    }
}
//# sourceMappingURL=BooleanType.js.map