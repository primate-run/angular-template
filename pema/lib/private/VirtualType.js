import GenericType from "#GenericType";
const storable = (x) => !!x && typeof x === "object" && "datatype" in x;
export default class VirtualType extends GenericType {
    get datatype() {
        if (storable(this.schema))
            return this.schema.datatype;
        throw new Error("cannot be used in a store");
    }
}
//# sourceMappingURL=VirtualType.js.map