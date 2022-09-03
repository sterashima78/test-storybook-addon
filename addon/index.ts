export const managerEntries = (entry = []) => {
    return [...entry, require.resolve("./addon.js")];
}