import BuiltinType from "#BuiltinType";
import coerce from "#coerce/date";
import CoerceKey from "#CoerceKey";
import Storable from "#Storable";
export default class DateType extends BuiltinType {
    [CoerceKey] = coerce;
    get Type() {
        return Date;
    }
    get name() {
        return "date";
    }
    get datatype() {
        return "datetime";
    }
    toJSON() {
        return Storable.serialize(this);
    }
}
//# sourceMappingURL=DateType.js.map