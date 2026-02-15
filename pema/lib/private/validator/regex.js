import ParseError from "#ParseError";
export default function validateRegex(regex, error) {
    return (x) => {
        if (!regex.test(x)) {
            const message = (error ?? ((y) => `"${y}" is not a valid ${String(regex)}`))(x);
            throw new ParseError([{
                    input: x,
                    message,
                    path: "", // root; the calling type should rebase if needed
                }]);
        }
    };
}
;
//# sourceMappingURL=regex.js.map