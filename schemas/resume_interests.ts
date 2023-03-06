import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resume_interests',
  title: 'Resume Interests',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Описание, перечень навыков',
      description: 'Описание блока или перечень разных навыков, умений, увлечений',
      type: 'localeString',
    }),
  ],
});
