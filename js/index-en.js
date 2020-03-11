$(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var x = -100;
    var y = 284;
    var z = 4;
    var xRectangle = 650;
    var yRectangle = 90;
    var xProfond = 720;
    var yProfond = 300;
    var largeurTableau = 300;
    var hauteurTableau = 220;
    var couleur = 'yellow';
    var couleur2 = 'green';
    var ombre = 'black';
    var taille = 200;
    var police = 'Arial';
    var saisie;
    var aleatoire;
    var minuscule;
    var accents;
    var fin = false;
    var vitesse = 3;
    var bonneReponse = 0;
    var mauvaiseReponse = 0;
    var pause = false;
    var play;
    var tableauLettres = [];
    var lettreAnimee = 'Z';
    var animationID;
    var compteRebour = 3;
    var profondX = 5.5;
    var profondY = 5.5;
    var profondeur = 15;
    var agrandissement = 45;
    var hTab = 0;
    var repTabs = [];
    var corrTabs = [];
    var iconeX = 10;
    var iconeY = 363;
    var iconeLettreX = 20;
    var iconeLettreY = 410;
    var LettreX;
    var lettres = ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'à', 'â', 'ä', 'é', 'è', 'ê', 'ë', 'ï', 'î', 'ô', 'ö', 'û', 'ü', 'ç'];
    var lettre = 'p';
    var compteur = 0;
    var compteurCouleur = 0;
    var compteurCouleur2 =0;
    var depart;
    var hauteur = false;
    var nuanceGris = ['rgb(100, 100, 100)', 'rgb(140, 140, 140)', 'rgb(180, 180, 180)', 'rgb(220, 220, 220)'];
    var couleurListe = ['#ffff00', '#bf00ff', '#ff00ff', '#ff0040', '#ff8000', '#ffbf00', '#0040ff', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#ff4000', '#ff00bf', '#00ffff', '#00bfff', '#0080ff',  '#0000ff', '#ff0080', '#4000ff', '#8000ff'];

    var listeCouleur = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate','Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenrod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'Goldenrod', 'GreenYellow', 'Honeydew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenrodYellow', 'LightGreen', 'LightGrey', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'MediumAquamarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenrod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'Seashell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];

    var coordX = [62, 132, 202, 272, 342, 412, 482, 552, 622, 692, 762, 832, 902, 62, 132, 202, 272, 342, 412, 482, 552, 622, 692, 762, 832, 902, 27, 97, 167, 237, 307, 377, 447, 517, 587, 657, 727, 797, 867, 937];
    
    var coordY = [430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 430, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 570, 570, 570, 570, 570, 570, 570, 570, 570, 570, 570, 570, 570, 570];

    function lettrePleine (mot, xLettre, yLettre, taille, police, couleur) {
        var tailPol = taille + 'px ' + police;
        ctx.font = tailPol;
        ctx.fillStyle = couleur;
        ctx.fillText(mot, xLettre, yLettre);
    }

    function lettreVide (mot, xLettre, yLettre, taille, police, couleur) {
        var tailPol = taille + 'px ' + police;
        ctx.font = tailPol;
        var largText = ctx.measureText(mot);
        LettreX = xProfond + Math.ceil((largeurTableau - largText.width) / 2);
        ctx.strokeStyle = couleur;
        ctx.strokeText(mot, xLettre, yLettre);
    }

    function rectangle (rx, ry, rw, rh, couleur) {
        ctx.beginPath();
        ctx.rect(rx, ry, rw, rh);
        ctx.fillStyle = couleur;
        ctx.fill();
        ctx.closePath();
    }

    function rectangleVide (rx, ry, rw, rh, couleur) {
        ctx.beginPath();
        ctx.lineWidth = 2;    
        ctx.strokeStyle = couleur;
        ctx.rect(rx, ry, rw, rh);
        ctx.stroke();
    }

    function deplacerX () {
        if (pause) {            
            dessinerCroix();
            //on fait une pause
        } else {
            if (x >= LettreX + 16) {
                analyse();
            }
            else {
                x = x + vitesse;
            }
        }
    }

    function deplacerY () {
        if(hauteur) {
            y = y + 20;
            if(y > 284) {
                y = 284;
            }  
        } else {
            y = y - 20;
            if(y < 184){
                hauteur = true;
            }
        } 
    }    

    function analyse () { 
        if (lettre == saisie) {
            pause = true;
            z = 0;
            bonneReponse++; //Afficher une image bravo!!
            repTabs.push(lettre);
            corrTabs.push('rgb(30, 255, 0)');
            setTimeout(function () {                
                z = 4;
                x = -100;
                saisie = false;                
                pause = false;
                y = 284;
                hauteur = false;
                tireLettre();
            }, 500);
        }
        else {
            mauvaiseReponse++;//Afficher une image perdu!!
            pause = true;
            repTabs.push(lettre);
            corrTabs.push('red');
            setTimeout(function () {
                x = -100;
                saisie = false;
                pause = false;
                y = 284;
                hauteur = false;
                tireLettre();                
            }, 500);
        }
    }

    function choixCouleur () {
        if (compteurCouleur >= couleurListe.length) {
            compteurCouleur = 0;
        }
        couleur = couleurListe[compteurCouleur];
        compteurCouleur++;  
    }

    function choixCouleur2 () {
        if (compteurCouleur2 >= listeCouleur.length) {
            compteurCouleur2 = 0;
        }
        couleur2 = listeCouleur[compteurCouleur2];
        compteurCouleur2++;  
    }

    function lettre3D () {
        var xom = x + z;
        var yom = y;
        while (xom > x) {
            lettrePleine(saisie, xom, yom, taille, police, ombre);
            xom--;
            yom++;
        }
        lettrePleine(saisie, xom, yom, taille, police, couleur);   
    }

    function rectangle3D (x3d, y3d, z3d, w3d, h3d, colf, col3d) {
        var xom3d = x3d + z3d;
        var yom3d = y3d;
        while (xom3d > x3d) {
            rectangle(xom3d, yom3d, w3d, h3d, col3d);
            xom3d--;
            yom3d++;
        }
        rectangle(x3d, yom3d, w3d, h3d, colf);
    }

    function icone () {
            for(var a = 0; a < repTabs.length; a++) {
                var ind = lettres.indexOf(repTabs[a].toLowerCase());
                rectangle (coordX[ind] + 3, coordY[ind] - 48, 63, 63, 'white');
                rectangleVide (coordX[ind] + 3, coordY[ind] - 48, 63, 63, corrTabs[a]);
                //lettrePleine (repTabs[a], coordX[ind], coordY[ind], 50, police, corrTabs[a]);
                ctx.font = '50px Arial';
                var largrep = Math.ceil((66 - ctx.measureText(repTabs[a]).width) / 2);
                //console.log(largrep);
                ctx.fillStyle = corrTabs[a];
                ctx.fillText(repTabs[a], coordX[ind] + largrep, coordY[ind]);
            }
    }

    function patience () {
        var intervalle =  setInterval(function () {
            if (compteRebour == 1) {
                depart = true;
                clearInterval(intervalle);
            tireLettre();
            }
            compteRebour--;
        }, 1000);
    }

    function dessinerCroix () {
        if(z == 0) {

        } else {
        ctx.lineWidth = 15;
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(710, 120);
        ctx.lineTo(880, 300);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(880, 120);
        ctx.lineTo(710, 300);
        ctx.stroke(); 
        }
    }

    function lettreProfonde (mot, xLettre, yLettre, taille, police, prox, proy, grossi, proZ) {
        var xProf = xLettre;
        var yProf = yLettre;
        var tailProf = taille + grossi;
        var indexColor = nuanceGris.length;
        while (indexColor > 0) {
            indexColor--;
            lettrePleine(mot, xProf, yProf, tailProf, police, nuanceGris[indexColor]);
            xProf = xProf + prox;
            yProf = yProf - proy;
            tailProf = tailProf - proZ;
        }
    }

    function tireLettre () {
        //////// aléatoire
        if (aleatoire == 1) {
            if (accents == 1) { // aléatoire et minuscule et accent
                var indexLet = Math.floor(Math.random() * (tableauLettres.length - 1)) + 0;
                if (tableauLettres[indexLet]) {
                    lettre = tableauLettres[indexLet];
                    tableauLettres.splice(indexLet, 1);
                } else {
                    fin = true;
                }
            } else {
                var indexLet = Math.floor(Math.random() * (tableauLettres.length - 1)) + 0;
                if (tableauLettres[indexLet]) {
                    if (minuscule == 1) { // aléatoire et minuscule
                        lettre = tableauLettres[indexLet]; 
                    } else { // aléatoire et majuscule
                        lettre = tableauLettres[indexLet].toUpperCase(); 
                    }                         
                    tableauLettres.splice(indexLet, 1);
                } else {
                    fin = true;
                }
            }
            ///// Minuscule ordonnée
        } else if (minuscule == 1) {
            if (accents == 1) { //lettre accentué ordonné
                if (tableauLettres[compteur]) {
                    lettre = tableauLettres[compteur];
                    compteur++;
                    } else {
                        fin = true;
                    }
            } else { //sans lettre accentué ordonné
                if (tableauLettres[compteur]) {
                lettre = tableauLettres[compteur];
                compteur++;
                } else {
                    fin = true;
                }
            }
        }
        ///////// Majuscule ordonnée
        else {
            if (tableauLettres[compteur]) {
                lettre = tableauLettres[compteur].toUpperCase();
                compteur++;
            } else {
                fin = true;
            }
        }
        //preparation avant affichage lettre
        choixCouleur();
        var tailPol = taille + 'px ' + police;
        ctx.font = tailPol;
        var largText = ctx.measureText(lettre);
        LettreX = 635 + Math.ceil((largeurTableau - largText.width) / 2);
    }

    // Fonction principale
    function principale () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (depart) {
            if(fin) {
                //A la fin du jeu
                rectangle3D(200, 60, 7, 600, 300, 'rgb(224, 245, 243)', 'grey');
                lettrePleine ('GAME OVER !', 250, 150, 80, police, 'orange');
                lettrePleine ('Right answer : ' + bonneReponse, 250, 230, 40, police, 'green');
                lettrePleine ('Wrong answer : ' + mauvaiseReponse, 250, 280, 40, police, 'red');
                icone();
                cancelAnimationFrame(animationID);
            } else {
                //affiche le tableau
                rectangle3D(xRectangle, yRectangle, 7, largeurTableau, hauteurTableau + hTab, 'rgb(224, 245, 243)', 'grey');
                //affiche lettre à saisir
                lettreProfonde (lettre, LettreX, yProfond, 200, police, profondX, profondY, agrandissement, profondeur);
                
                if (saisie) { 
                    //deplacerY();                   
                    lettre3D();//Affi la lettre saisie ... sinon
                } else {                    
                    rectangle3D(x, y - 160, 40, 150, 150, 'white', couleur);//cube à lettre
                    lettrePleine (lettreAnimee, x+25, y+20, 150, police, couleur2);
                }
                //deplacer du box et de la lettre
                deplacerX();
                // Info Score
                rectangle (715, 20, 220, 50, 'bisque');
                lettrePleine ('Answer : Good | Bad', 720, 40, 16, police, 'DarkBlue');
                lettrePleine (bonneReponse, 820, 65, 20, police, 'blue');
                lettrePleine (mauvaiseReponse, 880, 65, 20, police, 'red');
                icone();
            }
        } 
        else {
        lettrePleine(compteRebour, 450, 300, 250, police, 'green');
        }
        //repète l'animation
        animationID = requestAnimationFrame(principale);
    }

    //Lancement du jeu
    jQuery('#bouton').click(function () {
        if (play) {
            cancelAnimationFrame(animationID);
        } 
        jQuery(this).val('Restart');
        x = -100;
        bonneReponse = 0;
        mauvaiseReponse = 0;
        compteur = 0;
        fin = false;
        compteRebour = 3;
        jQuery('#graduation').html(vitesse);
        aleatoire = parseInt(jQuery('#ordre:checked').val()); 
        minuscule = parseInt(jQuery('#minuscule:checked').val());
        accents = parseInt(jQuery('#type:checked').val());
        tableauLettres = lettres.slice(0, 26);
        hTab = 0;
        if(accents == 1) {
            tableauLettres = lettres.slice(0, 41);
        }
        if (minuscule) {
            profondeur = 15;
            profondX = 4;
            profondY = 4;
            agrandissement = 45;
            hTab = 40;
        }
        depart = false;
        play = true;
        repTabs = [];
        corrTabs = [];    
        principale();
        patience();
        //tireLettre();
    });

    setInterval(function () {
        choixCouleur2();
        var indique = Math.floor(Math.random() * (lettres.length - 1)) + 0;
        lettreAnimee = lettres[indique].toUpperCase();
    } , 200);

    document.addEventListener('keydown', function (event) {
        if (event.keyCode > 32 && event.keyCode < 127) {
            saisie = event.key;
            choixCouleur ();
        }
    });
    jQuery('#graduation').html(vitesse);
    jQuery('#vitesse').val(vitesse);
    jQuery('#vitesse').mousemove(function () {
        vitesse = parseInt(jQuery('#vitesse').val());
        jQuery('#graduation').html(vitesse);
    });
    jQuery('#minuscule').click(function () {
        if (jQuery('#type').prop('disabled')){jQuery('#type').prop('disabled', false);}
        else {jQuery('#type').prop('disabled', true).prop('checked', false);}
    }); 
    jQuery('#propos').click(function () {
        jQuery('#bulle').toggle(400);
    });
});