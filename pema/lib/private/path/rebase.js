// Rebase a relative pointer under a base (rel must be "" or start with "/")
export default function rebase(base, rel) {
    if (base === "")
        return rel;
    if (rel === "")
        return base;
    return (base + rel);
}
//# sourceMappingURL=rebase.js.map