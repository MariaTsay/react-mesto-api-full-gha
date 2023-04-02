const BASE_URL = 'https://api.mymestogram.nomoredomains.work';

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
      }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const signUp = async (data) => {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return handleResponse(res);
}

export const signIn = async (data) => {
    const res = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return handleResponse(res);
}

export const checkAuth = async (token) => {
    const res = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return handleResponse(res);
}