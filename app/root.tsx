import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<ViteScripts />
				<Scripts />
			</body>
		</html>
	);
}

const ViteScripts =
	process.env.NODE_ENV !== 'development'
		? () => null
		: () => {
				return (
					<>
						<script type='module' src='/@vite/client' />
						<script
							type='module'
							dangerouslySetInnerHTML={{
								__html: `import RefreshRuntime from '/@react-refresh'
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true`,
							}}
						/>
					</>
				);
		  };
