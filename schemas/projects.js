export default {
  name: 'projects',
  title: 'Landing Projects',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  initialValue: {
    recent: true,
    label_recent: {
      en: 'recent project',
      ru: 'недавний проект',
      fi: 'viimeaikainen projekti',
    },
    label: {
      en: 'project name',
      ru: 'имя проекта',
      fi: 'projekti nimi',
    },
  },
  preview: {
    select: {
      title: 'project_title',
    },
  },
  fields: [
    {
      name: 'recent',
      title: 'Недавний проект',
      type: 'boolean',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'poster',
      title: 'Постер',
      type: 'image',
      hidden: ({ document }) => !document?.recent,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'label_recent',
      title: 'Ярлычок',
      description: 'ярлык над названием проекта',
      type: 'object',
      hidden: ({ document }) => !document?.recent,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          required: true,
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'string',
          required: true,
        },
        {
          name: 'fi',
          title: 'Suomi',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      name: 'label',
      title: 'Ярлычок',
      description: 'ярлык над названием проекта',
      type: 'object',
      hidden: ({ document }) => document?.recent,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          required: true,
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'string',
          required: true,
        },
        {
          name: 'fi',
          title: 'Suomi',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      name: 'project_completed',
      title: 'Дата завершения проекта. Пример (Aug 9, 1995)',
      description: 'Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec',
      type: 'string',
      required: true,
    },
    {
      name: 'project_title',
      title: 'Название проекта',
      type: 'string',
      required: true,
    },
    {
      name: 'description',
      title: 'Описание проекта',
      description: 'немного о том, что за проект или для чего его делал',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          required: true,
          of: [{ type: 'block' }],
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'array',
          required: true,
          of: [{ type: 'block' }],
        },
        {
          name: 'fi',
          title: 'Suomi',
          type: 'array',
          required: true,
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Теги, наименования технологий',
      description: 'технологии которые были использованы в создании проекта',
      type: 'array',
      of: [{ type: 'string' }],
      required: true,
    },
    {
      name: 'github_href',
      title: 'Ссылка на GitHub',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'figma_href',
      title: 'Ссылка на Figma',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'page_href',
      title: 'Ссылка на страницу проекта',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
};
