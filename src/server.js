const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.static(__dirname + '/assets'))
app.use(cors())
 
app.get('/recipes', async (req, res) => {
  res.json(data)
});

app.get('/recipes/:recipeId', async (req, res) => {
  res.json(data[req.params.recipeId - 1]);
});

app.listen(3080, () => console.log('Listening on 3080'))


const data = [
  {
    id: '1',
    name: 'Pasta Carbonara',
    time: '30min',
    date: '2020-04-23T18:25:43.511Z',
    isFavorite: 'false',
    category: ['pork', 'pasta'],
    featuredImage: '/images/featured-pasta-carbonara.jpg',
    ingredients: [
      {
        amount: '4',
        type: 'egg yolks'
      },
      {
        amount: '350g',
        type: 'spaghetti'
      },
      {
        amount: '50g',
        type: 'pecorino romano'
      },
      {
        amount: '180g',
        type: 'guanciale (pork)'
      },
      {
        amount: null,
        type: 'black pepper to taste'
      },
      {
        amount: null,
        type: 'salt for boiling water'
      },
      {
        amount: null,
        type: 'parmesan (optional)'
      }
    ],
    steps: [
      {
        step: '0',
        image: '/images/pasta-recipe-step0.jpg',
        title: 'Ingredients'
      },
      {
        step: '1',
        image: '/images/pasta-recipe-step1.jpg',
        title: 'Boil the pasta water',
        description: "Fill a large pot with clean cold water, put it on the stove, heat and let it come to a gentle boil."
      },
      {
        step: '2',
        image: '/images/pasta-recipe-step2.jpg',
        title: 'Chop pork',
        description: "While the water is on, take the <strong>guanciale</strong> and chop it into small chunks, about .5cm * 1cm. </br> Don't worry about the size, it is just to give a scale, this is a homemade dish and perfection is not necessary."
      },
      {
        step: '3',
        image: '/images/pasta-recipe-step3.jpg',
        title: 'Mix the sauce',
        description: "Take a large bowl and whish the <strong>egg yolks</strong> together so they amalgamate into each other. </br> Add the <strong>pecorino</strong>, a pinch of <strong>salt</strong> and a pinch of <strong>black pepper</strong>. </br> Mix everything well together."
      },
      {
        step: '4',
        image: '/images/pasta-recipe-step4.jpg',
        title: 'Boil the pasta',
        description: "Set the timer to about 7 minutes so you can taste them at that point and see how they are getting on. </br>Overall cooking time depends on the brand and consistency you like the most. "
      },
      {
        step: '5',
        image: '/images/pasta-recipe-step5.jpg',
        title: 'Cook the pork',
        description: "Heat up a pan on the stove. Do not add oil or butter </br>Cook the <strong>guanciale</strong> in its own fat. </br>Stir often and let it cook for about <strong>7minutes</strong> </br> Let it cool for a few minutes. Then add it to the eff mixture and stir well."
      },
      {
        step: '6',
        image: '/images/pasta-recipe-step6.jpg',
        title: 'Coat the pasta with the egg mix',
        description: "Heat up a pan on the stove. Do not add oil or butter. </br>Cook the guanciale in its own fat. </br>Stir often and let it cook for about 7minutes </br>Let it cool for a few minutes. Then add it to the eff mixture and stir well."
      },
    ]
  },
  {
    id: '2',
    name: 'Fladbrød med Aubergine',
    time: '30min',
    date: '2021-04-23T18:25:43.511Z',
    isFavorite: 'true',
    category: ['vegan'],
    featuredImage: '/images/featured-fladbroed.jpg',
      ingredients: [
      {
        amount: '4',
        type: 'egg yolks'
      }
    ],
    steps: [
      {
        step: '0',
        image: '/images/pasta-recipe-step0.jpg',
        title: 'Ingridients'
      }
    ]
  },
  {
    id: '3',
    name: 'Dutch baby au natural',
    time: '60min',
    date: '2021-02-23T18:25:43.511Z',
    isFavorite: 'true',
    category: ['desert'],
    featuredImage: '/images/featured-dutch-baby.jpg',
    ingredients: [
      {
        amount: '4',
        type: 'egg yolks'
      }
    ],
    steps: [
      {
        step: '0',
        image: '/images/pasta-recipe-step0.jpg',
        title: 'Ingridients'
      }
    ]
  },
  {
    id: '4',
    name: 'Baguette with figs, lemon and mint',
    time: '30min',
    date: '2012-04-23T18:25:43.511Z',
    isFavorite: 'true',
    category: ['vegan'],
    featuredImage: '/images/featured-baguette-figs.jpg',
    ingredients: [
      {
        amount: '4',
        type: 'egg yolks'
      }
    ],
    steps: [
      {
        step: '0',
        image: '/images/pasta-recipe-step0.jpg',
        title: 'Ingridients'
      }
    ]
  },
  {
    id: '5',
    name: 'Pasta pesto med kvalderkål',
    time: '40min',
    date: '2018-02-20T18:25:43.511Z',
    isFavorite: 'true',
    category: ['vegetarian', 'pasta'],
    featuredImage: '/images/featured-pasta-pesto.jpg',
    ingredients: [
      {
        amount: '4',
        type: 'egg yolks'
      }
    ],
    steps: [
      {
        step: '0',
        image: '/images/pasta-recipe-step0.jpg',
        title: 'Ingridients'
      }
    ]
  }
];