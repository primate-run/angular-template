import is from "#is";
import std_is from "@rcompat/is";
const maybe = {};
for (const key of Object.keys(is)) {
    if (key === "instance")
        continue;
    maybe[key] = (x) => {
        if (std_is.nullish(x))
            return x;
        is[key](x);
        return x;
    };
}
maybe.instance = (x, N, error) => {
    if (std_is.nullish(x))
        return x;
    return is.instance(x, N, error);
};
export default maybe;
//# sourceMappingURL=maybe.js.map