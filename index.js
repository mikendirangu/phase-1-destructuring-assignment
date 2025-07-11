const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.b

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

// 1. Animal Sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Traditional Names
const [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];

// 3. Traditional Colors (actual values must be animal names)
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

// 4. Rainbow Colors by Name
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Rainbow Colors by Initial
const [r, o, y, g, b, , v] = colors;

// 6. Just Indigo
const [, , , , , indg] = colors;

// 7. Destructure muppet
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nestedMuppet
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
