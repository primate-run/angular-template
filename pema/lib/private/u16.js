import UintType from "#UintType";
import range from "#validator/range";
const from = 0;
const to = 2 ** 16 - 1;
export default new UintType("u16", [range(from, to)]);
//# sourceMappingURL=u16.js.map