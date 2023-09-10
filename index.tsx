const server = Bun.serve({
  port: 3030,
  fetch(request) {
    return new Response("Welcome to Bun now!");
  },
});

console.log(`Listening on localhost:${server.port}`);