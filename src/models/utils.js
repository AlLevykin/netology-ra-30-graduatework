export const getData = async (url) => {
    const host = window.location.origin;
    const response = await fetch(`${host}/${url}`);
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
    return await response.json();
}