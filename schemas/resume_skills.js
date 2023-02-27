export default {
  name: 'resume_skills',
  title: 'Resume Skills',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Категория',
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
        {
          name: 'fi',
          title: 'Suomi',
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      title: 'Описание, перечень навыков',
      description: 'Описание блока или перечень разных навыков, умений, увлечений',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Номер сортировки',
      description: 'Номер по которому будет сортироваться, чтоб отоброжать в хронологии',
      type: 'number',
    },
  ],
};
