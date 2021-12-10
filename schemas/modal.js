export default {
  name: 'modal',
  title: 'Modal',
  type: 'document',
  initialValue: {
    active: true,
    // label_recent: {
    //   en: 'recent project',
    //   ru: 'недавний проект',
    // },
    // label: {
    //   en: 'project name',
    //   ru: 'имя проекта',
    // },
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
      title: 'Заголовок модального окна',
      type: 'object',
      required: true,
      hidden: ({ document }) => !document?.active,
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
      title: 'Под заголовок модального окна',
      type: 'object',
      required: true,
      hidden: ({ document }) => !document?.active,
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
      hidden: ({ document }) => !document?.active,
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
      hidden: ({ document }) => !document?.active,
    },
    {
      name: 'extra_info',
      title: 'Дополнительная информация',
      type: 'object',
      hidden: ({ document }) => !document?.active,
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
      name: 'modal_href',
      title: 'Внешняя ссылка',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
};
