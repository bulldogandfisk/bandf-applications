export default async ({ payload, STDLIB, Event, Context, Services }) => {
    const view = payload.params.viewName;

    const { compiled } = await STDLIB.Compile({ view });

    return {
        200: compiled,
        headers: {
            'Content-Type': 'text/html'
        }
    };
};
