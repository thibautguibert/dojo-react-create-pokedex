Bienvenue sur le Dojo Pokédex en React !

L'objectif est de créer un pokédex de la 1ère génération en React avec comme feature :
- un affichage de 151 cartes pokémon aléatoires
- des onglets par types de pokémon
- une fonction recherche pour trouver un pokémon


Commençons dès maintenant !

1. Créez un composant fonction nommé Card qui affiche Bulbizarre avec comme info :
- son numéro de Pokédex, son nom, son image de face et de dos, ainsi que ses types.

Reprenez pour cela les éléments de l'objet qui suit: 
bulbasaur = {
    id: 1,
    name: "bulbasaur",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }
    types: [
    {
        slot: 1,
        type: {
            name: "grass"
        }
    },
    {
        slot: 2,
        type: {
            name: "poison"
        }
    }
]
}

Importez le fichier card.css dans votre composant, et aidez-vous des classes présentes dans ce composant pour l'affichage. Un exemple de visuel est donné dans src (venusaur-card.png).

Vous arrivez à afficher la carte de bulbizarre dans l'app ? Génial ! Passez à l'étape 2

2. Modifiez le composant Card pour le rentre dynamique, en le paramétrant avec les props suivantes :
- id
- name
- sprites.back_default
- sprites.front_default
- type1
- type2

Ensuite, modifiez l'App.js pour que le composant Card prenne les props de Bulbizarre. Une fois cela fait, affichons une seconde carte pour Salamèche !
Voici les infos de Salamèche :

charmander = {
    id: 4,
    name: "charmander",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    }
    types: [
    {
        slot: 1,
        type: {
            name: "fire"
        }
    }
]
}

On remarque que Salamèche n'a qu'un type. Vous pouvez alors lui donner "none" comme valeur de la prop type2.