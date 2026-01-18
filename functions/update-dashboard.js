// functions/update-dashboard.js
import fetch from 'node-fetch';

export async function handler(event, context) {
  try {
    const githubToken = process.env.GITHUB_TOKEN; // ✅ Set this in Netlify environment variables
    const owner = 'Shreenivas9000';
    const repo = 'BGC';
    const path = 'dashboard.json';

    // Step 1: Get current file from GitHub
    const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github+json',
      },
    });

    if (!getRes.ok) {
      return {
        statusCode: getRes.status,
        body: JSON.stringify({ message: 'Failed to fetch dashboard', details: await getRes.text() }),
      };
    }

    const fileData = await getRes.json();
    const sha = fileData.sha;
    const content = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));

    // Step 2: Increment the news count
    content.news.total.news_count = (parseInt(content.news.total.news_count) + 1).toString();

    // Step 3: Update GitHub
    const updateRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github+json',
      },
      body: JSON.stringify({
        message: 'Increment news count via Netlify Function',
        content: Buffer.from(JSON.stringify(content)).toString('base64'),
        sha: sha,
      }),
    });

    if (!updateRes.ok) {
      return {
        statusCode: updateRes.status,
        body: JSON.stringify({ message: 'Failed to update dashboard', details: await updateRes.text() }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Dashboard updated successfully', newCount: content.news.total.news_count }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error', error: err.message }),
    };
  }
}

