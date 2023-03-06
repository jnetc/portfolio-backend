import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
// Localization schemas
import { localeArray, localeString } from './schemas/locale';

export default defineConfig({
  title: 'Portfolio',
  projectId: '6nrq5wv7',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Landing Main').child(S.editor().id('main').schemaType('main').documentId('main')),
            ...S.documentTypeListItems().filter(listItem => !['main'].includes(listItem.getId() as string)),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [localeString, localeArray, ...schemaTypes],
  },
});
