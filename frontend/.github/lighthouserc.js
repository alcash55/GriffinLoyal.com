module.exports = {
  ci: {
    collect: {
      numberOfRuns: 2,
      staticDistDir: "./dist/ng-github-lighthouse-ci",
    },
    assert: {
      assertions: {
        "categories: accessability": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
