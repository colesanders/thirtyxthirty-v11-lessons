module.exports = {
  name: 'lessons',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lessons',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
