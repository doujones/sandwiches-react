export const texts1 = [
  {
    name: 'double quarter pounder',
    img: './imgs/sandwich1.jpeg',
    section: 'Meat'
  },
  {
    name: 'cheese',
    img: './imgs/sandwich2.jpeg',
    section: 'Vegan'
  },
  {
   name: 'ham',
    img: './imgs/sandwich3.jpeg',
    section: 'Meat'
  },
  {
    name: 'jelly',
    img: './imgs/sandwich4.jpeg',
    section: 'Vegan'
  },
  {
    name: 'peanut butter',
    img: './imgs/sandwich5.jpeg',
    section: 'Vegan'
  },
  {
    name: 'turkey',
    img: './imgs/sandwich6.jpeg',
    section: 'Meat'
  },
  {
    name: 'spam',
    img: './imgs/sandwich7.jpeg',
    section: 'Meat'
  },
  {
    name: 'hamburger',
    img: './imgs/sandwich8.jpeg',
    section: 'Meat'
  },
  {
   name: 'beef',
    img: './imgs/sandwich9.jpeg',
    section: 'Meat'
  }
];

export const texts = texts1.reduce((res, nike1) => {
  if(!res[nike1.section]){
    res[nike1.section] = []
  }
  res[nike1.section].push(nike1);
  return res;
}, {});