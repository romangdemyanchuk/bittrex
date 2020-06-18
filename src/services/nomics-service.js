export default class NomicsApiService {
    _apiBase = 'https://api.nomics.com/v1';
    async getResource(url) {
        return await fetch(`${this._apiBase}${url}`).then(response => response.json()).then(res => {
            if (!res) {
                    throw new Error(`Could not fetch ${url} received ${res.status}`)
                }
            else {
                return res
            }
        })
    }
    getData(tableName) {
        return this.getResource(`/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&interval=1d,30d&convert=${tableName}`);
    }
}