import http from 'k6/http';
import { SharedArray } from 'k6/data';

const userPool = new SharedArray('userPool', () => JSON.parse(open('./userPool.json')))
const playbackToken = userPool[Math.floor(Math.random() * userPool.length)]

export const options = {
    stages: [
        {duration: "1m", target:400},
        {duration: "10m", target:400}
    ]
};

export default function () {
    
    http.post(
        "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/concurrent/stop",
        null,
        {
            headers:  {'nesn-playback-token': playbackToken}
        }
    )
}