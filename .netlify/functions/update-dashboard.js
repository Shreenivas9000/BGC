// update-dashboard.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Read JSON payload from POST
  const body = JSON.parse(event.body);

  const field = body.field;       // e.g. news.total.news_count
  const increment = parseInt(body.increment || 1);

  // Update GitHub dashboard.json using GITHUB_TOKEN
  const token = process.env.GITHUB_TOKEN;
  const owner = 'Shreenivas9000';
  const repo = 'BGC';
  const path = 'dashboard.json';

  // Step 1: Get current file SHA
  const getFile = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github+json' }
  });
  const fileData = await getFile.json();
  const sha = fileData.sha;

  // Step 2: Update the count in JSON
  const dashboard = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));
  const keys = field.split('.');
  let ref = dashboard;
  for (let i = 0; i < keys.length - 1; i++) ref = ref[keys[i]];
  ref[keys[keys.length - 1]] = (parseInt(ref[keys[keys.length - 1]]) + increment).toString();

  // Step 3: PUT update to GitHub
  const updateResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github+json' },
    body: JSON.stringify({
      message: `Increment ${field} via Netlify function`,
      content: Buffer.from(JSON.stringify(dashboard)).toString('base64'),
      sha: sha
    })
  });

  const updated = await updateResp.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ newCount: ref[keys[keys.length - 1]] })
  };
};
