import { utilService } from './util-service.js'
import { keepList } from './list-service.js';


const keepS_KEY = 'keeps'
const gkeeps = _createkeeps();

export const keepService = {
    query,
    remove,
    save,
    getEmptykeep
}

function query() {
    return keepList;
}

function remove(keepId) {
    const idx = keepList.findIndex(keep => keep.id === keepId);
    keepList.splice(idx, 1);
    utilService.saveToStorage(keepS_KEY, keepList)
}

function save(keep) {
    keep.id = utilService.makeId();
    keepList.unshift(keep);
    utilService.saveToStorage(keepS_KEY, keepList)
}



function getEmptykeep() {
    return { id: '', title: '', note: '', }
}

function _createkeeps() {
    let keeps = utilService.loadFromStorage(keepS_KEY)
    keeps = []
    utilService.saveToStorage(keepS_KEY, keeps)
    return keeps;
}

function _createkeep(title, note,) {
    const keep = {
        id: utilService.makeId(),
        title,
        note,
    }
    return keep;
}