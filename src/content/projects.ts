import {
  cibLess,
  cibBootstrap,
  cibJquery,
  cibJavascript,
  cibHtml5Shield,
  cibCss3Shiled,
  cibSassAlt,
  cibSap,
  cibGrunt,
  cibGulp,
  cibFigma,
  cibBabel,
  cibEslint,
  cibGit,
  cibStorybook,
  cibTypescript,
  cibVueJs,
  cilCode,
  cibNuxtJs,
  cibWebpack,
  cibSubversion,
  cibMysql,
  cilX,
  cibLinkedin,
  cibJest,
  cibAngular,
  cibAdobePhotoshop
} from '@coreui/icons'

const icons = {
  cibLess,
  cibBootstrap,
  cibJquery,
  cibJavascript,
  cibHtml5Shield,
  cibCss3Shiled,
  cibSassAlt,
  cibSap,
  cibGrunt,
  cibGulp,
  cibFigma,
  cibBabel,
  cibEslint,
  cibGit,
  cibStorybook,
  cibTypescript,
  cibVueJs,
  cilCode,
  cibNuxtJs,
  cibWebpack,
  cibSubversion,
  cibMysql,
  cilX,
  cibLinkedin,
  cibJest,
  cibAngular,
  cibAdobePhotoshop
}

export const projects = [
  {
    display: true,
    id: 1,
    brand: 'Fiskars and Gerber',
    type: 'Composable Commerce',
    image: {
      src: 'fiskars.svg',
      alt: 'Fiskars logo'
    },
    yearStart: '2023',
    yearEnd: '2024',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'Typescript', icon: icons.cibTypescript },
      { name: 'SCSS/CSS', icon: icons.cibCss3Shiled },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Figma', icon: icons.cibFigma },
      { name: 'Storybook', icon: icons.cibStorybook },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Nuxt JS', icon: icons.cibNuxtJs }
    ],
    // screenshots: [],
    details: [
      {
        paragraph:
          "Working with the client's in house development team and designers, we collaborated to build new atoms, molecules and organisms for storybook following Figma design files."
      },
      {
        paragraph:
          'My work also comprised of working with backend developers to assist with integration, using a combination of Nuxt JS, Typescript and SCSS. The use of design tokens have been used to give the design team the ability to make design changes without any development worked required moving forward. For site structure Tailwind was used.'
      },
      {
        paragraph:
          'This was my first project gaining experience with Nuxt and Typescript as well as libraries such as Radix and Vue I18n Plugin and testing with Vitest.'
      },
      {
        paragraph: 'Project is due to go live end of 2024.'
      }
    ]
  },
  {
    display: true,
    id: 2,
    brand: 'Viking Direct',
    type: 'SAP Hybris / Commerce Cloud',
    image: {
      src: 'viking_direct_2011.svg',
      alt: 'Viking logo'
    },
    yearStart: '2022',
    yearEnd: '2023',
    techstack: [
      { name: 'HTML', icon: icons.cibCss3Shiled },
      { name: 'Gulp', icon: icons.cibGulp },
      { name: 'Javascript', icon: icons.cibJavascript },
      { name: 'Jest', icon: icons.cibJest },
      { name: 'SASS', icon: icons.cibSassAlt },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Figma', icon: icons.cibFigma },
      { name: 'Storybook', icon: icons.cibStorybook },
      { name: 'Git', icon: icons.cibGit },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    // screenshots: [],
    details: [
      {
        paragraph:
          'Working on site and remotely for the client on new features such as product bundles and updates to existing features such as implementing new dynamic energy labels to conform to the new EU Energy Label rules from 2021.'
      },
      {
        paragraph:
          'Also there was a close working relationship with the Business Analyst, Product Owner, and backend development team to help achieve the goals.'
      },
      {
        paragraph:
          'This was my first opportunity to create Javascript tests on a project, in this case using Jest.'
      }
    ]
  },
  {
    display: true,
    id: 3,
    brand: 'Magic Madhouse',
    type: 'BigCommerce',
    image: {
      src: 'magic-madhouse.png',
      alt: 'Magic Madhouse logo'
    },
    yearStart: '2021',
    yearEnd: '2024',
    techstack: [
      { name: 'HTML', icon: icons.cibCss3Shiled },
      { name: 'Webpack', icon: icons.cibWebpack },
      { name: 'Javascript', icon: icons.cibJavascript },
      { name: 'SASS', icon: icons.cibSassAlt },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit }
    ],
    details: [
      {
        paragraph:
          'Magic Madhouse was my first Big Commerce project where I was fully assigned to develop the front end from start to finish.'
      },
      {
        paragraph:
          'I worked closely with the designer before any development began, then implemented the design to the store template.'
      },
      {
        paragraph: 'Big Commerce build included configuring apps such as Klevu and Trustpilot.'
      },
      {
        paragraph:
          'Since the the launch in late 2021 some improvements for accessbility and on going maintainence have been carried out.'
      }
    ]
  },
  {
    display: true,
    id: 4,
    brand: 'Raja Workplace',
    type: 'BigCommerce',
    image: {
      src: 'raja.svg',
      alt: 'Raja Workplace logo'
    },
    yearStart: '2019',
    yearEnd: '2021',
    techstack: [
      { name: 'HTML', icon: icons.cibCss3Shiled },
      { name: 'Webpack', icon: icons.cibWebpack },
      { name: 'Javascript', icon: icons.cibJavascript },
      { name: 'SASS', icon: icons.cibSassAlt },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit }
    ],
    details: [
      {
        paragraph:
          'The first Big Commerce project I was worked on, this was a good challenge learning and using a new platform and using mostly Javascript ES6.'
      },
      {
        paragraph: 'After go live I handled client change requests and general maintenance.'
      }
    ]
  },
  {
    display: true,
    id: 5,
    brand: 'Euronics',
    type: 'SAP Hybris / Commerce Cloud',
    image: {
      src: 'euronics.svg',
      alt: 'Euronics logo'
    },
    yearStart: '2019',
    yearEnd: '2022',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'CSS', icon: icons.cibCss3Shiled },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    // screenshots: [
    //   { src: 'Euronics-screen.webp', alt: 'Euronics home page screenshot' },
    //   { src: 'Euronics-screen.webp', alt: 'Euronics home page screenshot' },
    //   { src: 'Euronics-screen.webp', alt: 'Euronics home page screenshot' }
    // ],
    details: [
      {
        paragraph:
          'My time on this project involved of working with the backend developer to create the product compare functionality.'
      },
      {
        paragraph:
          'This involved GET and POST of the api from the backend endpoint, then populating the product data into an HTML template to compare up to 4 products to be displayed in a modal overlay, also a fixed position compare bar provided the ability to add and remove products at the bottom of the page view.'
      },
      {
        paragraph:
          'Over the 3 years Euronics also required general change requests to be implemented.'
      }
    ]
  },
  {
    display: true,
    id: 6,
    brand: 'Milk & More',
    type: 'SAP Hybris / Commerce Cloud',
    image: {
      src: 'milk-more.webp',
      alt: 'Milk & More logo'
    },
    yearStart: '2019',
    yearEnd: '2023',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'CSS', icon: icons.cibCss3Shiled },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'During my time working with Milk & More I assisted in building a new section to provide site visitors with a range of recipes.'
      },
      {
        paragraph:
          'Page templates were built to hold content for each recipe, a recipe listing page was also built.'
      },
      {
        paragraph:
          'This project introduced me to Cloudinary which was used images across the site to serve appropiate images, such as quality, size, cropping, etc configurations.'
      },
      {
        paragraph:
          'I contributed to the calendar feature which was built for customers who accessed their accounts to view and select various delivery dates.'
      }
    ]
  },
  {
    display: true,
    id: 7,
    brand: 'Primark',
    type: 'SAP Hybris',
    image: {
      src: 'primark.svg',
      alt: 'Primark logo'
    },
    yearStart: '2019',
    yearEnd: '2022',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'Working on the Primark project allowed me to work very close with the designer to implement the visually rich designs to showcase the fashion ranges.'
      },
      {
        paragraph:
          'An area that required some enhancements was the site accessbility. Improvements were deployed over a few sprints, checking each area of improvement that I focued on was improving the accessbility score from reports ran in Popetech.'
      },
      {
        paragraph:
          'A new feature was built for a size guide to slide in on the product detail pages allowing the user to see a table of sizings for the clothing item.'
      },
      {
        paragraph:
          'Primark requested the ability to control the appearance on components from their large library that resided within their blogs. They wished to have access to various configurations, including buttons, links, font styles. These options were based on the combinations provided by the designer. Configuration options were then made available to Primark in the Amplience Content Platform.'
      }
    ]
  },
  {
    display: true,
    id: 8,
    brand: 'MedicAnimal',
    type: 'SAP Hybris',
    image: {
      src: 'MedicAnimal_logo.png',
      alt: 'Medic Animal logo'
    },
    yearStart: '2019',
    yearEnd: '2019',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'Javascript', icon: icons.cibJavascript },
      { name: 'CSS', icon: icons.cibCss3Shiled },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'During a short spell on MedicAnimal I worked on various bug fixes. Team meetings were in progress on new feature developments until the project was cancelled.'
      }
    ]
  },
  {
    display: false,
    id: 9,
    brand: 'Spar',
    type: 'SAP Hybris',
    image: {
      src: 'Spar-logo.png',
      alt: 'Spar logo'
    },
    yearStart: '2018',
    yearEnd: '2019',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'Javascript', icon: icons.cibJavascript },
      { name: 'SASS', icon: icons.cibSassAlt },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [{ paragraph: 'mention implementing new designs' }]
  },
  {
    display: false,
    id: 10,
    brand: 'Hervis',
    type: 'SAP Hybris',
    image: {
      src: 'hervis.svg',
      alt: 'Hervis logo'
    },
    yearStart: '2018',
    yearEnd: '2019',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'Javascript', icon: icons.cibJavascript },
      { name: 'SASS', icon: icons.cibSassAlt },
      { name: 'Eslint', icon: icons.cibEslint },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [{ paragraph: 'mention implementing new designs' }]
  },
  {
    display: true,
    id: 11,
    brand: 'SAP Hybris Travel Accelerator',
    type: 'SAP Hybris',
    image: {
      src: 'sap-ar21.svg',
      alt: 'SAP logo'
    },
    yearStart: '2015',
    yearEnd: '2018',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'Less', icon: icons.cibLess },
      { name: 'Bootstrap', icon: icons.cibBootstrap },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'Working on this huge opportunity to contribute to developing a project for SAP was an enjoyable challenge.'
      },
      {
        paragraph:
          'Components for the front end were produced in isolation so we could place them into the project where they were required. This was some time before applications such as Storybook were common place.'
      },
      {
        paragraph:
          'Closely working with the designer, we were able to identify any areas that would require any adjustments.'
      },
      {
        paragraph:
          'I learnt a lot from this project from closely working with backend developers to integrate the data into the application front end.'
      },
      {
        paragraph:
          'When the project was beginning to mature the team size reduced, I remained the only front end developer on the project to continue collaborating with backend developers for the future features.'
      }
    ]
  },
  {
    display: true,
    id: 12,
    brand: 'Long Tall Sally',
    type: 'SAP Hybris',
    image: {
      src: 'lts.svg',
      alt: 'Long Tall Sally logo'
    },
    yearStart: '2016',
    yearEnd: '2016',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'Angular', icon: icons.cibAngular },
      { name: 'Sass', icon: icons.cibSassAlt },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    // screenshots: [
    //   { src: '', alt: '' },
    //   { src: '', alt: '' },
    //   { src: '', alt: '' }
    // ],
    details: [
      {
        paragraph:
          'Working on Long Tall Sally gave me a chance to see Angular in use on a commercial project.'
      },
      {
        paragraph:
          'We worked closely with the client on this project, working with some of their team in the same office space. One of the biggest challenges was the client testing the site across some very niche & old devices, which could be difficult to debug for.'
      }
    ]
  },
  {
    display: false,
    id: 13,
    brand: 'Costco Tyres',
    type: 'SAP Hybris',
    image: {
      src: '',
      alt: 'Costco'
    },
    yearStart: '2015',
    yearEnd: '2015',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'CSS', icon: icons.cibCss3Shiled },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap },
      { name: 'My SQL', icon: icons.cibMysql }
    ]
  },
  {
    display: true,
    id: 14,
    brand: 'Costco UK & Mexico',
    type: 'SAP Hybris',
    image: {
      src: '',
      alt: 'Costco'
    },
    yearStart: '2015',
    yearEnd: '2015',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'CSS', icon: icons.cibCss3Shiled },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'My time on the Costco project mostly involved maintaining the front end, applying new designs that were signed off for existinig features such as mega navs.'
      }
    ]
  },
  {
    display: true,
    id: 15,
    brand: 'P&O Ferries',
    type: 'SAP Hybris',
    image: {
      src: 'p&o.webp',
      alt: 'P&O Ferries logo'
    },
    yearStart: '2015',
    yearEnd: '2015',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'Less', icon: icons.cibLess },
      { name: 'Bootstrap', icon: icons.cibBootstrap },
      { name: 'Git', icon: icons.cibGit },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'When working on the project for P&O, this largely included maintaining the front end, applying new designs across various components across the site.'
      }
    ]
  },
  {
    display: true,
    id: 16,
    brand: 'Iceland',
    type: 'SAP Hybris',
    image: {
      src: 'Iceland.svg',
      alt: 'Iceland logo'
    },
    yearStart: '2015',
    yearEnd: '2015',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'CSS', icon: icons.cibCss3Shiled },
      { name: 'Subversion', icon: icons.cibSubversion },
      { name: 'Grunt', icon: icons.cibGrunt },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      {
        paragraph:
          'Supporting an old project, resolving bugs, CSS updates and some updates to existing jQuery functions.'
      }
    ]
  },
  {
    display: true,
    id: 17,
    brand: 'Delhaize Belgium',
    type: 'SAP Hybris',
    image: {
      src: 'delhaize-logo.png',
      alt: 'Delhaize logo'
    },
    yearStart: '2014',
    yearEnd: '2015',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'Less', icon: icons.cibLess },
      { name: 'Bootstrap', icon: icons.cibBootstrap },
      { name: 'Subversion', icon: icons.cibSubversion },
      { name: 'SAP Hybris', icon: icons.cibSap }
    ],
    details: [
      { paragraph: 'This was my first time working on an ecommerce project.' },
      {
        paragraph:
          'It introduced more to understanding an end to end user journey than my previous experience.'
      },
      {
        paragraph:
          'On this project was the first time using technology such as LESS, Subversion for the version control and Bootstrap.'
      },
      {
        paragraph:
          'I learnt a lot from being part of this project, it felt like quite a step up from past websites I had worked on.'
      },
      {
        paragraph:
          'I was mainly focued on fixing bugs in some functionality and working on site styling.'
      }
    ]
  },
  {
    display: true,
    id: 18,
    brand: 'Shelter',
    type: '',
    image: {
      src: 'shelter-vector-logo.svg',
      alt: 'Shelter logo'
    },
    yearStart: '2012',
    yearEnd: '2014',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'CSS', icon: icons.cibCss3Shiled }
    ],
    details: [
      {
        paragraph:
          'Working on the Shelter website mostly involved building specific pages for their various campaigns.'
      },
      {
        paragraph:
          'Website maintenance and features were applied within the CMS called Matrix which was produced by Squiz.'
      }
    ]
  },
  {
    display: false,
    id: 19,
    brand: 'Audit & Risk',
    // https://web.archive.org/web/20160526234255/http://auditandrisk.org.uk/
    type: '',
    image: {
      src: 'ar.png',
      alt: 'Audit & Risk logo'
    },
    yearStart: '2011',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'A magazine for Chartered Institute of Internal Auditors'
      }
    ]
  },
  {
    display: true,
    id: 20,
    brand: 'Caspian Media',
    type: '',
    image: {
      src: 'caspian-logo-small.png',
      alt: 'Caspian Media logo'
    },
    yearStart: '2008',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'Working at Caspian Media was my first experience working on web projects.'
      },
      {
        paragraph:
          'It gave me the chance to continue growing my knowledge and experience with the fundamentals of front end web development.'
      },
      {
        paragraph:
          'Working on the company website when a new site was required allowed me to put continue learning HTML, move into using Sass and begin to pick up jQuery.'
      }
    ]
  },
  {
    display: false,
    id: 21,
    brand: 'Asian Women Awards',
    // https://web.archive.org/web/20120709090640/http://awa.realbusiness.co.uk/
    type: '',
    image: {
      src: 'awa_logo.gif',
      alt: 'Asian Women Awards logo'
    },
    yearStart: '2011',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'design/photoshop, wireframing'
      },
      {
        paragraph: ''
      }
    ]
  },
  {
    display: false,
    id: 22,
    brand: 'Women of the Future Awards',
    // https://web.archive.org/web/20120709090640/http://awa.realbusiness.co.uk/
    type: '',
    image: {
      src: 'wof_logo.gif',
      alt: 'Women of the Future Awards logo'
    },
    yearStart: '2011',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'A magazine for Chartered Institute of Internal Auditors'
      },
      {
        paragraph: ''
      }
    ]
  },
  {
    display: false,
    id: 23,
    brand: 'Real Business',
    // https://web.archive.org/web/20100908053027/http://realbusiness.co.uk:80/
    // https://web.archive.org/web/20120501134924/http://realbusiness.co.uk/
    // https://web.archive.org/web/20130602130908/http://realbusiness.co.uk/
    type: '',
    image: {
      src: 'rb.png',
      alt: 'Real Business logo'
    },
    yearStart: '2011',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'design/photoshop, wireframing'
      },
      {
        paragraph: ''
      }
    ]
  },
  {
    display: false,
    id: 24,
    brand: 'Real Deals',
    // https://web.archive.org/web/20110805114014/http://realdeals.eu.com/
    type: '',
    image: {
      src: 'rd-logo.png',
      alt: 'Real Business logo'
    },
    yearStart: '2011',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'design/photoshop, wireframing'
      },
      {
        paragraph: ''
      }
    ]
  },
  {
    display: false,
    id: 25,
    brand: 'Professional Engineering',
    // https://web.archive.org/web/20110805114014/http://realdeals.eu.com/
    type: '',
    image: {
      src: 'pe-logo.gif',
      alt: 'Real Business logo'
    },
    yearStart: '2011',
    yearEnd: '2012',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      {
        paragraph: 'design/photoshop, wireframing'
      },
      {
        paragraph: ''
      }
    ]
  },
  {
    display: false,
    id: 26,
    brand: 'Growing Business Awards',
    // https://web.archive.org/web/20121118112200/http://gba.realbusiness.co.uk/
    type: '',
    image: {
      src: 'growing-business-awards-crop.png',
      alt: 'Growing Business Awards logo'
    },
    yearStart: '2009',
    yearEnd: '2010',
    techstack: [
      { name: 'HTML', icon: icons.cibHtml5Shield },
      { name: 'jQuery', icon: icons.cibJquery },
      { name: 'SASS', icon: icons.cibSassAlt }
    ],
    details: [
      // {
      //   paragraph: 'design/photoshop, wireframing'
      // },
      {
        paragraph: 'This was the first event site where I worked with our new designer.'
      },
      {
        paragraph:
          'All front end development was covered by me, using some basic PHP to access content from the CMS.'
      }
    ]
  }
]
