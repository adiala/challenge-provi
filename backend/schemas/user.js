export default {
    name: 'user',
    title: 'Usuário',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome Completo',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'avatar',
            title: 'Foto',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}