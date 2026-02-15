import BuiltinType from "#BuiltinType";
import Storable from "#Storable";
export default class BlobType extends BuiltinType {
    get Type() {
        return Blob;
    }
    get name() {
        return "blob";
    }
    get datatype() {
        return "blob";
    }
    toJSON() {
        return Storable.serialize(this);
    }
}
//# sourceMappingURL=BlobType.js.map