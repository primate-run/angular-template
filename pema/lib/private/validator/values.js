import ParseError from "#ParseError";
export default function values(input) {
    const input_values = Object.values(input);
    const allowed = input_values.map(v => String(v)).join(", ");
    return (x) => {
        if (!input_values.includes(x)) {
            throw new ParseError([{
                    input: x,
                    message: `"${x}" not in given list of values (${allowed})`,
                    path: "",
                }]);
        }
    };
}
//# sourceMappingURL=values.js.map