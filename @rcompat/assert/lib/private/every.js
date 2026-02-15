import is from "#is";
const every = {};
for (const key of Object.keys(is)) {
    if (key === "instance")
        continue;
    every[key] = (xs) => {
        xs.forEach(x => is[key](x));
        return xs;
    };
}
every.instance = (xs, N, error) => {
    xs.forEach(x => is.instance(x, N, error));
    return xs;
};
export default every;
//# sourceMappingURL=every.js.map