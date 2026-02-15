import BigUintType from "#BigUintType";
import range from "#validator/range";
const from = 0n;
const to = 2n ** 64n - 1n;
export default new BigUintType("u64", [range(from, to)]);
//# sourceMappingURL=u64.js.map