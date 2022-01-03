// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import main from './main';
import projects from './projects';
import skills from './skills';
import education from './education';
import resume_profile from './resume_profile';
import resume_education from './resume_education';
import resume_experience from './resume_experience';
import resume_interests from './resume_interests';
import resume_languages from './resume_languages';
import resume_skills from './resume_skills';
import resume_notice from './resume_notice';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    main,
    projects,
    skills,
    education,
    resume_profile,
    resume_experience,
    resume_education,
    resume_skills,
    resume_languages,
    resume_interests,
    resume_notice,
  ]),
});
