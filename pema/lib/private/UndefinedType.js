import PrimitiveType from "#PrimitiveType";
export default class UndefinedType extends PrimitiveType {
    get name() {
        return "undefined";
    }
    toJSON() {
        return {
            type: this.name,
        };
    }
}
//# sourceMappingURL=UndefinedType.js.map