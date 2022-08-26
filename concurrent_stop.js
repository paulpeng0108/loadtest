import http from 'k6/http';

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

export function setup() {
    let data = {
        "AuthParameters" : {
           "USERNAME" : "rokupaytest_1@nesn.com",
           "PASSWORD" : "asdfasdf"
        },
        "AuthFlow" : "USER_PASSWORD_AUTH",
        "ClientId" : "6ubem6njmkm3c0s69k1mvis288"
     };

    // Using a JSON string as body
    let loginRes = http.post("https://cognito-idp.us-east-2.amazonaws.com/", JSON.stringify(data), {
        headers: { 
            'Content-Type': 'application/json',
            "Content-Type": "application/x-amz-json-1.1",
            "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth"
        },
    });


    const userRes = http.get(
        `https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/users/3dead207-ea7e-48fe-914d-5602aa233f18`,
        {
            headers:  {
                'nesn-access-token': loginRes.json().AuthenticationResult.AccessToken,
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

    return userRes.json().subscription.playbackToken
}

export default function (playbackToken) {
    const res = http.post(
        "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/concurrent/stop",
        null,
        {
            headers:  {'nesn-playback-token': playbackToken}
        }
    )

    console.log(JSON.stringify(res.json()))
}
