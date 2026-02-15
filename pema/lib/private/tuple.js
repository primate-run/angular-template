import TupleType from "#TupleType";
import normalize from "#normalize";
export default function tuple(...items) {
    // normalize each item so the class only sees Parsed
    const parsed = items.map(normalize);
    return new TupleType(parsed);
}
//# sourceMappingURL=tuple.js.map