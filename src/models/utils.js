export const getData = async (url) => {
    const host = window.location.origin;
    const response = await fetch(`${host}/${url}`);
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
    return await response.json();
}

export const sendData = async (url, data) => {
    const host = window.location.origin;
    const response = await fetch(
        `${host}/${url}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
    );
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
    return await response.json();
}