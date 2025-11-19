const BASE_URL = "http://localhost:5001/api";

export async function createSession(data) {
    const res = await fetch(`${BASE_URL}/sessions/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return await res.json();
}

export async function updateSettings(data) {
    const res = await fetch(`${BASE_URL}/settings/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return await res.json();
}