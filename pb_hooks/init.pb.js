/// <reference path="../pb_data/types.d.ts" />

onBootstrap((e) => {
    e.next()
    console.log("App initialized!")
})

onRecordCreateRequest((e) => {
    try {
        const hooks = require('./src/hooks/mod-create-hooks.js');
        const authUser = e.auth;
        if (!authUser) {
            e.error('Unauthorized: No authenticated user found');
            throw new Error('Unauthorized: No authenticated user found');
        }
        let hookError = null;
        for (const hook of hooks) {
            const result = hook(e.record, authUser);
            if (!result.status) {
                hookError = result;
                break;
            }
        }
        if (!hookError) {
            e.next();
        } else {
            e.error(hookError.message);
            throw new BadRequestError(hookError.message);
        }
    } catch (hookError) {
        e.error(`${hookError.message}`);
        throw new BadRequestError(hookError.message);
    }
}, 'mods'); // this is only for mods collection