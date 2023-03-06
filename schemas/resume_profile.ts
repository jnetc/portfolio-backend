import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resume_profile',
  title: 'Resume Profile',
  type: 'document',
  preview: {
    select: {
      title: 'name.ru',
    },
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'localeString',
    }),
    defineField({
      name: 'professional',
      title: 'Специализация',
      type: 'localeString',
    }),
    defineField({
      name: 'summary',
      title: 'Кратко обо мне',
      type: 'localeArray',
    }),
    defineField({
      name: 'location',
      title: 'Место нахождения',
      type: 'localeString',
    }),
    defineField({
      name: 'github_href',
      title: 'ссылка на github профиль',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'stackoverflow_href',
      title: 'ссылка на stackoverflow профиль',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
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
  ],
});
