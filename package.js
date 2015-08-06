Package.describe({
  name: 'gaelan:blaze-in-react',
  version: '0.0.1',
  summary: 'Easily reference Blaze templates from React.',
  git: 'https://github.com/Gaelan/Meteor-BlazeInReact.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating')
  api.use('react-runtime')
  api.addFiles('BlazeInReact.js');
});
