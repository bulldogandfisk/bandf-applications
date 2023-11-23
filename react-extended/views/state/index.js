import ls from 'local-storage-proxy';

export const State = ({} = {}) => {
    const storeKey = `userResponseData`;
    const localStore = ls(storeKey, {
        defaults: {
            answers: localStorage.getItem(storeKey) ?? {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                over18: '',
                birthDate: ''
            }
        },
        lspReset: false,
        storageEventListener: true
    });

    // #localStore is now an `ls` instance. What `ls` does is allow you to Work with window.localStorage as
    // if it were an object. #localStore.answers is returned via #subscribe, which attaches it to a State hook
    // in App.js, provides this #answers reference to components, which bind #answers to forms and UI inputs.
    //
    let answerProxy;
    let updateTimer;
    localStore.addEventListener('update', event => {
        console.log('LOCALSTORE received update event. Storing to #answerProxy', localStore.answers);
        answerProxy({ ...localStore.answers });
    });

    // @see App.js
    //
    return {
        subscribe: subscriber => {
            answerProxy = subscriber;
            return { ...localStore.answers };
        },
        storeAnswers: update => {
            const lsAnswers = localStore.answers;
            const current = { ...lsAnswers, ...update };
            answerProxy(current);

            // We're debouncing here. #storeAnswers is often triggered by onChange or other repeated update mechanisms.
            // Allow half a second of inactivity after updating live #answers to update #localStore.
            //
            clearTimeout(updateTimer);
            updateTimer = setTimeout(() => {
                localStore.answers = { ...localStore.answers, ...update };
            }, 500);

            return { previous: { ...lsAnswers }, current };
        }
    };
};
