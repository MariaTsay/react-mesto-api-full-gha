export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
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
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        }
      })
      return this._handleResponse(res);
    }

    async setUserInfo(data) {
      const res = await fetch(`${this._baseUrl}/users/me`, { 
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      return this._handleResponse(res);
    }

    async getInitialCards() {
        const res = await fetch(`${this._baseUrl}/cards`, {  
          method: 'GET',       
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        }})
        return this._handleResponse(res);
    }

    async createCard(data) {
      const res = await fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return this._handleResponse(res);
    }

    async deleteCard(id) {
      const res = await fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        }
      })
      return this._handleResponse(res);
    }

    async likeCard(id) {
      const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        }
      })
      return this._handleResponse(res);
    }

    async dislikeCard(id) {
      const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        }
      })
      return this._handleResponse(res);
    }

    async editAvatar(data) {
      const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return this._handleResponse(res);
    }

}

//создание экземпляра класса Api
export const api = new Api({
  baseUrl: 'https://api.mymestogram.nomoredomains.work'
});