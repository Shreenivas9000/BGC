// File: .netlify/functions/update-dashboard.js

import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    // GitHub repo details
    const owner = "Shreenivas9000";
    const repo = "BGC";
    const path = "dashboard.json";

    // GitHub token from Netlify environment variables
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "GitHub token not set in Netlify env" }),
      };
    }

    // Step 1: Get the current file SHA and content
    const getFileResp = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!getFileResp.ok) {
      const text = await getFileResp.text();
      return { statusCode: getFileResp.status, body: text };
    }

    const fileData = await getFileResp.json();
    const sha = fileData.sha;
    const content = JSON.parse(Buffer.from(fileData.content, "base64").toString("utf8"));

    // Step 2: Increment the news count (or other logic)
    content.news.total.news_count = (
      parseInt(content.news.total.news_count) + 1
    ).toString();

    // Step 3: Update the file back to GitHub
    const updateResp = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Update news count via Netlify function",
          content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
          sha: sha,
        }),
      }
    );

    if (!updateResp.ok) {
      const text = await updateResp.text();
      return { statusCode: updateResp.status, body: text };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, updatedData: content }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
