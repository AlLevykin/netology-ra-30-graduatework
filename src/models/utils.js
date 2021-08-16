export const getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
    return await response.json();
}