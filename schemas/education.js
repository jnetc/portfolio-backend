export default {
  name: 'education',
  title: 'Landing Education',
  type: 'document',
  preview: {
    select: {
      title: 'course_name',
    },
  },
  fields: [
    {
      name: 'course_completed',
      title: 'Дата завершения проекта. Пример (Aug 9, 1995)',
      description:
        'Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec',
      type: 'string',
    },
    {
      name: 'course_image',
      title: 'Картинка курса',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'course_name',
      title: 'Название курса',
      type: 'string',
      required: true,
    },
    {
      name: 'course_desc',
      title: 'Описание курса, чуть ниже заголовка на udemy.com',
      type: 'string',
      required: true,
    },
    {
      name: 'course_href',
      title: 'Ссылка на сам курс',
      type: 'string',
      required: true,
    },
    {
      name: 'certificate_href',
      title: 'Ссылка на сайт или сертификат',
      type: 'url',
      required: true,
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
};
