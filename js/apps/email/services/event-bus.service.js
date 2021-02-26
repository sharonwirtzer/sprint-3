// Publisher - Subscriber
export const eventBus = new Vue()

// Emits, but no one will be notified
// eventBus.$emit('puki', 12);

// eventBus.$on('puki', (val) => {
//     console.log('Puki Happened', val)
// })
// eventBus.$on('puki', (val) => {
//     console.log('Observing that Puki ', val)
// })

// // Debug Technique:
// window.myBus = eventBus;
// export const NEW_NOTE_CREATED = 'new-note-created';