// Sélection des éléments du slider et des boutons "next" et "prev"
let items = document.querySelectorAll('.slider .item');                  // Déclaration de la variable items et affectation au div .slider et .item
let next = document.getElementById('next');                              // Button next
let prev = document.getElementById('prev');                              // Button prev (previous)

// Définition de l'élément actif initial
let active = 3;                                                          // L'élément actif au premier plan sera par défaut la slide 4 (0,1,2,3).

// Fonction pour mettre à jour l'affichage du slider
function loadShow() {
    let stt = 0;                                                          // index à 0

    // Réinitialisation des styles de l'élément actif
    items[active].style.transform = `none`;                               // Pas de changement sur l'axe X (horizontal). L'élément est centré.
    items[active].style.zIndex = 1;                                       // Image au premier plan, profondeur
    items[active].style.filter = 'none';                                  // Pas de filtre flou sur l'élément actif
    items[active].style.opacity = 1;                                      // Réinitialisation opacité sur l'élément actif (opacité à 1)

    // Animation des éléments à droite de l'élément actif
    for (let i = active + 1; i < items.length; i++) {                     // Boucle for qui opère les transformations sur les slides à droite de l'élément actif
        stt++;                                                            // index
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;  // déplacement de 120px sur l'axe X (à droite)
        items[i].style.zIndex = -stt;                                      // changement de profondeur sur l'axe Z
        items[i].style.filter = 'blur(5px)';                               // filtre blur de 5px
        items[i].style.opacity = stt > 2 ? 0 : 0.6;                        // changement d'opacité
    }

    stt = 0;

    // Animation des éléments à gauche de l'élément actif
    for (let i = active - 1; i >= 0; i--) {                                // Boucle for qui opère les transformations sur les slides à gauche de l'élément actif 
        stt++;                                                             // incrémentation de l'index
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;   // déplacement de -120px sur l'axe X (à gauche)
        items[i].style.zIndex = -stt;                                      // changement de profondeur sur l'axe Z
        items[i].style.filter = 'blur(5px)';                               // filtre blur de 5px
        items[i].style.opacity = stt > 2 ? 0 : 0.6;                        // changement d'opacité
    }
}

// Appel initial de la fonction pour charger l'affichage
loadShow();                                                               // Charge l'affichage

// Gestionnaire d'événement pour le bouton "next"
next.onclick = function () {                                              // Déclenchement fonction au clic du boutton droit (next)
    active = active + 1 < items.length ? active + 1 : active;             // Changement de slide active + 1 (défilement vers la droite)
    loadShow();                                                           // appel fonction qui recharge l'affichage des slides en opérant les transformations des slides parallèles
}

// Gestionnaire d'événement pour le bouton "prev"
prev.onclick = function () {                                               // Déclenchement fonction au clic du boutton gauche (prev)
    active = active - 1 >= 0 ? active - 1 : active;                        // Changment de slide active - 1 (défilement vers la gauche)
    loadShow();                                                            // appel fonction de transformation des slides parallèles à la slide active
}
