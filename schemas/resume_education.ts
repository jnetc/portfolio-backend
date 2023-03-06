import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resume_education',
  title: 'Resume Education',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Дата',
      description: 'Длительность обучненияб практикиб работы',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Описание, перечень навыков',
      description: 'Описание блока или перечень разных навыков, умений, увлечений',
      type: 'localeString',
    }),
    defineField({
      name: 'link',
      title: 'Ссылка на страницу проекта',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'order',
      title: 'Номер сортировки',
      description: 'Номер по которому будет сортироваться, чтоб отоброжать в хронологии',
      type: 'number',
    }),
  ],
});
