export default {
    name: 'review',
    title: 'Avaliação',
    type: 'object',
    fields: [
        {
            name: 'comment',
            title: 'Comentário',
            type: 'string',
        },
        {
            name: 'guest',
            title: 'Hóspede',
            type: 'guest',
        },
        {
            name: 'rating',
            title: 'Avaliação',
            type: 'number',
            options: {
                list: [
                    { title: '5 Estrelas', value: 5 },
                    { title: '4 Estrelas', value: 4 },
                    { title: '3 Estrelas', value: 3 },
                    { title: '2 Estrelas', value: 2 },
                    { title: '1 Estrela', value: 1 },
                ],
                layout: 'radio',
            },
        },

    ]
}