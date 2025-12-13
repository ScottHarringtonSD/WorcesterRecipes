import Recipe from "../index/Recipe";
import Review from "../index/Review";
import example from "./images/example.png"
import ChorizoChicken from "./images/ChorizoChicken.png"
import Salmon from "./images/Salmon.png"
import Paella from "./images/Paella.png"
import Sludge from "./images/Sludge.png"
import Toad from "./images/Toad.png"
import Shakshuka from "./images/Shakshuka.png"

export const RecipeFiles =  [
  new Recipe({
    id: 1,
    title: "Punchy Pork Noodles",
    chef: "Alasdair 'The Captain' Casperd",
    type: "meal",
    servingSize: "Serves 2 Scotts, 3 Ninas or 5 Henrys",
    preamble: "Pork peanut noodles was a staple of the south parade massive, feeding the hungry horde that lived there with volume and flavour. However, this beast is a hefty dish, with peanut sauce ensuring a stuffed stomach and happy customers. Read on to find out the secrets of this dish!",
    ingredients: [
      "~500g packet of minced pork",
      "6 egg noodle nests",
      "2 garlic cloves, finely chopped",
      "3 tablespoons Thai red curry paste",
      "250ml chicken stock",
      "1 can coconut milk",
      "2 tablespoons soy sauce",
      "120g smooth peanut butter",
      "100g baby spinach",
      "juice of 2 limes",
      "Sriracha",
      "(Optional) chopped cacahouettes, to serve",
    ],
    instructions: [
      "In a large pan, fry the pork mince on high heat until it is browned all over.",
      "Meanwhile, start cooking the noodles.",
      "Add the garlic and curry paste and cook for another 2 minutes, reducing the heat to medium.",
      "Send Scott out to get the ingredients you forgot to put on the Tesco order.",
      "Add the stock, coconut milk and soy sauce and bring to a simmer.",
      "Add the peanut butter, mix well and cook for at least 2 more minutes.",
      "When ready, add in the noodles, along with the baby spinach, lime juice and a few generous squirts of sriracha.",
      "Mix well as you let the noodles warm through for a minute or two, then serve.",
    ],
    tips: [
      "Forgotten to remove the plastic film? Don’t worry — just let it dissolve on the bottom of the pan and your housemates will be none the wiser!",
      "Like your noodles heavy? Try doubling the quantity of peanut butter for a Fun Time™",
    ],
    pictureLink: example
  }),
new Recipe({
    id: 2,
    title: "Chorizo Chicken",
    chef: "The Stubbs family",
    type: "meal",
    servingSize: "Serves 3?",
    preamble: "This dish was a family favourite growing up; a little taste of Andalucía in rural South Derbyshire, and with a story of friendship to match the warming comfort of the dish… In the early 2000s my mother began working as a French and German teacher. It was difficult, and she often spent long periods after the school day ended in her classroom preparing lessons. However, during this time she befriended a fellow teacher named Julia. Julia was a veteran teacher and helped my mother to settle into the school, and they soon became good friends. However, all too soon Julia left South Derbyshire to a new life in the sun in southern Spain. Before long, my mother made the journey to Spain to visit Julia. A far cry from the run-down corridors of William Allit secondary school (which has now been closed and condemned for demolition), Julia’s new home was breathtaking. Surrounded by orange orchards and beautiful countryside, it felt like paradise. It was here that my mother was introduced to Chorizo Chicken for the first time. Julia had tried it in a local restaurant and loved it so much that she took the recipe home. When my mother returned home, she brought back not just fond memories of time well spent with a treasured friend, but also the recipe for this dish. It became a staple in our house, and when I left for university, I missed it so much that I asked my mother for the recipe. A recipe that will soon make another step in its journey from Spain to you… Sadly, due to dietary restrictions I never had the opportunity to make this for my housemates, except for one occasion, when I made it for my housemate Nina, who subsequently fell violently ill and had to be hospitalized.",
    ingredients: [
    "Chorizo, sliced into disks",
    "Chicken breast, cut into large chunks",
    "1 Onion",
    "Garlic",
    "1 Tin chopped tomatoes",
    "Paprika",
    "Bay leaf",
    "Chicken stock (actually, you’re supposed to use sherry or something, but my mum couldn’t remember)"
    ],
    instructions: [
    "Coat the chicken in paprika and fry to seal.",
    "Remove the chicken from the pan and set aside, then fry the onion together with the chorizo and garlic.",
    "Add the tin of chopped tomatoes, bay leaves, and chicken stock, and bring to the boil.",
    "Transfer to a large casserole dish and put in the oven for 1 hour at 180 degrees, occasionally checking that it hasn’t dried out and adding additional stock as necessary.",
    "Serve with couscous."
],
    pictureLink: ChorizoChicken,
    reviews: [new Review("This dish almost fucking killed me", "Nina", 1, 7), new Review("By not specifying the quantity of chicken stock, your recipe is dangerously open to interpretation. I will be reporting this to trading standards immediately!", "Amrit", 0, 0), new Review("I replaced the onions and garlic with more chorizo, and it worked great!”", "Adam", 5, 2)]
  }),
new Recipe({
    id: 3,
    title: "Salmon and Greens",
    chef: "Maddy Underwood",
    type: "meal",
    servingSize: "Serves 4",
    preamble: "Salmon is the only food that sustained our chef throughout her entire undergrad and is the sole (hehe) reason she survived. It is said that at one point her skin began to turn orange from excessive salmon exposure, but she was saved by her switch into becoming a pasta bake expert. This meal is an absolute worcester classic, and was loved by many a housemate also.",
    ingredients: [
      "1 leek, thinly sliced",
      "250ml stock",
      "100g creme fraiche",
      "140g frozen peas",
      "140g frozen broad beans (or another frozen green if like me you think these are weird texturally)",
      "4 skinless salmon fillets",
      "small bunch of chives",
      "as much mash as required to fill the hole in your stomach (or heart ❤️ )",
    ],
    instructions: [
      "Heat some oil in a pan (that has a lid!).",
      "Cook the leeks for 5-10 minutes until soft but not coloured.",
      "Add in the stock and simmer for a few mins.",
      "Add the creme fraiche and season (salt and pepper for the culinarily uneducated) and cook for another minute.",
      "Stir in the veggies, nestle in the salmon fillets, turn down to simmer and cover (with the lid from earlier).",
      "Cook for 12 - 15 mins until the salmon is cooked through",
      "Sprinkle on some chopped chives and serve with the mash (that you have definitely remembered to make at the same time right?).",
    ],
    tips: [
      "DO NOT FORGET THE MASH!",
    ],
    pictureLink: Salmon,
    }),
    new Recipe({
    id: 4,
    title: "Paella",
    chef: "Nino Holguino",
    type: "meal",
    servingSize: "Serves 4",
    preamble: "Another worcester staple, Nina's paella has filled many a stomach at a big occasion, and always leaves the diner wanting more. Often when this dish is being cooked, a wild Henry Stubbs will appear, desperate for a taste of one of his favourite meals, and will not leave until he is fed to completion.",
    ingredients: [
    "4 chicken breasts/thighs chopped into 1-inch sized pieces",
    "1 non-spicy chorizo ring",
    "2 red peppers, diced",
    "1 pint of chicken stock",
    "4 normal salad tomatoes, diced",
    "1 white onion, diced",
    "6 cloves of garlic, diced (or sliced, if you’re feeling more authentic)",
    "A good pinch of saffron",
    "Paella rice for 4 (300-400g)",
    "So much olive oil",
    "1 small mug of peas",
    "2 tsp of non-smoked paprika",
    "Chopped fresh parsley and wedges of lemon to serve"
    ],
    instructions: [
    "Remove the skin from the chorizo and cut it up into pieces.",
    "In a cold large frying pan, add the chorizo pieces and slowly turn up the heat (so the fat from the chorizo is released).",
    "Once the fat is released, add a little oil and the chicken to the pan.",
    "Fry until the chicken is sealed and starting to get a nice colour on it, making sure the chorizo does not burn.",
    "With a slotted spoon, remove the chicken and chorizo from the pan into a bowl, but leave the oil.",
    "Add more oil to the pan.",
    "Gently fry the onion, garlic, and peppers in the pan. We want the vegetables to go soft rather than go brown and crispy.",
    "If you wish to add the optional paprika, add it now.",
    "While frying, boil a kettle. Once boiled, add the saffron to a small cup of boiling water and make up the pint of chicken stock.",
    "Once the vegetables are fully softened and aromatic, add the tomatoes to the pan and fry so the tomatoes go soft and start to disintegrate.",
    "Add the chicken and chorizo back into the pan and mix in.",
    "Add the rice into the pan and fry for a bit longer; if it's sticking to the bottom, add more oil.",
    "After a couple of minutes of frying, add the saffron water to the pan and mix in.",
    "Then, add the stock to the pan. This should look very wet.",
    "On medium heat, leave the paella with the lid off to cook. You should not stir it.",
    "It will stick on the bottom a bit, and this is what you want. There’s a Spanish word for it: socarrat. It’s supposed to give flavor.",
    "However, if you lose your nerve, do a quick scrape at the bottom and try not to mix it too much.",
    "Cook until the rice is fully cooked through (not chalky) and the liquid evaporated — this should take around 25 minutes.",
    "The rice will look pretty dry in the last five minutes, but if it looks too dry before then, add a bit more water.",
    "Just before it is fully cooked, add the peas to the pan.",
    "Serve with a wedge of lemon and fresh parsley."
],
    pictureLink: Paella,
    }),
    new Recipe({
    id: 5,
    title: "Sludge",
    chef: "Harrington Enterprises",
    type: "drink",
    servingSize: "Serves 1 fool",
    preamble: "A most potente potion, sludge was first brewed in the dark and gloomy depths of the temple street kitchen after weeks of dangerous experimentation Whilst the physical effects are most desirable, the mental strength to sustain the dosage is a challenge in itself, as it should be taken daily for maximum effects. Devised to increase strength and size, it has also been said to banish illness and bring the user luck, although it may come with some unwanted side effects…",
    ingredients: [
      "50 grams butter of the peanut",
      "400 millilitres cow’s milk (pasteurized, full fat)",
      "1 banana",
      "50 grams oats",
      "1 drizzle bee’s honey",
      "1 blender",
    ],
    instructions: [
      "Place the solid ingredients into the blender, then cover with the milk. Blend until frothy and smooth, then leave to settle for a minute. Serve in a pint glass for aesthetic purposes. Take once daily for maximum effect.",
      "Thats it."
    ],
    tips: [
    "If you find drinking sludge too enjoyable, forgo blending the mixture and eat it as a milky broth. Completing this challenge daily has been said to increase mental fortitude, but also can cause insanity for the weak-minded.",
    "Try frozen berries as opposed to a banana for a fruity surprise (and also potentially brain freeze). Alternatively, use a whole pineapple (half pineapple does not work).",
    "If you find the calorific qualities to be disappointing, try adding a small cup of olive oil if you are a nutcase.",
    "While this seems like an ideal breakfast drink, try drinking this just before you go to bed. The lovely, bloated feeling sludge induces is certainly helpful for a restful sleep.",
    "The recipe is easily scalable! 4x the recipe to produce a healthy vat of elixir that can feed a small family, or freeze for later enjoyment."
],
    pictureLink: Sludge,
    warning: "Warning: may cause unwanted side effects, including but not limited to: bloating, huge gainz, indigestion, diaphoresis, intrusive thoughts, lunacy, uncontrollable burping. Harrington’s Tinctures And Remedies take no legal responsibility for any negative consequences. Not suitable for small children, pregnant women, those of weak disposition."
  }),
new Recipe({
    id: 6,
    title: "Toad in the Hole",
    chef: "Tom Bombadil",
    type: "meal",
    servingSize: "Serves family of 5, or 2 hungry students",
    preamble: "Gather 'round, hungry souls, and prepare to embark on a culinary adventure that’ll leave your taste buds dancing and your stomachs singing! Our star dish, Toad in the Hole with Onion Gravy, is so hearty it could probably wear a belt and RSVP to Thanksgiving dinner—unless, of course, the chef (that’s me!) has indulged a bit too much, in which case, I'm just going to roll over and call it a “hole in one!” This dish is the perfect remedy for those nights when you want comfort food that’s simpler than counting the number of sausages you secretly devour—and trust me, that number might just be higher than you'd care to admit! So grab your apron, tie it tight (because that’s where it’s going to stay after the first bite), and let’s get cooking!",
    ingredients: [
      "For the hole:",
    "150g plain flour",
    "300ml milk",
    "1 large egg",
    "Punch of salt",
    "For the toad:",
    "6-10 juicy pork sausages (or veggie)",
    "For the gravy:",
    "2/3 large red/white onions",
    "1 tablespoon flour",
    "Glug of oil or knob of butter",
    "Stock",
    "Alcohol (leftover wine, beer)",
    "Dash of gravy browning"
],
    instructions: [
    "Mix the batter together with a lift and leave to stand.",
    "Put a glug of sunflower oil in a tray with the sausages and put in the oven to brown.",
    "Once browned, pour the batter over the sausages and bake for 30-45 minutes depending on the depth of the tray. Do not open the oven door if possible.",
    "Whilst in the oven, work on the gravy. Caramelise the onions in a pan with a nice knob of butter.",
    "Sprinkle some flour over the onions. Slowly add the alcohol/stock to get a smooth, thick gravy. Do not substitute gravy browning for soy sauce; the result is incredibly salty.",
    "Serve hot with some greens."
],
    pictureLink: Toad,
    }),
  new Recipe({
    id: 7,
    title: "Shakshuka",
    chef: "Guy Jabby-Doory",
    type: "meal",
    servingSize: "Serves 2",
    preamble: "Shakshuka is the ultimate breakfast-for-dinner dish, where sunny-side-up eggs shine like little yolky suns in a rich, spiced tomato heaven! This dish makes you feel like you’ve been transported to a bustling Mediterranean market, where the scent of sautéed onions and garlic fills the air. While the veggies sauté, you might find yourself pondering the philosophical question: is it too early for a glass of wine? (Spoiler alert: it's never too early when shakshuka is involved!) Perfect for sharing or, let's be honest, for keeping all to yourself if you plan on hiding away with a pitta or two. So, roll up those sleeves and prepare to fry up some deliciousness!",
    ingredients: [
    "2 small onions",
    "1-2 peppers",
    "Olive oil",
    "2 cloves garlic",
    "1 tbsp tomato paste",
    "½ tsp smoked paprika",
    "½ tsp paprika",
    "½ tsp cumin",
    "½ tsp dried coriander",
    "1 can of chopped tomatoes",
    "Chilli flakes to taste",
    "4 eggs",
    "Feta",
    "Parsley",
    "Pitta, to serve"
],
    instructions: [
    "Slice or roughly dice onions and peppers and add to a pan on medium heat with a tablespoon of olive oil.",
    "Fry the vegetables until soft, then add minced garlic. Once aromatic, add spices and cook for 30 seconds, then add tomato paste and cook for another 30 seconds.",
    "Add chopped tomatoes and let simmer until the sauce is reduced and flavourful.",
    "Make four wells in the sauce and crack an egg in each of these. Cover with a lid and cook until the white is just set but the yolk is runny.",
    "Remove the pan from the heat, add chopped parsley and crumbled feta, and serve hot with pitta bread on the side."
],
    pictureLink: Shakshuka,
    }),]
