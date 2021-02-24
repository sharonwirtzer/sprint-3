// import { utilService } from './services/util.service.js'
import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js'

const EMAILS_KEY = 'emails';
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
    return storageService.query(EMAILS_KEY)
}

function remove(mailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(EMAILS_KEY, email)
    } else {
        return storageService.post(EMAILS_KEY, email)
    }
}


function getById(id) {
    return storageService.get(EMAILS_KEY, id)
}

function _createMails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(_createMail('Wassap1?', 'Pick up1!'));
        emails.push(_createMail('Wassap2?', 'Pick up2!'));
        emails.push(_createMail('Wassap3?', 'Pick up3!'));
        emails.push(_createMail('Wassap4?', 'Pick up4!'));
        emails.push(_createMail('Wassap5?', 'Pick up5!'));
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}

function getEmptyMail() {
    return { id: '', sendName: '', subject: '', body: '', isRead: false, sentAt: Date.now() }
}


function _createMail(sendName, subject, body) {
    const email = getEmptyMail();
    email.id = utilService.makeId();
    email.sendName = sendName;
    email.subject = subject;
    email.body = body;
    return email;
}