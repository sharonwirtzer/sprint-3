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
    getEmailById,
    getNextEmailId,
    markRead
}

function getAllEmails() {
    return gEmails;
}

function getNextEmailId(emailId) {
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
    // debugger;
    // email.sentAt = Date.now();
    // debugger
    if (email.id) {
        return storageService.put(EMAILS_KEY, email)
    } else {
        return storageService.post(EMAILS_KEY, email)
    }
}


function getEmailById(id) {
    return storageService.get(EMAILS_KEY, id)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(_createEmail('Dan', 'Wassap1?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Puki', false));
        emails.push(_createEmail('Sara', 'Wassap2?', 'Quaerat tenetur mollitia consectetur adipisci, dolorum.', 'Puki', false));
        emails.push(_createEmail('Dan', 'Wassap3?', 'blanditiis alias, nemo nihil soluta nostrum.', 'Puki', true));
        emails.push(_createEmail('Rachel', 'Wassap4?', 'veniam beatae iste explicabo in voluptas deserunt totam ea ratione.', 'Puki', false));
        emails.push(_createEmail('Dan', 'Wassap5?', 'earum necessitatibus fugit quas! Consequatur at in veritatis non quo!', 'Puki', false));
        emails.push(_createEmail('Puki', 'Wassap1?', 'perspiciatis asperiores dolorem dolores et tenetur odio autem eos eligendi.', 'David', true));
        emails.push(_createEmail('Puki', 'Wassap2?', 'Consectetur deserunt eveniet sed ut amet quo sequi sit, minus hic rem commodi.', 'Eli', false));
        emails.push(_createEmail('Puki', 'Wassap3?', 'Neque repellat enim id eum nobis, animi, repellendus alias fuga doloribus,', 'Sara', false));
        emails.push(_createEmail('Puki', 'Wassap4?', 'Soluta, esse quaerat illum pariatur asperiores minus vero totam libero', 'Puki', true));
        emails.push(_createEmail('Puki', 'Wassap5?', 'asperiores aut sequi aperiam nihil mollitia consequuntur!', 'Puki', false));
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}
//new Date()
function getEmptyEmail() {
    return {
        id: '',
        from: '',
        subject: '',
        body: '',
        isRead: false,
        cc: '',
        sentAt: '',
        sendTo: '',
        // isDraft: false

    }
}


function _createEmail(from, subject, body, sendTo, isRead) {
    const email = getEmptyEmail();
    email.id = utilService.makeId();
    email.from = from;
    email.subject = subject;
    email.body = body;
    email.isRead = isRead;
    // email.sentAt = Date.now();
    // var date = utilService.getRandomDate(new Date(2012, 0, 1), new Date()); //(start,end)
    email.sentAt = Date.now();
    // email.sentAt = setDate(date);
    email.sendTo = sendTo;

    return email;
}

// function setDate(date) {

//     var date = new Date(); for check if it will return correctly (only the time)

//     var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//     var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

//     var year = date.getFullYear();
//     var month = date.getMonth() + 1; // : January = 0; February = 1, etc.
//     var day = date.getDate();

//     if ((year === (new Date().getFullYear())) &&
//         (month === ((new Date().getMonth()) + 1)) &&
//         (day === (new Date().getDate()))) {
//         return hour + ' : ' + minutes;
//     }

//     return day + '.' + month + '.' + year + ', ' + hour + ':' + minutes;

// }