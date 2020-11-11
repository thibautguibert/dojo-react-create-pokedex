Bienvenue sur le Dojo Pokédex en React !

L'objectif est de créer un pokédex de la 1ère génération en React avec comme feature :
- un affichage de 151 cartes pokémon
- onglet qui crée une équipe aléatoire de 6 pokémon
- des onglets par type de pokémon
- une fonction recherche pour trouver un pokémon


Commençons dès maintenant !

1. Créez un composant fonction nommé Card qui affiche Bulbizarre avec comme info :
- son numéro de Pokédex, son nom, son image de face et de dos, ainsi que ses types.

A. Reprenez pour cela les éléments de l'objet qui suit:
bulbasaur = {
    id: 1,
    name: "bulbasaur",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    types: [
    "grass", "poison"
]
}

B. Importez le fichier card.css dans votre composant, et aidez-vous des classes présentes dans ce composant pour l'affichage. Un exemple de visuel est donné dans src (venusaur-card.png).

Vous arrivez à afficher la carte de bulbizarre dans l'app ? Génial ! Passez à l'étape 2

2. Modifiez le composant Card pour le rendre dynamique, en le paramétrant avec les props suivantes :
- id
- name
- sprites.back_default
- sprites.front_default
- type[0,1]

Ensuite, modifiez l'App.js pour que le composant Card prenne les props de Bulbizarre. Une fois cela fait, affichons une seconde carte pour Salamèche !
Voici les infos de Salamèche :

charmander = {
    id: 4,
    name: "charmander",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    types: [
    "fire"
]
}

BONUS :
On remarque que Salamèche n'a qu'un seul type. Vous pouvez créer une condition sur l'existence de props.type[1], afin de modifier la classe de la balise affichant le second type (la classe "none" permet de ne pas afficher de 2nd type).

Les deux cartes s'affichent ? Passons à l'étape 3! 

3. Que c'est long de retaper les props dans chaque appel du composant Card ! Nous allons y remédier en créant un nouveau composant Pokédex !

Le composant Pokédex va afficher une liste de composants Card à partir d'un tableau de pokémon. Voici le tableau en question :

kantoPokedex = [
    {
        id: 1,
        name: "bulbasaur",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        types: [
            "grass", "poison"
        ]
    },
    {
        id: 4,
        name: "charmander",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        types: [
            "fire"
        ]
    },
    {
        id: 7,
        name: "squirtle",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        types: [
            "water"
        ]
    }

]

Une fois le composant Card importé dans Pokedex, et votre tableau présent dans le fichier, utilisez la méthode map pour afficher les 3 cartes.
Pensez à appeler le composant Pokedex dans l'app. Les 3 cartes s'affichent bien ? Vous pouvez enlever les composants Card précédents de l'app, et passer à la suite !

4. Maintenant que vous arrivez à afficher des cartes statiques, on passe à l'étape supérieure : modifier le state de nos composants.

Peut-être ne le savez-vous pas, mais toutes les espèces de pokémon ont une version très rare qui a une couleur différente. On les appelle les "Shiny" ou "chromatique". 
On va ajouter sur le composant Card un bouton "shiny" qui changera l'image du pokémon sur la carte en sa version Shiny.

A. Commençons par créer le bouton dans le composant Card.
Il faut lui ajouter un attribut qui va permettre de gérer un événement de clic. 
Donnez-lui la classe shiny-btn, et ✨ comme chaine de caractères.

Vérifions que le bouton s'affiche bien sur la carte. C'est bon ? OK
Passons à la fonction qui va gérer le changement de state grâce au clic du bouton.
Pour l'instant on va simplement vouloir changer une clé "active" qui sera un booléen. Si elle est vraie, alors on ajoute la classe "active" au bouton, sinon non.

Vous coincez ?
Procédons par étape : 
- on va changer Card en un composant de classe.
- on va créer un objet state dans le constructor, et lui donner une clé active: false
- on va ensuite créer une fonction qui va changer la valeur de active quand il y aura un clic (avec la méthode setstate)
- enfin, on modifie la classe du bouton suivant la valeur de active avec un ternaire (il y a une classe active dans le css pour le bouton)

B. Attaquons nous maintenant à la modification des images ! 
Mettons d'abord à jour notre tableau pokédex Kanto en rajoutant ces lignes dans les objets sprite:

- bulbizarre:
back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",


- salamèche:
back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",


- carapuce:
back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",

De la même manière que pour la classe du bouton, on va pouvoir décider quelle lien est choisi comme source de nos balises images suivant l'état de active.
C'est beau le state, non ? Par contre les shiny sont moches, on est d'accord !

Et voilà, la première partie du dojo est finie ! 

5. Bienvenue dans la seconde partie du dojo, celle où l'on met fin au copier-coller de nos tableaux en dur. 
Nous allons maintenant aller chercher nos données dans l'API PokéAPI, pour générer une carte pokémon aléatoire

Commençons par nous familiariser avec la documentation de PokéAPI :
https://pokeapi.co
Quand vous arrivez à comprendre la structure du tableau que nous renvoie la requête, on peut passer à la suite.

A. On va faire un premier appel à l'API dans un nouveau composant RandomPoke

Pour bien comprendre commment fonctionne l'API, on va seulement récupérer les infos d'un pokémon au hasard, qu'on affichera s'ils cliquent sur un bouton au Hasard.
Créer le bouton Hasard dans le composant RandomPoke et donnez lui une fonction qui lors d'un clic affichera une carte au hasard.

Avant de créer cette fonction, on va importer le composant Card dans notre fichier, et l'afficher sous le bouton.
Pour commencer, on va lui donner des props nulles, via le state de notre composant PokeRandom.

si vous bloquez un peu, voici le genre d'objet que l'on peut mettre dans notre state : 
randomPokemon: {
                id: 0,
                name: "",
                sprites: {
                    back_default: "",
                    front_default: "",
                    back_shiny: "",
                    front_shiny: ""
                },
                types: [
                    "null", ""
                ]
            }

Passons à la fonction ! Celle-c est en fait celle qui va récupérer les données de l'API.
Pour cela, on va installer axios, qui est une meilleure méthode que fetch pour faire des appels à l'API.
(npm i axios dans le terminal).

On souhaite récupérer les données d'un pokémon aléatoire et mettre à jour le state avec ces données. Ainsi, les props de la Card seront mises à jour, donc son affichage aussi.

Petite aide pour le type, qui est assez dur à aller chercher. Voici le genre de code qu'on peut avoir dans notre fonction setState :
    randomPokemon.types[0] = data.types[0].type.name;

Pensez à importer RandomPoke dans l'app pour voir comment votre fonction marche.

B. Il reste à finaliser quelques éléments pour que nos cartes soient parfaites. D'abord, vous remarquez peut etre un souci au niveau du second type d'un pokémon. S'il n'en a pas, il va garder le type du précédent pokémon... pas terrible ! 

On va donc rajouter une condition dans notre fonction. Si le 2eme type n'existe pas, alors on va réinitialiser notre clé types[1] au sein de notre state.

Enfin, un gros problème d'affichage arrive lorsqu'on n'a pas encore appuyé sur le bouton... La carte s'affiche, mais avec des props vides... et donc sans image.
2 façons d'y rémédier. Soit on met un state par défaut qui n'est pas vide. Sinon, beaucoup mieux :

On va créer un opérateur ternaire pour afficher le composant Card dans notre Render, avec un booléen stocké dans le state. Celui ci sera faux tant que le bouton n'aura pas été cliqué. Sinon, on n'affiche tout simplement rien.

6. Maintenant qu'on a réussi à appeler l'API, plus rien ne peut nous arrêter. Créons un nouveau composant SearchPoke comportant une barre de recherche et un bouton : nous voulons afficher la carte du pokémon recherché ! 

Dans React, il est conseillé de lier la value d'un input à une clé du state. Faites cela, puis créez une fonction qui mettra à jour le state grâce à l'attribut onChange de l'input.

Passons au bouton ! 

barre de recherche et affichage de la carte du poke en question (formulaire contrôlé)

7. les route : avec 3 onglets pokédex, random et search (react router)

8. faire un appel à l'API pour afficher le pokédex entier (utilisation de DidMount)

9. faire un sélecteur pour afficher le pokédex de différentes générations (utilisation de DidUpdate)

10. peaufiner l'onglet random pour afficher 1 team de 6 pokémon avec le bouton. (Peut etre ajouter des checkbox pour pokémon évolués/pas évolués pour utiliser filter)

11. peaufiner la barre de recherche pour qu'elle fonctionne comme un filtre qui inclut la chaine de caractère tapée.

12. Exo pour utiliser les hooks

