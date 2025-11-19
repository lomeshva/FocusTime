class TimerService {
    constructor() {
        this.duration = 0;
        this.observers = [];
    }
    start(duration) {
        this.duration = duration;
        this.notify("STARTED");
    }
    pause() {
        this.notify("PAUSED");
    }
    stop() {
        this.notify("STOPPED");
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }
}
module.exports = new TimerService();