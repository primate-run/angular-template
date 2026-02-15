import BuiltinType from "#BuiltinType";
import Storable from "#Storable";
export default class FileType extends BuiltinType {
    get Type() {
        return File;
    }
    get name() {
        return "file";
    }
    get datatype() {
        return "blob";
    }
    toJSON() {
        return Storable.serialize(this);
    }
}
//# sourceMappingURL=FileType.js.map