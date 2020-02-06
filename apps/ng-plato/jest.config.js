module.exports = {
  name: 'ng-plato',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-plato',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
