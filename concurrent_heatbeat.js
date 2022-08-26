import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { sleep } from 'k6';

const userPool = new SharedArray('userPool', () => JSON.parse(open('./userPool.json')))
const playbackToken = userPool[Math.floor(Math.random() * userPool.length)]

// export const options = {
//     stages: [
//         { duration: '10s', target: 10 }
//     ]
// };

export const options = {
    stages: [
        { duration: '20s', target: 100 },
        { duration: '20s', target: 100 },
        { duration: '20s', target: 200 },
        { duration: '20s', target: 200 },
        { duration: '20s', target: 300 },
        { duration: '20s', target: 300 },
        { duration: '20s', target: 400 },
        { duration: '20s', target: 400 },
        { duration: '20s', target: 500 },
        { duration: '20s', target: 500 }
    ]
};

export default function () {
    const res = http.post(
        "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/concurrent/heartbeat",
        null,
        {
            headers:  {'nesn-playback-token': playbackToken}
        }
    )

    //sleep()
}