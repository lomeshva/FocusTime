class ReminderService {
    static createReminder(type) {
        if (type === "audio") return { play: () => console.log("Audio beep!") };
        if (type === "visual") return { flash: () => console.log("Screen flash!") };
    }
}
module.exports = ReminderService;