import type Parsed from "#Parsed";
import RecordType from "#RecordType";
import type RecordTypeKey from "#RecordTypeKey";
/**
* Value is a record of the given key and value types.
*/
declare const _default: <const Key extends RecordTypeKey, const Value extends Parsed<unknown>>(k: Key, v: Value) => RecordType<Key, Value>;
export default _default;
//# sourceMappingURL=record.d.ts.map