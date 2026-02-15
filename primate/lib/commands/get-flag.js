export default function get_flag(flags, option) {
    const flag = `--${option}=`;
    return flags.find(f => f.startsWith(flag))?.slice(flag.length);
}
//# sourceMappingURL=get-flag.js.map