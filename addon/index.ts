export const managerEntries = (entry = []) => {
    return [...entry, require.resolve("./addon.js")];
}

export function config(entry = []) {
    return [...entry, require.resolve('./preview.js')];
}