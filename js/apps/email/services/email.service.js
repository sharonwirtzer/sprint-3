// import { utilService } from './services/util.service.js'
import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js'

const EMAILS_KEY = 'emails';
const gEmails = _createEmails();

export const emailService = {
    query,
    remove,
    save,
    getEmptyemail,
    getById,
    getNextemailId
}

function getNextemailId(emailId) {
    // TODO: get the real next id
    return ''
}

function query() {
    return storageService.query(EMAILS_KEY)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email)
    } else {
        return storageService.post(EMAILS_KEY, email)
    }
}


function getById(id) {
    return storageService.get(EMAILS_KEY, id)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(_createEmail('Wassap1?', 'Pick up1!'));
        emails.push(_createEmail('Wassap2?', 'Pick up2!'));
        emails.push(_createEmail('Wassap3?', 'Pick up3!'));
        emails.push(_createEmail('Wassap4?', 'Pick up4!'));
        emails.push(_createEmail('Wassap5?', 'Pick up5!'));
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}

function getEmptyemail() {
    return { id: '', sendName: '', subject: '', body: '', isRead: false, sentAt: Date.now() }
}


function _createEmail(sendName, subject, body) {
    const email = getEmptyemail();
    email.id = utilService.makeId();
    email.sendName = sendName;
    email.subject = subject;
    email.body = body;
    return email;
}