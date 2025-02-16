
        functionmostrarCantada() {
            constcantadas = {
                "Romântica": [
                    { text: "Você é a razão pela qual meu coração bate mais rápido!", img: "274295614b1f1971b08ab25420222b6a.jpg" }
                ],
                "Nerd": [
                    { text: "Você não é a vampira do X-Men, mas já tirou o meu ar só de passar do meu lado!", img:"97c44e9a5ebfac3397fb3ac1d713133b.jpg"},
                   
                ],
                "Engracada": [
                    { text: "Gata, me passa seu Twitter? É que minha mandou falou para eu seguir meus sonhos", img: "Twitter-3.jpg" },
                ]
            };

            constcategoria = document.getElementById("categoria").value;
            constindex = Math.floor(Math.random() * cantadas[categoria].length);
            constcantada Elemento = document.getElementById('cantada');
            constimagem Elemento = document.getElementById('imagem');
            
            cantada Elemento.innerText = cantadas[categoria][index].text;
            cantada Elemento.classList.remove('hidden');
            
            imagem Elemento.src = cantadas[categoria][index].img;
            imagem Elemento.classList.remove('hidden');
        }
    
