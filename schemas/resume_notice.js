export default {
  name: 'resume_notice',
  title: 'Resume уведомление',
  type: 'document',
  initialValue: {
    active: true,
  },
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    {
      name: 'active',
      title: 'Включить / отключить информацию',
      type: 'boolean',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Заголовок уведомления',
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
      name: 'subtitle',
      title: 'Дополнительно для заголовка',
      type: 'object',
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
      name: 'info',
      title: 'Информация',
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
      name: 'subsidy',
      title: 'Сумма субсидий которую может получить наниматель',
      type: 'string',
    },
    {
      name: 'extra_info',
      title: 'Дополнительная информация',
      type: 'object',
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
      name: 'external_href',
      title: 'Внешняя ссылка',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
};
