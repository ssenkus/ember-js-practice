Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});


Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'get groceries',
        isCompleted: true
    },
    {
        id: 2,
        title: 'do the laundry',
        isCompleted: false
    },
    {
        id: 3,
        title: 'drink the beer',
        isCompleted: false
    }
];