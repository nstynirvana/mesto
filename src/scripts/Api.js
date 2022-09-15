class Api {
    constructor(setting) {
        this._url = setting.url;
        this._headers = setting.headers;
    }

    getAllCards() {
        return fetch(this._url, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            return res.json();
        });
    }
 }

 export default Api;
 