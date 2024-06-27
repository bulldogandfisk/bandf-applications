const codePool = Array.from({ length: 1e4 }, () => Math.floor(1e5 + Math.random() * 9e5));

export default async ({ payload, STDLIB, Event, Context, Services }) => {
    const { email, name } = payload.message;

    const code = codePool[Math.floor(Math.random() * codePool.length)];

    await Services.get('mail/send')({
        provider: 'sendgrid',
        to: 'contact@bulldogandfisk.com',
        subject: 'Verify your email address',
        template: {
            path: 'auth/account-creation',
            data: {
                code,
                email,
                name
            }
        }
    });

    return {
        200: {
            code
        }
    };
};
