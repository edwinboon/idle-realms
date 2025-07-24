module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Code style changes
        'refactor', // Refactoring
        'test', // Tests
        'chore', // Maintenance
        'perf', // Performance improvements
        'ci', // CI/CD changes
        'build', // Build system changes
        'revert', // Revert changes
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'frontend',
        'backend',
        'docker',
        'docs',
        'scripts',
        'ci',
        'deps',
        'config',
      ],
    ],
  },
};
