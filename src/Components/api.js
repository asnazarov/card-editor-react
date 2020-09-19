const serverUrl = 'https://nomoreparties.co/cohort11';

class Api {
  constructor(options) {
    this.options = options;
  }
  getUserInfo() { // 1-е задание
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка: ${res.status}`)
        }
      })
  }

  getInitialCards() { //2е задание
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка: ${res.status}`)
        }
      })
  }
}

const api = new Api({
  baseUrl: serverUrl,
  headers: {
    authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
    'Content-Type': 'application/json'
  },
});

export default api
