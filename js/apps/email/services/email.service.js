// import { utilService } from './services/util.service.js'
import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js'

const EMAILS_KEY = 'emails';
const gEmails = _createEmails();


export const emailService = {
    query,
    remove,
    save,
    getEmptyEmail,
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
        emails.push(_createEmail('Puki', 'Wassap1?', 'Pick up! I need to ask you som', 'Dan', false, false));
        emails.push(_createEmail('Bob', 'Wassap2?', 'Pick up! I need to ', 'Sara', false, false));
        emails.push(_createEmail('David', 'Wassap3?', 'Pick up!', 'Dan', false, false));
        emails.push(_createEmail('Avi', 'Wassap4?', 'Pick up! I need to ', 'Rachel', false, false));
        emails.push(_createEmail('Arik', 'Wassap5?', 'Pick up! I need ', 'Dan', false, false));
        emails.push(_createEmail('Arik', 'Wassap1?', 'Pick up! I need ', 'Arik', false, false));
        emails.push(_createEmail('David', 'Wassap2?', 'Pick up! I need ', 'Micha', false, false));
        emails.push(_createEmail('Rachel', 'Wassap3?', 'Pick up! I need ', 'Golan', false, false));
        emails.push(_createEmail('Dana', 'Wassap4?', 'Pick up! I need ', 'Shlomi', false, false));
        emails.push(_createEmail('Sara', 'Wassap5?', 'Pick up! I need', 'David', false, false));
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}
//new Date()
function getEmptyEmail() {
    return {
        id: '',
        sendName: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: '',
        sendTo: '',
        send: false,
        isDraft: false

    }
}


function _createEmail(sendName, subject, body, isRead, sendTo) {
    const email = getEmptyEmail();
    email.id = utilService.makeId();
    email.sendName = sendName;
    email.subject = subject;
    email.body = body;
    email.isRead = isRead;
    // email.sentAt = Date.now();
    email.sentAt = setDate();
    email.sendTo = sendTo;

    return email;
}

function setDate() {
    var date = utilService.getRandomDate(new Date(2012, 0, 1), new Date()); //(start,end)
    // var date = new Date(); for check if it will return correctly (only the time)

    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    var year = date.getFullYear();
    var month = date.getMonth() + 1; // : January = 0; February = 1, etc.
    var day = date.getDate();

    if ((year === (new Date().getFullYear())) &&
        (month === ((new Date().getMonth()) + 1)) &&
        (day === (new Date().getDate()))) {
        return hour + ' : ' + minutes;
    }

    return day + '.' + month + '.' + year + ', ' + hour + ':' + minutes;





}