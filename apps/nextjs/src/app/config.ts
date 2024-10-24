import config from '@plone/registry';
import { slate } from '@plone/blocks';
import { blocksConfig } from '@plone/blocks';

const settings = {
  slate,
};

if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    settings.apiPath = 'https://nextjs.sneridagh.dev/';
  } else {
    settings.apiPath = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
} else {
  settings.apiPath = 'http://localhost:3000/';
}

// @ts-expect-error Improve typings
config.set('settings', settings);

// @ts-expect-error Improve typings
config.set('blocks', { blocksConfig });

export default config;
