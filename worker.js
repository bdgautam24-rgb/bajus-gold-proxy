export default {
  async fetch(request) {

    const target = 'https://www.bajus.org/gold-price';

    const response = await fetch(target, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        // Strong browser-like headers
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Accept':
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.bajus.org/',
        'Connection': 'keep-alive'
      }
    });

    // Header clone
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(response.body, {
      status: response.status,
      headers
    });
  }
};
