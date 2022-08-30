import http from 'k6/http';

export const options = {
    stages: [
        { duration: '30s', target: 500 },
        { duration: '10m', target: 500 }
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
    let res = http.post("https://cognito-idp.us-east-2.amazonaws.com/", JSON.stringify(data), {
        headers: { 
            'Content-Type': 'application/json',
            "Content-Type": "application/x-amz-json-1.1",
            "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth"
        },
    });

    return res.json()
}

export default function ({AuthenticationResult}) {

    const res = http.get(
            `https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/users/3dead207-ea7e-48fe-914d-5602aa233f18`,
            {
                headers:  {
                    'nesn-access-token': AuthenticationResult.AccessToken,
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
