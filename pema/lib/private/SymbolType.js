import PrimitiveType from "#PrimitiveType";
export default class SymbolType extends PrimitiveType {
    get name() {
        return "symbol";
    }
    toJSON() {
        return { type: this.name };
    }
}
//# sourceMappingURL=SymbolType.js.map