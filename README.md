Bienvenue sur le Dojo Pokédex en React !

L'objectif est de créer un pokédex de la 1ère génération en React avec comme feature :
- un affichage de 151 cartes pokémon
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

4. 