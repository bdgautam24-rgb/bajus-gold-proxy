export default {
  async fetch(request) {
    const target = 'https://www.bajus.org/gold-price';

    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'text/html',
        'Referer': 'https://www.bajus.org/'
      }
    });

    // Clone response headers & remove security headers
    const headers = new Headers(response.headers);
    headers.delete('Content-Security-Policy');
    headers.delete('X-Frame-Options');
    headers.delete('Strict-Transport-Security');
    headers.set('Access-Control-Allow-Origin', '*');

    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers
    });
  }
};
