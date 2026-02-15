import Parsed from "#Parsed";
export default class Storable extends Parsed {
    static serialize(s) {
        return { type: s.name, datatype: s.datatype };
    }
}
//# sourceMappingURL=Storable.js.map