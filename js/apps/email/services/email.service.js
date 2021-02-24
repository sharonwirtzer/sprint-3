// import { utilService } from './services/util.service.js'
import { utilService } from '../../../services/util.service.js';
// import { storageService } from './async-storage.service.js'

const MAILS_KEY = 'mails';
const gmails = _createMails();

export const emailService = {
    query,
    remove,
    save,
    getEmptyMail,
    getById,
    getNextMailId
}

function getNextMailId(mailId) {
    // TODO: get the real next id
    return ''
}

function query() {
    return storageService.query(MAILS_KEY)
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAILS_KEY, mail)
    } else {
        return storageService.post(MAILS_KEY, mail)
    }
}


function getById(id) {
    return storageService.get(MAILS_KEY, id)
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('Wassap1?', 'Pick up1!'));
        mails.push(_createMail('Wassap2?', 'Pick up2!'));
        mails.push(_createMail('Wassap3?', 'Pick up3!'));
        mails.push(_createMail('Wassap4?', 'Pick up4!'));
        mails.push(_createMail('Wassap5?', 'Pick up5!'));
        utilService.saveToStorage(MAILS_KEY, mails)
    }
    return mails;
}

function getEmptyMail() {
    return { id: '', sendName: '', subject: '', body: '', isRead: false, sentAt: Date.now() }
}


function _createMail(sendName, subject, body) {
    const mail = getEmptyMail();
    mail.id = utilService.makeId();
    mail.sendName = sendName;
    mail.subject = subject;
    mail.body = body;
    return mail;
}