import BuiltinType from "#BuiltinType";
import Storable from "#Storable";
export default class URLType extends BuiltinType {
    get Type() {
        return URL;
    }
    get name() {
        return "url";
    }
    get datatype() {
        return "url";
    }
    toJSON() {
        return Storable.serialize(this);
    }
}
//# sourceMappingURL=URLType.js.map