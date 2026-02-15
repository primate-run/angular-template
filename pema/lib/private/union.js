import UnionType from "#UnionType";
import normalize from "#normalize";
export default function union(...types) {
    return new UnionType(types.map(normalize));
}
//# sourceMappingURL=union.js.map