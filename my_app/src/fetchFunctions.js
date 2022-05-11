export function getData(url) {
    return new Promise((resolve, rejects) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => { alert(err); rejects(err) });
    })
}