export default {
  name: 'resume_interests',
  title: 'Resume Interests',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'description',
      title: 'Описание, перечень навыков',
      description: 'Описание блока или перечень разных навыков, умений, увлечений',
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
  ],
};
