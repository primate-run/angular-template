import GenericType from "#GenericType";
export default abstract class VirtualType<Type, Inferred, Name extends string> extends GenericType<Type, Inferred, Name> {
    abstract get schema(): Type;
    get datatype(): keyof import("./DataType.js").default;
}
//# sourceMappingURL=VirtualType.d.ts.map