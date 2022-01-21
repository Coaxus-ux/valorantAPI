function callAPI(endpoint, language = 'en-US') {
    const url = `https://valorant-api.com/v1/${endpoint}?language=${language}`;
    return fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }
        )
        .catch(err => {
            console.log(err);
        })
}

