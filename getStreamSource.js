import http from 'k6/http';

export const options = {
    stages: [
        { duration: '1s', target: 1000 },
        { duration: '1s', target: 1000 },
    ]
};

export default function () {

    const res = http.get(
            `https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/v2/stream?stream_type=4k_stream`,
            {
                headers:  {
                    "nesn-playback-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzY4Njg4ODEsInVpZCI6InRlc3QiLCJkbGltaXQiOjQsImNsaW1pdCI6NCwic2lkIjoidGVzdCIsImlhdCI6MTY3MDg2ODg4MX0.FsJtS0ioTHUtleUizPkrXMpHYLdNBGHV4iXSlizvTZZQH1gS22uDcrS9tntZEMmBFXoAj_Irur3QUsTKGFOnHOyVHMy1IsuvgdxDoL1KOGk3_GufMaw9V16BhNeUbRRagGpB2kK0yr6nZJ2j2DFG663pIXIvPGVQEaRTks0P54cW2N23OqlQOAHF_3XFRbwYW-bZ9mi94bhe83MsjCQqkS4N38BEjRsNjtlb6lzEPROilp-lhUcgwN9ZAa4OxcU7q3O18Nod0C0W3ZCINaQ9lEjow65Oy8SYCZFrPXk2vdh4QPkwFyjKSTDGAnqOrZbr23i509jTTZPD1-Kyu2d5zg"
                }
            }
        )
    
}
