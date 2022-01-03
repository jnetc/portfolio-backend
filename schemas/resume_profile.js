export default {
  name: 'resume_profile',
  title: 'Resume Profile',
  type: 'document',
  preview: {
    select: {
      title: 'name.ru',
    },
  },
  fields: [
    {
      name: 'name',
      title: 'Имя',
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
      name: 'professional',
      title: 'Специализация',
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
      name: 'summary',
      title: 'Кратко обо мне',
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
      name: 'location',
      title: 'Место нахождения',
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
      name: 'github_href',
      title: 'ссылка на github профиль',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'stackoverflow_href',
      title: 'ссылка на stackoverflow профиль',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'email',
      title: 'электронная почта',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    },
  ],
};
