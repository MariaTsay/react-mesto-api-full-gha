export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _handleResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    async getUserInfo() {
      const res = await fetch(`${this._baseUrl}/users/me`, { 
        method: 'GET',
        headers: this._headers
      })
      return this._handleResponse(res);
    }

    async setUserInfo(data) {
      const res = await fetch(`${this._baseUrl}/users/me`, { 
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      return this._handleResponse(res);
    }

    async getInitialCards() {
        const res = await fetch(`${this._baseUrl}/cards`, { headers: this._headers})
        return this._handleResponse(res);
    }

    async createCard(data) {
      const res = await fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      })
      return this._handleResponse(res);
    }

    async deleteCard(id) {
      const res = await fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      return this._handleResponse(res);
    }

    async likeCard(id) {
      const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
      return this._handleResponse(res);
    }

    async dislikeCard(id) {
      const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
      return this._handleResponse(res);
    }

    async editAvatar(data) {
      const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
      })
      return this._handleResponse(res);
    }

}

//создание экземпляра класса Api
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '14f36213-36c3-4f37-8ced-ce7418e7c375',
    'Content-Type': 'application/json'
  }
});