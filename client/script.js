async function shortenURL() {
  const url = document.getElementById('urlInput').value;

  const res = await fetch('http://localhost:5000/api/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ originalUrl: url })
  });

  const data = await res.json();
  document.getElementById('result').innerHTML = `
    <p>Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a></p>
    <button onclick="copyToClipboard('${data.shortUrl}')">Copy</button>
  `;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}
