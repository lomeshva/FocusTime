import { createSession } from "../services/sessionAPI";

export default function Timer() {
    const startSession = async () => {
        await createSession({
            user_id: 1,
            duration_minutes: 25,
            break_minutes: 5
        });
    };

    return (
        <div>
            <button onClick={startSession}>Start Session</button>
        </div>
    );
}