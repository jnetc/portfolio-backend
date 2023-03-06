import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
// import schemas from './schemas/schema';
import { schemaTypes } from './schemas';

const supportedLanguages = [
  { id: 'ru', title: 'Русский', isDefault: true },
  { id: 'en', title: 'English' },
  { id: 'fi', title: 'Suomi' },
];

export const baseLanguage = supportedLanguages.find(l => l.isDefault);

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};

const localeArray = {
  title: 'Localized array',
  name: 'localeArray',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{ type: 'block' }],
    fieldset: lang.isDefault ? null : 'translations',
  })),
};

export default defineConfig({
  title: 'Portfolio',
  projectId: '6nrq5wv7',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [localeString, localeArray, ...schemaTypes],
  },
});
