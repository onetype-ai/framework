import tasks from '../../addon.js';

import divhunt from 'divhunt';

divhunt.AddonReady('commands', (commands) =>
{
    commands.Item({
        id: 'tasks:create',
        method: 'POST',
        endpoint: '/api/tasks',
        exposed: true,
        in: {
            title: ['string', null, true]
        },
        callback: async function(properties, resolve)
        {
            const task = tasks.Item({
                id: Date.now(),
                title: properties.title,
                done: false
            });

            resolve({ task: task.Get(['id', 'title', 'done']) });
        }
    });
});
