import ArrayType from "#ArrayType";
import normalize from "#normalize";
/**
* Value is an array of the given type.
*/
export default function array(of) {
    return new ArrayType(normalize(of));
}
//# sourceMappingURL=array.js.map