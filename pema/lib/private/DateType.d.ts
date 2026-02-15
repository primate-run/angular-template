import BuiltinType from "#BuiltinType";
import coerce from "#coerce/date";
import CoerceKey from "#CoerceKey";
import Storable from "#Storable";
export default class DateType extends BuiltinType<Date, "DateType"> implements Storable<"datetime"> {
    [CoerceKey]: typeof coerce;
    get Type(): DateConstructor;
    get name(): "date";
    get datatype(): "datetime";
    toJSON(): {
        type: "date";
        datatype: "datetime";
    };
}
//# sourceMappingURL=DateType.d.ts.map