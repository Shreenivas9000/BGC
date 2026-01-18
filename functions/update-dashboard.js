import fetch from "node-fetch";

export async function handler(event, context) {
  const token = process.env.GITHUB_TOKEN; // GitHub token stored in Netlify env
  const owner = "Shreenivas9000";
  const repo = "BGC";
  const path = "dashboard.json";

  try {
    // Step 1: Get the current dashboard file and SHA
    const getResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: { Authorization: `token ${token}`, Accept: "application/vnd.github+json" },
    });
    const fileData = await getResp.json();
    const sha = fileData.sha;
    const content = JSON.parse(Buffer.from(fileData.content, "base64").toString());

    // Step 2: Update the JSON (increment news_count)
    content.news.total.news_count = (parseInt(content.news.total.news_count) + 1).toString();

    // Step 3: Push updated file back to GitHub
    const updateResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: "PUT",
      headers: { Authorization: `token ${token}`, Accept: "application/vnd.github+json" },
      body: JSON.stringify({
        message: "Update news count via Netlify function",
        content: Buffer.from(JSON.stringify(content)).toString("base64"),
        sha,
      }),
    });

    const result = await updateResp.json();
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
