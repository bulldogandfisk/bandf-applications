export default async ({ payload, STDLIB, Event, Context, Services }) => {
    // Get application state somehow and return it.
    // This isn't necessary, but you'll often find the need to fetch some
    // context, resolved values, dynamic endpoint urls, and so forth.
    //
    const state = {
        session: {
            some_session: 'data'
        },
        context: {
            some_numbers: [1, 2, 3]
        }
    };

    return {
        200: state,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
