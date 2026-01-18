const fetch = require('node-fetch');
const { Buffer } = require('buffer');

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const field = body.field; // e.g., "news.total.news_count"
    const increment = parseInt(body.increment);

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const owner = 'Shreenivas9000';
    const repo = 'BGC';
    const path = 'dashboard.json';

    // Get current file SHA and content
    const fileResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    });
    const fileData = await fileResp.json();
    const sha = fileData.sha;
    const content = JSON.parse(Buffer.from(fileData.content, 'base64').toString());

    // Update the field
    const keys = field.split('.');
    let obj = content;
    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = (parseInt(obj[keys[keys.length - 1]]) + increment).toString();

    // Push updated file to GitHub
    const updateResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({
        message: 'Update dashboard.json via Netlify',
        content: Buffer.from(JSON.stringify(content)).toString('base64'),
        sha: sha,
      }),
    });
    if (!updateResp.ok) {
      return { statusCode: 500, body: JSON.stringify(await updateResp.json()) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ newCount: obj[keys[keys.length - 1]] }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify(err.message) };
  }
};
