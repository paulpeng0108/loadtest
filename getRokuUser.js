import http from 'k6/http';

export const options = {
    stages: [
        { duration: '2m', target: 800 },
        { duration: '10m', target: 800 }
    ]
};


export default function () {

    const res = http.get(
            `https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/roku-user/39b718a6be8d5b57bd677b32016bf5e6`,
            {
                headers:  {
                    'nesn-user-zipcode': "03218",
                    'nesn-device-id': "test-device-id-104",
                    "nesn-request-attempt":"nesn-request-attempt",
                    "nesn-location-check-type":"nesn-location-check-type",
                    "nesn-location-check-prompt":"nesn-location-check-prompt",
                    "nesn-state":"state",
                    "nesn-country":"country",
                    "nesn-video-id":"video",
                    "nesn-device-type":"device-type",
                    "nesn-device-hardware":"hardware",
                    "nesn-via-proxy":"true",
                    "nesn-mvpd":"mvpd",
                    "nesn-app-version": "version",
                    "nesn-video-asset-id": "-asset-id"
                }
            }
        )
    
}