// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

//=================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$1600',
  address: 'Volodymyrska St, 33, Kyiv',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedIn: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume -- Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc',
      },
    },
    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume -- Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: false,
        },
        {
          name: 'HSBC',
          point: 11,
          isTop: true,
        },
        {
          name: 'VS code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Github',
          point: 8,
          isTop: null,
        },
        {
          name: 'MBA',
          point: 10,
          isTop: true,
        },
        {
          name: 'NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: null,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Racing',
          isMain: true,
        },
        {
          name: 'Football',
          isMain: true,
        },
        {
          name: 'Curling',
          isMain: false,
        },
      ],
    },

    footer,
  })
}),
  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      // ↙ сюди вводимо JSON дані
      page: {
        title: 'Resume -- Education',
      },

      header,

      main: {
        education: [
          {
            name: 'Stanford University',

            isEnd: true,
          },
          {
            name: 'University of California Berkeley',

            isEnd: true,
          },
          {
            name: 'University of Oxford',

            isEnd: false,
          },
          {
            name: 'University of Washington Seattle',

            isEnd: null,
          },
          {
            name: 'Columbia University',

            isEnd: true,
          },
          {
            name: 'University of Cambridge',

            isEnd: false,
          },
        ],

        certificates: [
          {
            name: 'Bachelor degree',

            id: 1234567,
          },
          {
            name: 'Masters degree',

            id: 7654321,
          },
          {
            name: 'PhD',

            id: 1029387,
          },
        ],
      },
      footer,
    })
  })
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume -- Work',
    },

    header,

    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '23.12.2020',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Oscar-world movie awards',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                { name: 'HTML' },
                { name: 'Nodejs' },
              ],
              awardAmount: 2,
              awards: [
                { name: 'Best actor' },
                { name: 'Best soundtrack' },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
}),
  router.get('/person', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
      layout: 'person',
      person: {
        name: 'Emma Johnson',
        age: 32,
        gender: 'Female',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'USA',
        },
        education: [
          {
            degree: 'Bachelor of Science',
            major: 'Computer Science',
            university:
              'Massachusetts Institute of Technology',
            graduationYear: 2012,
          },
        ],
        workExperience: [
          {
            company: 'Google',
            title: 'Software Engineer',
            startDate: '2012-06-01',
            endDate: '2016-12-31',
            responsibilities: [
              {
                a: 'Developed new features for Google Maps',
                b: 'Worked on improving search algorithms',
              },
            ],
            year_founded: 1990,
            industry: 'Technology',
            employees: [
              {
                name: 'John Smith',
                position: 'CEO',
                department: 'Executive',
                projects: [
                  {
                    name: 'Project Alpha',
                    description:
                      'Developing new software platform',
                    status: 'In Progress',
                    teams: [
                      {
                        team_name: 'Awesome Team',
                        team_leader: {
                          name: 'John Smith',
                          title: 'Team Leader',
                          email: 'john.smith@example.com',
                        },
                        team_members: [
                          {
                            name: 'Alice Johnson',
                            title: 'Software Engineer',
                            email:
                              'alice.johnson@example.com',
                            skills: [
                              'Java',
                              'Python',
                              'SQL',
                            ],
                            projects: [
                              {
                                name: 'Project A',
                                description:
                                  'Lorem ipsum dolor sit amet',
                                technologies: [
                                  'Java',
                                  'Spring Framework',
                                ],
                                team_members: [
                                  {
                                    name: 'Bob Lee',
                                    title:
                                      'Software Engineer',
                                  },
                                  {
                                    name: 'Cindy Chen',
                                    title: 'UI Designer',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  }),
  // ================================================================

  router.get('/program1', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program1', {
      layout: 'program1',

      program: {
        excursion: {
          name: 'Cultural Tour',
          location: {
            city: 'Paris',
            country: 'France',
          },
          date: '2023-06-15',
          program: [
            {
              name: 'Museum Visit',
              type: 'Art',
              duration: 3,
              details: {
                museum: {
                  name: 'The Louvre',
                  location: {
                    address: 'Rue de Rivoli',
                    city: 'Paris',
                    country: 'France',
                  },
                  exhibits: [
                    {
                      name: 'Mona Lisa',
                      artist: 'Leonardo da Vinci',
                      description:
                        'Iconic portrait painting',
                      audio_guide: true,
                    },
                    {
                      name: 'Winged Victory of Samothrace',
                      artist: null,
                      description:
                        'Ancient Greek statue of Nike, the goddess of victory',
                      audio_guide: true,
                    },
                  ],
                },
                guide: {
                  name: 'Francois',
                  language: 'French',
                  rating: 4.8,
                },
              },
            },
            {
              name: 'Cultural Show',
              type: 'Music and Dance',
              duration: 2,
              details: {
                venue: {
                  name: 'Moulin Rouge',
                  location: {
                    address: '82 Boulevard de Clichy',
                    city: 'Paris',
                    country: 'France',
                  },
                },
                performers: [
                  {
                    name: 'Mireille Mathieu',
                    type: 'Chanson singer',
                  },
                  {
                    name: "Ballet de l'Opéra National de Paris",
                    type: 'Classical ballet company',
                  },
                ],
                guide: {
                  name: 'Sophie',
                  language: 'English',
                  rating: 4.6,
                },
              },
            },
          ],
        },
      },
    })
  })

// ================================================================
module.exports = router
