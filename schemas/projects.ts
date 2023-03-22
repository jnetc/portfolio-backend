import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'Landing Projects',
  type: 'document',
  initialValue: () => ({
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
  }),
  preview: {
    select: {
      title: 'project_title',
    },
  },
  fields: [
    defineField({
      name: 'recent',
      title: 'Недавний проект',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'poster',
      title: 'Постер',
      type: 'image',
      hidden: ({ document }) => !document?.recent,
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'video',
      title: 'Видео файл',
      type: 'file',
      hidden: ({ document }) => !document?.recent,
    }),
    defineField({
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
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'string',
        },
        {
          name: 'fi',
          title: 'Suomi',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'label',
      title: 'Ярлычок',
      description: 'ярлык над названием проекта',
      type: 'object',
      hidden: ({ document }) => !!document?.recent,
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
        {
          name: 'fi',
          title: 'Suomi',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'project_completed',
      title: 'Дата завершения проекта. Пример (Aug 9, 1995)',
      description: 'Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec',
      type: 'string',
    }),
    defineField({
      name: 'project_title',
      title: 'Название проекта',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Описание проекта',
      description: 'немного о том, что за проект или для чего его делал',
      type: 'localeArray',
    }),
    defineField({
      name: 'tags',
      title: 'Теги, наименования технологий',
      description: 'технологии которые были использованы в создании проекта',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'github_href',
      title: 'Ссылка на GitHub',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'figma_href',
      title: 'Ссылка на Figma',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'page_href',
      title: 'Ссылка на страницу проекта',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
});
