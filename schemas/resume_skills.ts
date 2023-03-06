import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resume_skills',
  title: 'Resume Skills',
  type: 'document',
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Категория',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Описание, перечень навыков',
      description: 'Описание блока или перечень разных навыков, умений, увлечений',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Номер сортировки',
      description: 'Номер по которому будет сортироваться, чтоб отоброжать в хронологии',
      type: 'number',
    }),
  ],
});
