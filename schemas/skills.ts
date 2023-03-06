import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skills',
  title: 'Landing Skills',
  type: 'document',
  preview: {
    select: {
      title: 'skill_name.en',
    },
  },
  fields: [
    defineField({
      name: 'skill_id',
      title: 'Идентификатор навыка',
      type: 'string',
    }),
    defineField({
      name: 'skill_name',
      title: 'Навык / Умение',
      type: 'localeString',
    }),
    defineField({
      name: 'skill_desc',
      title: 'Описание навыка / технологии',
      type: 'localeArray',
    }),
  ],
});
