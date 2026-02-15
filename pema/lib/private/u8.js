import UintType from "#UintType";
import range from "#validator/range";
const from = 0;
const to = 2 ** 8 - 1;
export default new UintType("u8", [range(from, to)]);
//# sourceMappingURL=u8.js.map