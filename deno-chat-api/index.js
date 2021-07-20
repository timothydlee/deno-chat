addEventListener('fetch', (event) => {
    const response = new Response('Hello World! Second', {
        headers: { 'content-type': 'text/plain' }
    });
    event.respondWith(response);
});
