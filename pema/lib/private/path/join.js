// RFC 6901 escaping
function escapeToken(token) {
    return token.replace(/~/g, "~0").replace(/\//g, "~1");
}
export default function join(base, ...tokens) {
    if (tokens.length === 0)
        return base;
    const tail = tokens.map(t => escapeToken(String(t))).join("/");
    if (base === "")
        return ("/" + tail);
    return (base + "/" + tail);
}
//# sourceMappingURL=join.js.map