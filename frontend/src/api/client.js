const API_URL = import.meta.env.VITE_API_URL;

export async function submitContact(payload) {
    return fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
}

export async function getCounter() {
    return fetch(`${API_URL}/api/counter`);
}

export async function incrementCounter() {
    return fetch(`${API_URL}/api/counter/increment`, { method: 'POST' });
}