export default async ({ payload, STDLIB, Event, Context, Services }) => {
    try {
        const { context } = payload.message;
        const email = 'contact@bulldogandfisk.com';

        const parse = (values, body = []) => {
            for (const [key, value] of Object.entries(values)) {
                if (typeof value === 'object') {
                    parse(value, body);
                } else {
                    body.push(`<div>${key}: ${value}</div>`);
                }
            }
            return body;
        };

        const body = parse(context);

        // Services.get('mail/send')({
        //     provider: 'mailgun',
        //     to: 'contact@bulldogandfisk.com',
        //     subject: 'test subject',
        //     text: 'the text',
        //     html: '<h1>the html</h1>',
        //     template: {
        //         path: 'auth/mail-support',
        //         data: {
        //             logoUrl: process.env.LOGO_URL,
        //             context: `<p>${body.join('')}</p>`,
        //             email: context.email,
        //             name: `${context.firstName} ${context.lastName}`
        //         }
        //     }
        // });

        return {
            200: {}
        };
    } catch (error) {
        return {
            500: { error: error.message }
        };
    }
};
