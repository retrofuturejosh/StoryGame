'use strict';
const db = require('./_db');
const Authors = require('./authors');
const Sections = require('./sections');
const Sessions = require('./sessions');
const Stories = require('./stories');

Sections.belongsTo(Authors, {
	through: 'section_author'
});

Sections.belongsTo(Stories);

Authors.belongsToMany(Stories, {
	through: 'author_stories'
});

Authors.belongsToMany(Sessions, {
	through: 'author_sessions'
});

Stories.belongsToMany(Sections, {
	through: 'story_sections'
});

Stories.belongsToMany(Authors, {
	through: 'story_authors'
});

Stories.belongsTo(Sessions);

Sessions.belongsToMany(Authors, {
	through: 'session_authors'
});

Sessions.belongsToMany(Stories, {
	through: 'session_stories'
});

Stories.belongsTo(Authors, {
	through: "creator_author"
});

module.exports = {
	db,
	Authors,
	Sections,
	Sessions,
	Stories
  };
