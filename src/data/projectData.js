// web projects first then mobile
export const projectData = [
  {
    header: 'Sante Indonesia',
    url: { web: 'https://indo.mysante.com/', mobile: null },
    thumb: '/images/sante-indo.png',
    description:
      'This is Sante International business website for Indonesia using a headless CMS (Strapi) for creating and managing content.',
    sourceCode: 'https://github.com/geloski43/sante-main',
    platform: 'web',
    offset: 1,
    factor: 1.75,
    aspect: 1.51,
  },
  {
    header: 'Sante Engage',
    url: { web: 'https://rengage.santebarley.com/', mobile: null },
    thumb: '/images/engage.png',
    description:
      'A membership website for registered distributors for Sante Barley. Being engage as the domains name, it contains necessary resources for new members to enhance skills for them to thrive as a new distributor, monitor sales order etc., customize profile, and ultimately be updated and connected with fellow distributors through live sessions about  developing more skills to climb up the distributors’ ranking.',
    sourceCode: 'https://github.com/geloski43/sante-engage',
    platform: 'web',
    offset: 2,
    factor: 2.0,
    aspect: 1.5,
  },
  {
    header: 'My Sante',
    url: { web: 'https://atonz.thebigleagueteam.com/', mobile: null },
    thumb: '/images/mysante.png',
    description:
      'This website is where guest shoppers go to acquire products from Sante Barley. You can either search by name, id number, or distributors location to buy Sante Barley products which you can choose to be delivered at your provided shipping address. If you want to have an additional income and is curious about how you can be a distributor, you can also inquire on how to become a business owner or directly apply as one.',
    sourceCode: 'https://github.com/geloski43/mysante',
    platform: 'web',
    offset: 3,
    factor: 2.25,
    aspect: 1.5037,
  },

  {
    header: 'Guess Quiz2.0',
    url: { web: 'https://guess-quiz2-0.vercel.app/', mobile: null },
    thumb: '/images/guess-quiz2.png',
    description:
      'The second version of the guess game from my early projects built mainly using chakra ui. I also added contextualwebsearch,an image search api to be used as image hint base on the question from open trivia api. Overall an improvement in user experience although I would prefer a faster image search api like serpapi. I deliberately created a new repo instead of re-writing the first version so I can always go back and see what else needs improvement.',
    sourceCode: 'https://github.com/geloski43/guess-quiz2.0',
    platform: 'web',
    offset: 4,
    factor: 1.75,
    aspect: 1.55,
  },

  {
    header: "Atara's Learning Corner",
    url: { web: 'https://atara-s-learning-corner.vercel.app', mobile: null },
    thumb: '/images/tarasLC.png',
    description:
      'An Online Learning Module using demo version of PDFTron as PDF file viewer and more.',
    sourceCode: 'https://github.com/geloski43/Atara-s-Learning-Corner-',
    platform: 'web',
    offset: 5,
    factor: 1.75,
    aspect: 1.51,
  },
  {
    header: 'Boom or Bust',
    url: { web: 'https://boom-or-bust-nba-edition.vercel.app/', mobile: null },
    thumb: '/images/bbwebapp.png',
    description:
      "A sports card like presentation of NBA players using Ball Don't Lie api which you can compare two players base on their stats.",
    sourceCode: 'https://github.com/geloski43/Boom-or-Bust-Nba-Edition',
    platform: 'web',
    offset: 6,
    factor: 2.0,
    aspect: 1.5,
  },
  {
    header: 'Guess Quiz',
    url: { web: 'https://guess-quiz-game.vercel.app/', mobile: null },
    thumb: '/images/guess-quiz.png',
    description:
      'A word game using Open trivia Database api with a node JS server to save scores.',
    sourceCode: 'https://github.com/geloski43/guess-quiz-game',
    platform: 'web',
    offset: 7,
    factor: 2.25,
    aspect: 1.5037,
  },

  // mobile apps here. reset offset, factor, and aspect as first
  // beyond this list shoud start with 1 offset and so on..
  {
    header: 'Tenbits Music',
    url: {
      web: 'https://tenbits-client-geloski43.vercel.app/',
      mobile: 'https://expo.dev/@geloski43/ten-bits-music',
    },
    thumb: '/images/tenbits.png',
    description:
      'A MERN stack music streaming app that allows users to search for songs, save and play them as a playlist to share with other users. Built with React Native, Expo, Mongo DB, and itunes API. To run this app in browser, click the browser icon or click the smartphone icon and download Expo Go app from appstore or playstore and scan the qr code from the website.',
    sourceCode: 'https://github.com/geloski43/Tenbits-client',
    platform: 'mobile',
    offset: 1,
    factor: 2.0,
    aspect: 0.665,
  },
  {
    header: 'Boom-or-Bust App',
    url: {
      mobile: 'https://expo.dev/@geloski43/boom-or-bust-app',
      web: 'https://boom-or-bust-app-geloski43.vercel.app/',
    },
    thumb: '/images/bbapp.png',
    description:
      "Mobile version of boom or bust web app that has improved user experience and functionality using the same Ball Don't Lie api. Get old and current nba players stats, be it playoffs or regular season and try to compare two players side by side stats for a single season. To run this app in browser, click the browser icon or click the smartphone icon and download Expo Go app from appstore or playstore and scan the qr code from the website.",
    sourceCode: 'https://github.com/geloski43/boom-or-bust-app',
    platform: 'mobile',
    offset: 2,
    factor: 2.0,
    aspect: 0.665,
  },
];
