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


function getNextEmailId(emailId) {
    return ''
}

function query() {
    return storageService.query(EMAILS_KEY)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function markRead(emailId) {
    var idx = gEmails.findIndex(email => email.id === emailId);
    if (gEmails[idx].isRead) return;
    gEmails[idx].isRead = true;
    return Promise.resolved()
}

function save(email) {
    return storageService.post(EMAILS_KEY, email)
}


function getEmailById(id) {
    return storageService.get(EMAILS_KEY, id)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(_createEmail('Dan', 'Tired of wearing the same socks every day?', 'Check out our new socks collection and trash the other ones! 50% off the previous collection.', 'Oded', false, false));
        emails.push(_createEmail('Sara', 'Landed in Vietnam - first pictures', 'Hi everyone, I just landed in Vietnam a day ago and it is incredible. The flight was long but worth it. Check out the first pictures I took. Wish you were there, lots of love!', 'Oded', false, false));
        emails.push(_createEmail('Dr.Sharon', 'Doctor appointment', 'Hey, just a reminder that you have an appointment at the doctor´s office Tuesday at 10am.', 'Oded', false, false));
        emails.push(_createEmail('Rachel', 'Amir´s secret birthday party', 'Hi all! As you may know, Amir will turn 30 next Friday. I have arranged for us to have a surrprise  party at his favourite bar: Teder.  We will meet at 7pm, just before he comes. Come happy and bearing gifts!', 'Oded', false, false));
        emails.push(_createEmail('Discount Bank', 'Bank information', 'Good morning, please find enclosed my bank information. Bank: Leumi  Account number: 093848492283', 'Oded', false, false));
        emails.push(_createEmail('Eli', 'Cool video montage', 'I made a video montage of our last trip to Eilat, check it out!', 'Oded', false, false));
        emails.push(_createEmail('Discount Bank', 'Discount Bank  - Save the trees', 'Did you know that you could get your monthly recap via  email? Enable this option in just a few clicks, and save the trees!', 'Oded', false, false));



        // emails.push(_createEmail('Dan', 'Tired of wearing the same socks every day?', 'Check out our new socks collection and trash the other ones! 50% off the previous collection.', 'Oded', false, false));
        emails.push(_createEmail('Oded', 'Did you see this video?', 'Hey, I came accross this video and I thought it might interest you. Let me know what you  think!', 'Rachel', true, true));
        // emails.push(_createEmail('Sara', 'Landed in Vietnam - first pictures', 'Hi everyone, I just landed in Vietnam a day ago and it is incredible. The flight was long but worth it. Check out the first pictures I took. Wish you were there, lots of love!', 'Oded', true, false));
        // emails.push(_createEmail('Dr.Sharon', 'Doctor appointment', 'Hey, just a reminder that you have an appointment at the doctor´s office Tuesday at 10am.', 'Oded', false, false));
        // emails.push(_createEmail('Rachel', 'Amir´s secret birthday party', 'Hi all! As you may know, Amir will turn 30 next Friday. I have arranged for us to have a surrprise  party at his favourite bar: Teder.  We will meet at 7pm, just before he comes. Come happy and bearing gifts!', 'Oded', false, false));
        // emails.push(_createEmail('Discount Bank', 'Bank information', 'Good morning, please find enclosed my bank information. Bank: Leumi  Account number: 093848492283', 'Oded', false, false));
        // emails.push(_createEmail('Eli', 'Cool video montage', 'I made a video montage of our last trip to Eilat, check it out!', 'Oded', true, false));
        emails.push(_createEmail('Oded', 'Are you ignoring me?!', 'Hey I tried calling you 10 times, whats going on?!', 'Eli', true, true));
        emails.push(_createEmail('Oded', 'Work contract', 'Here you go, we are all set! Here is your contract so you can read it when you have time. Welcome to the company!', 'Sara', true, true));
        // emails.push(_createEmail('Discount Bank', 'Discount Bank  - Save the trees', 'Did you know that you could get your monthly recap via  email? Enable this option in just a few clicks, and save the trees!', 'Oded', false, false));
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails;
}

function getEmptyEmail() {
    return {
        id: '',
        from: '',
        subject: '',
        body: '',
        isRead: false,
        cc: '',
        sentAt: '',
        reciveAt: '',
        sendTo: '',
        isReply: false
    }
}


function _createEmail(from, subject, body, sendTo, isRead) {
    const email = getEmptyEmail();
    email.id = utilService.makeId();
    email.from = from;
    email.subject = subject;
    email.body = body;
    email.isRead = isRead;
    email.reciveAt = Date.now();
    email.sentAt = '';
    email.isReply = false;
    email.sendTo = sendTo;
    return email;
}