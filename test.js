import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5s', target: 1 },
        { duration: '0s', target: 50 },
        { duration: '1s', target: 50 }
    ]
};

export default function () {

    const res = http.get(`https://c8vqv2s437.execute-api.us-east-1.amazonaws.com/__unused_stage__/hello`)
    
}
