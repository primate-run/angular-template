import BigUintType from "#BigUintType";
import range from "#validator/range";
const from = 0n;
const to = 2n ** 128n - 1n;
export default new BigUintType("u128", [range(from, to)]);
//# sourceMappingURL=u128.js.map