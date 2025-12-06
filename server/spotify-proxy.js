import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
  console.warn('SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET not set. Proxy will not work until they are provided.');
}

let token = null;
let tokenExpires = 0;

async function getToken() {
  const now = Date.now();
  if (token && now < tokenExpires) return token;
  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });
  if (!resp.ok) throw new Error('Failed to get token');
  const data = await resp.json();
  token = data.access_token;
  tokenExpires = now + (data.expires_in - 60) * 1000;
  return token;
}

app.get('/search', async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'q required' });
    const t = await getToken();
    const s = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=track&limit=1`, {
      headers: { Authorization: `Bearer ${t}` }
    });
    if (!s.ok) return res.status(500).json({ error: 'spotify search failed' });
    const js = await s.json();
    const item = js.tracks.items[0];
    if (!item) return res.json({});
    const out = {
      name: item.name,
      artist: item.artists.map((a) => a.name).join(', '),
      preview_url: item.preview_url,
      image: item.album && item.album.images && item.album.images[0] ? item.album.images[0].url : null,
      spotify_url: item.external_urls.spotify
    };
    res.json(out);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String(e) });
  }
});

app.listen(PORT, () => console.log(`Spotify proxy running on http://localhost:${PORT}`));
