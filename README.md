# remix-vite-test

This is an example of running [`remix-vite`](https://github.com/sudomf/remix-vite) for HMR. It has 3 notable parts for making it work on windows (see [issue](https://github.com/sudomf/remix-vite/issues/6)):

1. In package.json, the `dev` script manually sets `NODE_ENV=development` using `cross-env` before running `remix-vite`.
2. In root.tsx, a new component called `ViteScripts` is added to replace the remix-provided LiveReload.
3. In patches/, `remix-vite` is patch-packaged to convert backslashes to forward slashes.

## Commands

Start the dev server using remix-vite:

```
npm run dev
```

Run prod build:

```
npm run build
```
