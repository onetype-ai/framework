import divhunt from 'divhunt';

const tasks = divhunt.Addon('tasks', (addon) =>
{
    addon.Field('id', ['number']);
    addon.Field('title', ['string', null, true]);
    addon.Field('done', ['boolean', false]);
});

export default tasks;
