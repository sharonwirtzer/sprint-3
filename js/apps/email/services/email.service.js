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
        emails.push(_createEmail('Nir', 'Tired of wearing the same socks every day?', 'Check out our new socks collection and trash the other ones! 50% off the previous collection.', 'Nir', true));
        emails.push(_createEmail('Dan', 'Did you see this video?', 'Hey, I came accross this video and I thought it might interest you. Let me know what you  think!', 'Nir', false));
        emails.push(_createEmail('Sara', 'Landed in Vietnam - first pictures', 'Hi everyone, I just landed in Vietnam a day ago and it is incredible. The flight was long but worth it. Check out the first pictures I took. Wish you were there, lots of love!', 'Puki', false));
        emails.push(_createEmail('Dan', 'Doctor appointment', 'Hey, just a reminder that you have an appointment at the doctor´s office Tuesday at 10am.', 'Nir', true));
        emails.push(_createEmail('Rachel', 'Amir´s secret birthday party', 'Hi all! As you may know, Amir will turn 30 next Friday. I have arranged for us to have a surrprise  party at his favourite bar: Teder.  We will meet at 7pm, just before he comes. Come happy and bearing gifts!', 'Puki', false));
        emails.push(_createEmail('Dan', 'Bank information', 'Good morning, please find enclosed my bank information. Bank: Leumi  Account number: 093848492283', 'Nir', false));
        emails.push(_createEmail('Nir', 'Cool video montage', 'I made a video montage of our last trip to Eilat, check it out!', 'David', true));
        emails.push(_createEmail('Nir', 'Are you ignoring me?!', 'Hey I tried calling you 10 times, whats going on?!', 'Eli', false));
        emails.push(_createEmail('Nir', 'Work contract', 'Here you go, we are all set! Here is your contract so you can read it when you have time. Welcome to the company!', 'Sara', false));
        emails.push(_createEmail('Discount Bank', 'Discount Bank  - Save the trees', 'Did you know that you could get your monthly recap via  email? Enable this option in just a few clicks, and save the trees!', 'Nir', false));
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



/* 
let emails = utilService.loadFromStorage(EMAILS_KEY)
if (!emails || !emails.length) {
    emails = []
    emails.push(_createEmail('Puki', 'Tired of wearing the same socks every day?', 'Check out our new socks collection and trash the other ones! 50% off the previous collection.', 'Puki', true));
    emails.push(_createEmail('Dan', 'Did you see this video?', 'Hey, I came accross this video and I thought it might interest you. Let me know what you  think!', 'Puki', false));
    emails.push(_createEmail('Sara', 'Landed in Vietnam - first pictures', 'Hi everyone, I just landed in Vietnam a day ago and it is incredible. The flight was long but worth it. Check out the first pictures I took. Wish you were there, lots of love!', 'Puki', false));
    emails.push(_createEmail('Dan', 'Doctor appointment', 'Hey, just a reminder that you have an appointment at the doctor´s office Tuesday at 10am.', 'Nir', true));
    emails.push(_createEmail('Rachel', 'Amir´s secret birthday party', 'Hi all! As you may know, Amir will turn 30 next Friday. I have arranged for us to have a surrprise  party at his favourite bar: Teder.  We will meet at 7pm, just before he comes. Come happy and bearing gifts!', 'Puki', false));
    emails.push(_createEmail('Dan', 'Bank information', 'Good morning, please find enclosed my bank information. Bank: Leumi  Account number: 093848492283', 'Puki', false));
    emails.push(_createEmail('Puki', 'Cool video montage', 'I made a video montage of our last trip to Eilat, check it out!', 'David', true));
    emails.push(_createEmail('Puki', 'Are you ignoring me?!', 'Hey I tried calling you 10 times, whats going on?!', 'Eli', false));
    emails.push(_createEmail('Puki', 'Work contract', 'Here you go, we are all set! Here is your contract so you can read it when you have time. Welcome to the company!', 'Sara', false));
    emails.push(_createEmail('Puki', 'Discount Bank  - Save the trees', 'Did you know that you could get your monthly recap via  email? Enable this option in just a few clicks, and save the trees!', 'Puki', false));
    utilService.saveToStorage(EMAILS_KEY, emails)
}
return emails; */