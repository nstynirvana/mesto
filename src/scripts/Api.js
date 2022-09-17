class Api {
    constructor(setting) {
        this._url = setting.url;
        this._headers = setting.headers;
    }

    getAllCards() {
        return fetch(this._url + '/cards', {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            return res.json();
        });
    }


    getUserInfo() {
        return fetch(this._url + '/users/me', {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            return res.json();
        });
    }

    editUserInfo(info) {
        return fetch(this.url + '/users/me',{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(info)
        }).then((res) => {
            return res.json();
        });
    }
 }

 export default Api;
 