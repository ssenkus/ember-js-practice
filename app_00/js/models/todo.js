Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});


Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Get the money',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Get the power',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Get the women',
        isCompleted: false
    }
];