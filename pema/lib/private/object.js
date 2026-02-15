import normalize from "#normalize";
import ObjectType from "#ObjectType";
export default function object(peries) {
    const props = {};
    for (const [k, v] of Object.entries(peries)) {
        props[k] = normalize(v);
    }
    return new ObjectType(props);
}
//# sourceMappingURL=object.js.map