import ParseError from "#ParseError";
import join from "#path/join";
function message(k, i, first) {
    return `duplicate key "${String(k)}" at index ${i} (first ${first})`;
}
export default function uniqueBy(selector) {
    return (array) => {
        const seen = new Map();
        for (let i = 0; i < array.length; i++) {
            const k = selector(array[i]);
            if (seen.has(k)) {
                const first = seen.get(k);
                throw new ParseError([{
                        input: array,
                        message: message(k, i, first),
                        path: join("", i),
                    }]);
            }
            seen.set(k, i);
        }
    };
}
//# sourceMappingURL=unique-by.js.map