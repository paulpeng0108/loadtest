import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { sleep } from 'k6';

const userPool = new SharedArray('userPool', () => JSON.parse(open('./userPool.json')))
const playbackToken = userPool[Math.floor(Math.random() * userPool.length)]

const stages = []
const totalStages = 10
const duration = "30s"
const rampingDuration = "30s"
const vuIncrease = 100

for(let i = 1; i <= totalStages; i ++){
    stages.push({
        duration: rampingDuration,
        target: i * vuIncrease
    })

    stages.push({
        duration: duration,
        target: i * vuIncrease
    })
}

export const options = {
    stages: stages
};

export default function () {
    
    http.post(
        "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/concurrent/heartbeat",
        null,
        {
            headers:  {'nesn-playback-token': playbackToken}
        }
    )
}