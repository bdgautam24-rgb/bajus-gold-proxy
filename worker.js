export default {
  async fetch(request) {
    const target = 'https://www.bajus.org/gold-price';
    
    // Request BD-only page
    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/html',
        'Referer': 'https://www.bajus.org/'
      }
    });
    
    const html = await response.text();
    
    // Simple regex to extract gold price div (adjust selector as needed)
    const match = html.match(/<div class="gold-price">([\s\S]*?)<\/div>/i);
    const price = match ? match[1] : 'Price not found';
    
    return new Response(price, {
      headers: { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' }
    });
  }
};
