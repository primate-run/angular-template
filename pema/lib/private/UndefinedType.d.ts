import PrimitiveType from "#PrimitiveType";
type Name = "UndefinedType";
export default class UndefinedType extends PrimitiveType<undefined, Name> {
    get name(): "undefined";
    toJSON(): {
        type: "undefined";
    };
}
export {};
//# sourceMappingURL=UndefinedType.d.ts.map