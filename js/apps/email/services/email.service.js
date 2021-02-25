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
    getNextemailId,
    markRead
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

function markRead(emailId) {
    // return storageService.mark(EMAILS_KEY, emailId) // to add this func to the storage ? ? ? ? (inbar)
    var idx = gEmails.findIndex(email => email.id === emailId);
    if (gEmails[idx].isRead) return;
    gEmails[idx].isRead = true;
    return Promise.resolved()
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
        emails.push(_createEmail('Puki', 'Wassap1?', 'Pick up! I need to ask you something very important', false));
        emails.push(_createEmail('Bob', 'Wassap2?', 'Pick up! I need to ask you something very important', true));
        emails.push(_createEmail('David', 'Wassap3?', 'Pick up! I need to ask you something very important', true));
        emails.push(_createEmail('Avi', 'Wassap4?', 'Pick up! I need to ask you something very important', false));
        emails.push(_createEmail('Arik', 'Wassap5?', 'Pick up! I need to ask you something very important', false));
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}
//new Date()
function getEmptyemail() {
    return { id: '', sendName: '', subject: '', body: '', isRead: false, sentAt: Date.now() }
}


function _createEmail(sendName, subject, body, isRead) {
    const email = getEmptyemail();
    email.id = utilService.makeId();
    email.sendName = sendName;
    email.subject = subject;
    email.body = body;
    email.isRead = isRead;
    email.sentAt = Date.now();
    return email;
}