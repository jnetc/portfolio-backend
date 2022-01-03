export default {
  name: 'skills',
  title: 'Landing Skills',
  type: 'document',
  preview: {
    select: {
      title: 'skill_name.en',
    },
  },
  fields: [
    {
      name: 'skill_id',
      title: 'Идентификатор навыка',
      type: 'string',
      required: true,
    },
    {
      name: 'skill_name',
      title: 'Навык / Умение',
      type: 'object',
      required: true,
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
      name: 'skill_desc',
      title: 'Описание навыка / технологии',
      type: 'object',
      required: true,
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'ru',
          title: 'Русский',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};
