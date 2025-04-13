// deploy.js
const ghpages = require('gh-pages');

ghpages.publish(
  'build',
  {
    dotfiles: true,
    branch: 'gh-pages',
    repo: 'https://github.com/davidyim03/davidyim03.github.io.git',
  },
  (err) => {
    if (err) {
      console.error('🚨 Deployment failed:', err);
    } else {
      console.log('✅ Deployment successful!');
    }
  }
);
