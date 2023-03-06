import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'education',
  title: 'Landing Education',
  type: 'document',
  preview: {
    select: {
      title: 'course_name',
    },
  },
  fields: [
    defineField({
      name: 'course_completed',
      title: 'Дата завершения проекта. Пример (Aug 9, 1995)',
      description: 'Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec',
      type: 'string',
    }),
    defineField({
      name: 'course_image',
      title: 'Картинка курса',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'course_name',
      title: 'Название курса',
      type: 'string',
    }),
    defineField({
      name: 'course_desc',
      title: 'Описание курса, чуть ниже заголовка на udemy.com',
      type: 'string',
    }),
    defineField({
      name: 'course_href',
      title: 'Ссылка на сам курс',
      type: 'string',
    }),
    defineField({
      name: 'certificate_href',
      title: 'Ссылка на сайт или сертификат',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
});
