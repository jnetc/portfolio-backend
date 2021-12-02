export default {
  name: 'main',
  title: 'Main',
  type: 'document',
  preview: {
    select: {
      title: 'title.ru',
    },
  },
  fields: [
    // {
    //   name: 'navigation',
    //   title: 'Навигация по сайту',
    //   type: 'object',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'array',
    //       required: true,
    //       of: [{ type: 'string' }],
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'array',
    //       required: true,
    //       of: [{ type: 'string' }],
    //     },
    //   ],
    // },
    {
      name: 'meta_title',
      title: 'МЕТА title - оглавление',
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
      name: 'meta_desc',
      title: 'МЕТА description - описание',
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
      name: 'title',
      title: 'Заголовок сайта',
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
      name: 'slogan',
      title: 'Слоган',
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
    // {
    //   name: 'action_btn',
    //   title: 'Активная кнопка ',
    //   type: 'object',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },
    // {
    //   name: 'second_btn',
    //   title: 'Второстепенная кнопка',
    //   type: 'object',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },
    // PORTFOLIO TITLES
    // {
    //   name: 'portfolio_title',
    //   title: 'Заголовок на портфолио',
    //   description: 'Заголовок блока на которую ссылкается ссылка',
    //   type: 'object',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },

    // {
    //   name: 'prev_project_title',
    //   title: 'Заголовок предыдущих проектов',
    //   description: 'заголовок разделяющий недавние проекты от остальных',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },
    // {
    //   name: 'prev_project_desc',
    //   title: 'Описание проекта',
    //   description: 'дополнительная информация если требуется',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },
    // SKILLS TITLE
    // {
    //   name: 'skills_title',
    //   title: 'Заголовок на навыки',
    //   description: 'Заголовок блока на которую ссылкается ссылка',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //       required: true,
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //       required: true,
    //     },
    //   ],
    // },
    // ABOUT CONTENT
    // {
    //   name: 'about_title',
    //   title: 'Заголовок обо мне',
    //   description: 'Заголовок блока на которую ссылкается ссылка',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //       required: true,
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //       required: true,
    //     },
    //   ],
    // },
    {
      name: 'story',
      title: 'Моя история',
      description:
        'Краткое изложение своей истории о том как я стал программистом',
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
    // {
    //   name: 'education_title',
    //   title: 'Заголовок об образования',
    //   description:
    //     'заголовок разделяющий недавние мою история и ссылки на сертификацию',
    //   type: 'object',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },
    // {
    //   name: 'education_desc',
    //   title: 'Доп. об образовании',
    //   description: 'дополнительная информация если требуется',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'en',
    //       title: 'English',
    //       type: 'string',
    //     },
    //     {
    //       name: 'ru',
    //       title: 'Русский',
    //       type: 'string',
    //     },
    //   ],
    // },
    {
      name: 'github_href',
      title: 'Ссылка на GitHub',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
    // {
    //   name: 'stackOverflow_href',
    //   title: 'Ссылка на StackOverflow',
    //   type: 'url',
    //   validation: Rule =>
    //     Rule.uri({
    //       scheme: ['https'],
    //     }),
    // },
    {
      name: 'linkedin_href',
      title: 'Ссылка на LinkedIn',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
};
