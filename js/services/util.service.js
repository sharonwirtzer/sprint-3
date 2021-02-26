export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    getRandomDate,
    foramatDate

}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function foramatDate(timestamp) {
    var date = new Date(timestamp);
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    var year = date.getFullYear();
    var month = date.getMonth() + 1; // : January = 0; February = 1, etc.
    var day = date.getDate();
    return day + '.' + month + '.' + year + ', ' + hour + ':' + minutes;
}