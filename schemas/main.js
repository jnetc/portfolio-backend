export default {
  name: 'main',
  title: 'Landing Main',
  type: 'document',
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    {
      name: 'meta_title',
      title: 'МЕТА title - оглавление',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'string',
        },
      ],
    },
    {
      name: 'meta_desc',
      title: 'МЕТА description - описание',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      title: 'Заголовок сайта',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'string',
        },
      ],
    },
    {
      name: 'slogan',
      title: 'Слоган',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'story',
      title: 'Моя история',
      description:
        'Краткое изложение своей истории о том как я стал программистом',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};
