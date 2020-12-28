module.exports = {
  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'WildanFauzy.com', // Navigation and site title
  titleAlt: 'WildanFauzy.com', // Title for schema.org JSONLD
  // eslint-disable-next-line prettier/prettier
  description: 'WildanFauzy.com adalah blog yang membahas info menarik disajikan secara asik dan santai, kumpulan cerita dari sudut pandang yang berbeda, tulisan apa adanya.',
  url: 'https://wildanfauzy.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  image: {
    // Used for SEO, relative to /static/ folder
    src: '/images/theme/alok-logo.png',
    width: 512,
    height: 512,
  },
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-85177250-1',

  // Indie web
  pingbackUrl: 'https://webmention.io/wildanfauzy.com/xmlrpc',
  webmentionUrl: 'https://webmention.io/wildanfauzy.com/webmention',
  micropubUrl: 'https://mm-micropub-to-github.herokuapp.com/micropub/main',
  staticmanApi: 'https://api.staticman.net/v2/connect/wilfauzy/curly-lamp/master/comments',

  // JSONLD / Manifest
  favicon: '/images/theme/alok-logo.png', // Used for manifest favicon generation
  shortName: 'WildanFauzy.com', // shortname for manifest. MUST be shorter than 12 characters
  author: {
    // Author for schema.org JSONLD
    name: 'Redaksi',
    url: 'https://wildanfauzy.com',
  },
  themeColor: '#ffffff',
  backgroundColor: '#111111',

  twitter: '@wilfauzy', // Twitter username
  twitterUrl: 'https://twitter.com/wilfauzy',
  facebook: 'Wildan Fauzy', // Facebook site name
  linkedinUrl: 'https://wildanfauzy.com/#',
  githubUrl: 'https://github.com/wilfauzy',
  instagramUrl: 'https://www.instagram.com/wilfauzy',
  feedUrl: '/atom.xml',
  githubApiToken: process.env.GITHUB_API_TOKEN,
  /* githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 5,
  },
  */
  reCaptcha: {
    siteKey: '',
    secret: '',
  },
}
