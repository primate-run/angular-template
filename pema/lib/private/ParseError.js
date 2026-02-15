function humanize(path) {
    return path === ""
        ? ""
        : path
            .slice(1)
            .split("/")
            .map(seg => seg.replace(/~1/g, "/").replace(/~0/g, "~"))
            .map(seg => `.${seg}`)
            .join("");
}
function stringify(issue) {
    // For root (scalar) errors, keep just the message;
    // otherwise prefix with humanized path
    return issue.path === ""
        ? issue.message
        : `${humanize(issue.path)}: ${issue.message}`;
}
export default class ParseError extends Error {
    #issues;
    constructor(issues) {
        super(stringify(issues[0]));
        this.name = "ParseError";
        this.#issues = issues;
    }
    get issues() {
        return this.#issues;
    }
    toJSON() {
        const issues = this.#issues ?? [];
        if (issues.length === 0) {
            return { message: "Parsing failed", messages: ["Parsing failed"] };
        }
        const is_form = issues.some(i => i.path !== "");
        if (!is_form) {
            const messages = issues.map(i => i.message);
            return { message: messages[0], messages };
        }
        const dict = {};
        for (const i of issues) {
            const key = i.path;
            if (!dict[key])
                dict[key] = { message: i.message, messages: [] };
            dict[key].messages.push(i.message);
            // Keep the first as the short message
            if (dict[key].messages.length === 1)
                dict[key].message = i.message;
        }
        return dict;
    }
}
//# sourceMappingURL=ParseError.js.map