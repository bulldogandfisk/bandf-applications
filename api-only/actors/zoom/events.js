import crypto from 'node:crypto';
export default async ({ payload, STDLIB, Event, Context, Services, Channels }) => {
    const body = payload.message;

    // Zoom may be validating this endpoint by sending a challenge. Solve and respond.
    // https://developers.zoom.us/docs/api/rest/webhook-reference/#validate-your-webhook-endpoint
    //
    if (body.event === 'endpoint.url_validation') {
        const plainToken = body.payload.plainToken;
        return {
            200: {
                plainToken,
                encryptedToken: hash(plainToken)
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    const status = verifyZoomEvent(payload.message, payload.headers, STDLIB);

    if (status === 200) {
        const { payload, event } = body;
        const timestamp = new Date(Number(body.event_ts)).toISOString();
        const meetingId = String(payload.object.id);

        return {
            200: {},
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    return {
        [status]: `Invalid request`,
        headers: {
            'Content-Type': 'text/plain'
        }
    };
};

// https://developers.zoom.us/docs/api/rest/webhook-reference/#verify-webhook-events
//
function verifyZoomEvent(message, headers, STDLIB) {
    const timestamp = headers['x-zm-request-timestamp'];
    const signature = headers['x-zm-signature'];

    if (!timestamp || !signature) {
        return 400;
    }

    // v0:{WEBHOOK_REQUEST_HEADER_X-ZM-REQUEST-TIMESTAMP_VALUE}:{WEBHOOK_REQUEST_BODY}
    //
    const baseString = `v0:${timestamp}:${JSON.stringify(message)}`;
    const computedSignature = `v0=${hash(baseString)}`;
    if (computedSignature === signature) {
        return 200;
    }

    STDLIB.Log.error(`Invalid Zoom webhook call -- cannot match signature.`);
    return 400;
}

function hash(text) {
    return crypto.createHmac('sha256', process.env.ZOOM_WEBHOOK_SECRET_TOKEN).update(text).digest('hex');
}
