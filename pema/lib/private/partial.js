// partial.ts
import ObjectType from "#ObjectType";
import PartialType from "#PartialType";
export default function partial(input) {
    const dict = input instanceof ObjectType ? input.properties : input;
    return new PartialType(dict);
}
//# sourceMappingURL=partial.js.map