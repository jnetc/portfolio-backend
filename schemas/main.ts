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
      type: 'localeString',
    }),
    defineField({
      name: 'slogan',
      title: 'Слоган',
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
