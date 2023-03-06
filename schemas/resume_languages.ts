import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resume_languages',
  title: 'Resume Languages',
  type: 'document',
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Язык',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Знание языка',
      description: 'Описание блока или перечень разных навыков, умений, увлечений',
      type: 'localeString',
    }),
    defineField({
      name: 'order',
      title: 'Номер сортировки',
      description: 'Номер по которому будет сортироваться, чтоб отоброжать в хронологии',
      type: 'number',
    }),
  ],
});
