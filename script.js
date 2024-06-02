document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    var playSoundButton = document.getElementById('playSoundButton');
    var firstPopup = true;

    startButton.addEventListener('click', startApplication);
    playSoundButton.addEventListener('click', playRandomSound);

    function startApplication() {
        startButton.style.display = 'none'; // Cacher le bouton "Commencer" une fois cliqué
        playSoundButton.style.display = 'block'; // Afficher le bouton "Appuyez sur moi"
        afficherMessageAleatoire();
        setInterval(afficherMessageAleatoire, 360000); // 360000ms = 6 minutes
    }

    var messages = [
        { 
            type: "youtube",
            videoId: "KGKT2LBdxL8",
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé."
        }, 
        { 
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé.", 
            type: "youtube",
            videoId: "lrBiJyB2VwE"
        },
        { 
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé.", 
            type: "youtube",
            videoId: "UXxnTkmMsAM"
        },
        { 
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé.", 
            type: "youtube",
            videoId: "PwkSm9yTYGM"
        },
        { 
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé.", 
            type: "youtube",
            videoId: "F3pga_nCXNg"
        },
        { 
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé. ?", 
            type: "youtube",
            videoId: "v_TnZzL_wpc"
        },
        { 
            text: "Si vous souhaitez continuer de jouer avec Ragnar, gardez votre écran allumé.", 
            type: "youtube",
            videoId: "aq2rI0ETyk4"
        }
    ];

    // Lien Vimeo
    var vimeoSounds = [
        '<iframe src="https://player.vimeo.com/video/952807178?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="width:100%;height:100%;"></iframe>',
        '<iframe src="https://player.vimeo.com/video/952801411?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="width:100%;height:100%;"></iframe>',
        '<iframe src="https://player.vimeo.com/video/952802634?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="width:100%;height:100%;"></iframe>',
        '<iframe src="https://player.vimeo.com/video/952807178?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="width:100%;height:100%;"></iframe>',

    ];

    function afficherMessageAleatoire() {
        var messageIndex = Math.floor(Math.random() * messages.length);
        var message = messages[messageIndex];

        var popup = document.getElementById('popup');
        popup.innerHTML = ""; // Effacer le contenu précédent du popup

        // Ajouter l'image sauf pour le premier popup
        if (!firstPopup) {
            var image = document.createElement('img');
          
            image.id = 'popupImage';
            popup.appendChild(image);
        } else {
            firstPopup = false;
        }

        if (message.type === "youtube") {
            var youtubeIframe = document.createElement('iframe');
            youtubeIframe.src = "https://www.youtube.com/embed/" + message.videoId + "?autoplay=1";
            youtubeIframe.style.width = "100%";
            youtubeIframe.style.height = "100%";
            youtubeIframe.setAttribute("frameborder", "0");
            youtubeIframe.setAttribute("allow", "autoplay; fullscreen");
            youtubeIframe.setAttribute("title", "YouTube video");

            // Ajouter la vidéo au popup
            popup.appendChild(youtubeIframe);
        } else if (message.type === "audio") {
            // Optionnel: Gérer la lecture d'audio
        }

        // Ajouter le texte du popup à la page
        var popupText = document.createElement('div');
        popupText.textContent = message.text;
        popup.appendChild(popupText);

        // Afficher le popup
        popup.style.display = 'block';
        popup.classList.add('bounceIn');

        // Ne pas masquer le popup automatiquement
    }

    function playRandomSound() {
        var soundIndex = Math.floor(Math.random() * vimeoSounds.length);
        var sound = vimeoSounds[soundIndex];
        // Créer un iframe pour charger le lien Vimeo
        var vimeoIframe = document.createElement('div');
        vimeoIframe.innerHTML = sound;
        vimeoIframe.style.position = 'absolute';
        vimeoIframe.style.left = '-9999px';
        document.body.appendChild(vimeoIframe);
    }
    
});
