import IntType from "#IntType";
import range from "#validator/range";
const from = -(2 ** 7);
const to = 2 ** 7 - 1;
export default new IntType("i8", [range(from, to)]);
//# sourceMappingURL=i8.js.map