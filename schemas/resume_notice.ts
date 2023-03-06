import { defineField, defineType } from 'sanity';

export default defineType({
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
    defineField({
      name: 'active',
      title: 'Включить / отключить информацию',
      type: 'boolean',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок уведомления',
      type: 'localeString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Дополнительно для заголовка',
      type: 'localeString',
    }),
    defineField({
      name: 'info',
      title: 'Информация',
      type: 'localeArray',
    }),
    defineField({
      name: 'button_name',
      title: 'Наименование кнопки',
      type: 'localeString',
    }),
    defineField({
      name: 'external_href',
      title: 'Внешняя ссылка',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https', 'http'],
        }),
    }),
  ],
});
