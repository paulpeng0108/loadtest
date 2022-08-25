import http from 'k6/http';


export const options = {
    stages: [
        { duration: '5s', target: 2 }
    ],
};

export default function () {

    http.post(
        "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/concurrent/heartbeat",
        null,
        {
            headers:  {
                'nesn-playback-token': "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NpZCI6IjYyODEwOTQyOTUwMDEiLCJleHAiOjE2NjE0MzcwMDUsInVpZCI6IjdlYTE2NmRjLTg3MWMtNDg4NS05Yjg3LWFjNjNmNTM2OTgwNyIsImRsaW1pdCI6MywiY2xpbWl0IjozLCJ1YSI6ImF4aW9zLzAuMjYuMSIsImNiZWgiOiJCTE9DS19ORVdfVVNFUiIsInNpZCI6InRlc3QtZGV2aWNlLWlkLTEwNCIsImVtYWlsIjoicHRjX3Jva3VfYWN0aXZlQHB0Yy5jb20iLCJpYXQiOjE2NjE0MzUyMDV9.PR4ZZeMw118wZ1QLa2DtQ_sqPCU4xEgQOgeu7fqfBC0fhqBdJnIsbfaMGOq3EUqm3S1QVciTcjH8smAQDmA9NyIeL8hcIuRLsqppA3X1j2suwmM_fcuq0pVO1B5UtN4fv7dZFtygZ0lbkLOm9sVzfIryMFOU41LZdHTMeLUQnLRwxtiK1zEE1jZeyd22yS9JYoQs3m5J2cMV28ml1euQ84pq5ac4quaNsO8QWQcRRqI829I7frGX0ezHXelDCUL23AcLGtsbu1zqEyeyef22DvIiGlP0FVl7KuUsmDruIez78wWM3btrIWeNdwY4CsGEzmVGf5RcG03d8VOdHHvPmQ"
            }
        }
    )
}
