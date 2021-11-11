import review from "./review";

export default {
    name: 'property',
    title: 'Propriedade',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título da Propriedade',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'host',
            title: 'Anfitrião',
            type: 'host',
        },
        {
            name: 'type',
            title: 'Tipo de Propriedade',
            type: 'string',
            options: {
                list: [
                    {title: 'Apartamento', value: 'Apartamento'},
                    {title: 'Estúdio', value: 'Estúdio'},
                    {title: 'Flat', value: 'Flat'},
                ],
                layout: 'radio',
            }
        },
        {
            name: 'location',
            title: 'Localização',
            type: 'object',
            fields: [
                {name: 'district', type: 'string', title: 'Bairro'},
                {name: 'city', type: 'string', title: 'Cidade'},
                {name: 'country', type: 'string', title: 'País'}, 
            ],
        },
        {
            name: 'amenities',
            title: 'Comodidades',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Cozinha', value: 'Cozinha'},
                    {title: 'Wi-Fi', value: 'Wifi'},
                    {title: 'Estacionamento', value: 'Estacionamento Incluído'},
                    {title: 'TV', value: 'TV'},
                ],
            }
        },
        {
            name: 'mainImage',
            title: 'Foto Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Fotos',
            type: 'array',
            of: [{type: 'image'}],
        },
        {
            name: 'price',
            title: 'Preço/Noite',
            type: 'number',
        },
        {
            name: 'guests',
            title: 'Hóspedes',
            type: 'number',
        },
        {
            name: 'beds',
            title: 'Camas',
            type: 'number',
        },
        {
            name: 'bedrooms',
            title: 'Quartos',
            type: 'number',
        },
        {
            name: 'review',
            title: 'Avaliação',
            type: 'array',
            of: [{type: 'review'}]
        }
    ]
}