import http from 'k6/http';
import { SharedArray } from 'k6/data';

const userPool = new SharedArray('userPool', () => JSON.parse(open('./userPool.json')))
const playbackToken = userPool[Math.floor(Math.random() * userPool.length)]

// const stages = []
// const totalStages = 10
// const duration = "30s"
// const rampingDuration = "30s"
// const vuIncrease = 50

// for(let i = 1; i <= totalStages; i ++){
//     stages.push({
//         duration: rampingDuration,
//         target: i * vuIncrease
//     })

//     stages.push({
//         duration: duration,
//         target: i * vuIncrease
//     })
// }

export const options = {
    stages: [
        {duration: "1m", target:500},
        {duration: "2m", target:500}
    ]
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