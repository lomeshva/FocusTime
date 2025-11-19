class ReminderService {
    static create(type) {
        switch (type) {
            case "audio":
                return { notify: () => console.log("Audio beep!") };
            case "visual":
                return { notify: () => console.log("Screen flash!") };
            default:
                return { notify: () => {} };
        }
    }
}
module.exports = ReminderService;