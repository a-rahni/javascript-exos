#Dark mode & Light mode

Le but de ce TP est de créer une page qui support les modes `dark mode` et `light mode`.

Le changement d'apparence est effectué lorsque l'utilisateur clique sur le bouton `toggle`.

Pour formater correctement la date, allez devoir utiliser `moment.js` qui est une librairie spécialisée dans le formatage des dates.Pour l'utiliser:

1. Importer le script distant avec ce code : `<script
   src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
   integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
   crossorigin="anonymous"
   referrerpolicy="no-referrer"

   > </script>`

2. Pour formater votre date, recupérez l'attribut date de votre objet article de la manière suivante : `const formatedDate = moment(date).format("MMMM Do, YYYY");`.

Voici la liste des articles
[
{
id: 1,
title: "the WET Codbase",
date: new Date(2020, 9, 4),
length: 11,
snippet: `A year ago, I gave a conference talk, and I want to share it today with those of you who haven’t watched it. This talk isn’t about React, or even JavaScript..`,
},
{
id: 2,
title: "goodby, clean code",
date: new Date(2019, 10, 22),
length: 5,
snippet: `My colleague has just checked in the code that they’ve been writing all week. We were working on a graphics editor canvas, and they implemented the ability to resize shapes like rectangles and ovals by dragging small handles at their edges.`,
},
{
id: 3,
title: "my decade in review",
date: new Date(2018, 7, 11),
length: 5,
snippet: `I started this decade as a first-year college student fresh out of high school. I was 17, didn’t have a job, didn’t have any industry connections, and really didn’t know shit. And now you’re reading my blog! I would have been proud.`,
},
{
id: 4,
title: "what are the react team principles",
date: new Date(2015, 5, 4),
length: 5,
snippet: `During my time on the React team, I’ve been lucky to see how Jordan, Sebastian, Sophie and other tenured team members approach problems. In this post, I’m distilling what I learned from them into a few high-level technical principles. These principles aren’t meant to be exhaustive. This is my personal attempt to formalize observations about how the React team operates — other team members may have different perspectives.`,
},
];

```

Exemple d'exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658920936/gif%20exercices/tp6-dark-mode.gif)
```
