# Fetching Data on the Static Server

- [Fetching data on the server documentation](https://beta.nextjs.org/docs/data-fetching/fundamentals#fetching-data-on-the-server)
- [Fetching static data](https://beta.nextjs.org/docs/data-fetching/fundamentals#static-and-dynamic-data-fetches)
- [Static data fetching](https://beta.nextjs.org/docs/data-fetching/fetching#static-data-fetching)
- [What you have learned about data fetching](https://dev.to/zenstack/a-deep-dive-into-next13-data-fetching-114n)
- [Next.js 13 Data fetching ALL IN ONE video](https://www.youtube.com/watch?v=JeaHyhcCVCE)

## Notes

- Note that all components by default are Server Components. Server Components always fetch data on the server.
- By default, Next.js automatically does static fetches in Server Components. This means that the data will be fetched at build time, cached, and reused on each request.
- Note that when you refresh/reload the page again and again it always shows the same quotation.
- Next.js extends the native Web fetch() API to support caching.
  - fetch(`https://...`, { cache: 'force-cache' });
  - fetch(`https://...`, { cache: 'no-store' });
  - fetch(`https://...`, { next: { revalidate: false | 0 | number } } );
  - The default behavior is fetch(https://..., { cache: 'force-cache' }).
