# Oracle Fixtures

I added a few fixed responses so I can test the resolution-related logic
without depending on an external API every time.

The fixtures include:

- a normal response
- a lower value
- an empty response
- a server error
- malformed response data

This is useful for me because I can reproduce the same case repeatedly.

If an external API changes its response, a test based directly on that API
can become difficult to reproduce.
