import PrimitiveType from "#PrimitiveType";
export default class SymbolType extends PrimitiveType<symbol, "SymbolType"> {
    get name(): "symbol";
    toJSON(): {
        type: "symbol";
    };
}
//# sourceMappingURL=SymbolType.d.ts.map