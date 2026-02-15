import CoerceKey from "#CoerceKey";
import PrimitiveType from "#PrimitiveType";
import Storable from "#Storable";
export default class BooleanType extends PrimitiveType<boolean, "BooleanType"> implements Storable<"boolean"> {
    get name(): "boolean";
    get datatype(): "boolean";
    [CoerceKey](x: unknown): unknown;
    toJSON(): {
        type: "boolean";
        datatype: "boolean";
    };
}
//# sourceMappingURL=BooleanType.d.ts.map