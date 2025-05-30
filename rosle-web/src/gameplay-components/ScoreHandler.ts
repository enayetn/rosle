/**
 * Handle score persistence for Rosle. i/o from localstorage
 * - Store scores as dictionary keyed by date string to enforce uniqueness
 * - 
 */

const LOCALSTORE_KEY_PEFIX = "rosle.score";
const LOCALSTORE_SCHEMA_VERSION = "v1.0";
const LOCALSTORE_KEY = `${LOCALSTORE_KEY_PEFIX}.${LOCALSTORE_SCHEMA_VERSION}`;

interface IScore {
    scores: boolean[]
}

const getTodayDateString = () => {
    const today = new Date();

    // Surely there is a better way
    const dateArr = today.toLocaleDateString()
        .split("/")
        .map((v)=>{
            return v.padStart(2, "0")
        });
    const date = dateArr[2] + "-" + dateArr[0] + "-" + dateArr[1];

    return date;
}

function ScoreHandler() {

    interface IScoreStoreEntry {
        date: string
        scores: boolean[]
    }
    

    interface IScoreStore {
        [key: string]: IScoreStoreEntry
    }
    const getScore = (): IScoreStore => {
        return JSON.parse(localStorage.getItem(LOCALSTORE_KEY) || "{}");
    }

    const getTodayScore = (): IScoreStoreEntry => {
        const date = getTodayDateString();

        return getScore()[date] || { date: date, scores: [] };
    }

    const setScore = (score: IScore) => {
        const currentScore = getScore();
        currentScore[getTodayDateString()] = {
            date: getTodayDateString(),
            scores: score.scores
        };

        localStorage.setItem(LOCALSTORE_KEY, JSON.stringify(currentScore));
    }

    const clearScore = () => {
        localStorage.removeItem(LOCALSTORE_KEY);
    }

    return {
        getTodayScore,
        setScore,
        clearScore
    }
}

export {ScoreHandler, getTodayDateString};
export type {IScore}