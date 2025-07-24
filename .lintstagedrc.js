module.exports = {
  // Documentation and config files
  '**/*.{md,json,yml,yaml}': ['bunx prettier --write'],

  // JavaScript/TypeScript files (when they exist)
  '**/*.{js,ts}': ['bunx prettier --write'],
};
