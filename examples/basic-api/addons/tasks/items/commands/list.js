import divhunt from 'divhunt';
import tasks from '../../addon.js';

divhunt.AddonReady('commands', (commands) =>
{
    commands.Item({
        id: 'tasks:list',
        method: 'GET',
        endpoint: '/api/tasks',
        exposed: true,
        callback: async function(properties, resolve)
        {
            const items = Object.values(tasks.Items());

            resolve({
                tasks: items.map(item => item.Get(['id', 'title', 'done']))
            });
        }
    });
});
