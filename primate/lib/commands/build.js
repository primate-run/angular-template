import build from "@primate/core/build";
import get_flag from "./get-flag.js";
// build for production
export default function app(flags, mode = "production") {
    const build_flags = {
        mode: mode,
        target: get_flag(flags, "target"),
        dir: get_flag(flags, "dir"),
    };
    return build(build_flags);
}
;
//# sourceMappingURL=build.js.map