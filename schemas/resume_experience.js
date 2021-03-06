export default {
  name: 'resume_experience',
  title: 'Resume Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Дата',
      description: 'Длительность обучненияб практикиб работы',
      type: 'object',
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
      ],
    },
    {
      name: 'description',
      title: 'Описание, перечень навыков',
      description:
        'Описание блока или перечень разных навыков, умений, увлечений',
      type: 'object',
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
      ],
    },
    {
      name: 'tags',
      title: 'Теги, наименования технологий',
      description: 'технологии которые были использованы в создании проекта',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'link',
      title: 'Ссылка на страницу проекта',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'order',
      title: 'Номер сортировки',
      description:
        'Номер по которому будет сортироваться, чтоб отоброжать в хронологии',
      type: 'number',
    },
  ],
};
