# Arctic-JS

**Documentation: [arcticjs.dev](https://arcticjs.dev)**

This is a CommonJS-compatible fork of [Arctic](https://github.com/pilcrowonpaper/arctic), a collection of OAuth 2.0 clients for popular providers. Only the authorization code flow is supported. Built on top of the Fetch API, it's light weight, fully-typed, and runtime-agnostic.

```
npm install arctic-cjs
```

```js
const arctic = require("arctic-js");

const github = new arctic.GitHub(clientId, clientSecret);

const state = arctic.generateState();
const scopes = ["user:email"];
const authorizationURL = github.createAuthorizationURL(state, scopes);

// ...

const tokens = await github.validateAuthorizationCode(code);
const accessToken = tokens.accessToken();
```

> Arctic-JS only supports providers that follow the OAuth 2.0 spec (including PKCE and token revocation).

## Differences from Original Arctic

This package is a fork of [Arctic](https://github.com/pilcrowonpaper/arctic) with the following changes:

- Built and distributed as CommonJS modules
- Compatible with Node.js environments that don't support ES modules
- Maintains the same API and functionality as the original

## Semver

Arctic-JS follows the same versioning as the original Arctic package. While we aim to only introduce breaking changes in major versions, we may introduce them in a minor update if a provider updates their API in a non-backward compatible way. However, they will never be introduced in a patch update.

## Supported providers

- 42 School
- Amazon Cognito
- AniList
- Apple
- Atlassian
- Auth0
- Authentik
- Autodesk Platform Services
- Battle.net
- Bitbucket
- Box
- Bungie
- Coinbase
- Discord
- DonationAlerts
- Dribbble
- Dropbox
- Etsy
- Epic Games
- Facebook
- Figma
- Gitea
- GitHub
- GitLab
- Google
- Intuit
- Kakao
- KeyCloak
- Kick
- Lichess
- Line
- Linear
- LinkedIn
- Mastodon
- MercadoLibre
- MercadoPago
- Microsoft Entra ID
- MyAnimeList
- Naver
- Notion
- Okta
- osu!
- Patreon
- Polar
- Reddit
- Roblox
- Salesforce
- Shikimori
- Slack
- Spotify
- Start.gg
- Strava
- Synology
- TikTok
- Tiltify
- Tumblr
- Twitch
- Twitter
- VK
- WorkOS
- Yahoo
- Yandex
- Zoom
