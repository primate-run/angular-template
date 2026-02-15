import UintType from "#UintType";
import range from "#validator/range";
const from = 0;
const to = 2 ** 32 - 1;
/**
* Value is an unsigned integer.
*/
export default new UintType("u32", [range(from, to)]);
//# sourceMappingURL=u32.js.map