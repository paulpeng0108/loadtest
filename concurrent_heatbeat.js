import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { sleep } from 'k6';

const userPool = new SharedArray('userPool', () => JSON.parse(open('./userPool.json')))
const playbackToken = userPool[Math.floor(Math.random() * userPool.length)]

export const options = {
    stages: [
        {duration: "1m", target:1000},
        {duration: "1h", target:1000}
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

    if(Math.floor(Math.random() * 5) == 0){

        if(Math.floor(Math.random() * 2) == 0){
            sleep(5)
        }

        http.post(
            "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/concurrent/stop",
            null,
            {
                headers:  {'nesn-playback-token': playbackToken}
            }
        )

    } else {
        sleep(25)
    }
}