import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'main',
  title: 'Landing Main',
  type: 'document',
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    defineField({
      name: 'github_href',
      title: 'ссылка на github профиль',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'stackoverflow_href',
      title: 'ссылка на stackoverflow профиль',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'linkedin_href',
      title: 'Ссылка на LinkedIn',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'email',
      title: 'электронная почта',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    }),
    defineField({
      name: 'meta_title',
      title: 'МЕТА title - оглавление',
      type: 'localeString',
    }),
    defineField({
      name: 'meta_desc',
      title: 'МЕТА description - описание',
      type: 'localeString',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок сайта',
      type: 'localeArray',
    }),
    defineField({
      name: 'extra',
      title: 'Дополнительно под заголовок',
      type: 'localeArray',
    }),
    defineField({
      name: 'story',
      title: 'Моя история',
      description: 'Краткое изложение своей истории о том как я стал программистом',
      type: 'localeArray',
    }),
  ],
});
