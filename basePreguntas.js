let baseDePreguntasNivel1 =[
    {
        pregunta:"¿Cuál es la capital de Ecuador?",
        imagen:"https://imagenes.expreso.ec/files/image_700_402/uploads/2023/09/20/650b0628c14d1.png",
        respuesta: "Quito",
        distractores: ["Esmeraldas", "Bogota", "Carchi"],
        pista: "Ciudad donde se encuenta la mitad del mundo",
        pistaImg:"https://media.istockphoto.com/id/1218071177/es/foto/monumento-a-la-l%C3%ADnea-ecuatorial-quito-ecuador.jpg?s=612x612&w=0&k=20&c=M-0uXbZD4Jt9W-Uz0-3CsLZaXFs-Cbr0_ZqiaxhsTgk=",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 1,
    },
    {
        pregunta:"¿Cuál es el idioma mas hablado del mundo?",
        imagen:"https://humanidades.com/wp-content/uploads/2018/10/idiomas-1-e1582130289252.jpg",
        respuesta: "Ingles",
        distractores: ["Español", "Mandarin", "Portugues"],
        pista: "1,4 billones de persona lo hablan",
        pistaImg:"https://img.remediosdigitales.com/4c48cb/qmxnfjygvkuyqmzqt4qfnj-1200-80/450_1000.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 1,
    },
    {
        pregunta:"¿Cuál es el pais con mas territorio del mundo?",
        imagen:"https://c.files.bbci.co.uk/ABE0/production/_103800044_fig_13_globaldem-ohne-legende_16-9.jpg",
        respuesta: "Rusia",
        distractores: ["China", "Brazil", "Estados Unidos"],
        pista: "País donde se encuentra la catedral de San Basilio",
        pistaImg:"https://www.moscu.net/f/rusia/moscu/guia/moscu-m.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 1,
    },
    {
        pregunta:"¿Dónde se originaron los juegos olímpicos?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/300px-Olympic_rings_without_rims.svg.png",
        respuesta: "Grecia",
        distractores: ["Italia", "Brazil", "España"],
        pista: "Se llaman así porque se celebraban en la ciudad de Olimpia",
        pistaImg:"https://www.panoramagriego.gr/wp-content/uploads/sites/5/2017/07/OLYMPIA_1.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 1,
    },
    {
        pregunta:"¿Quién pintó “la última cena”?",
        imagen:"https://wp.es.aleteia.org/wp-content/uploads/sites/7/2018/03/web3-the-last-supper-public-domain.jpg?w=620&h=348&crop=1",
        respuesta: "Leonardo da Vinci",
        distractores: ["Picasso", "Van Gogh", "Miguel Ángel"],
        pista: "Se encuentra en la pared sobre la que se pintó originalmente, en el refectorio del convento dominico de Santa Maria delle Grazie, en Milán.",
        pistaImg:"https://www.intermundial.es/blog/wp-content/uploads/2016/05/que-ver-en-milan.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 1,
    },
    {
        pregunta:"¿Cuál es el océano más grande?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Oceanus-es.png",
        respuesta: "Océano Pacífico",
        distractores: ["Océano Atlántico", "Océano Ártico", "Océano Índico"],
        pista: "Tiene una superficie total de 165.700.000 km²",
        pistaImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/South_pacific.JPG/250px-South_pacific.JPG",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 1,
    },
    {
        pregunta:"¿Cuáles son los estados de la materia?",
        imagen:"https://concepto.de/wp-content/uploads/2019/04/particulas-la-materia-e1554399662510.jpg",
        respuesta: "Solido, liquido y gaseoso",
        distractores: ["Solido, liquido y gas", "Plasma, liquido y gaseoso", "Solido, rocoso y gaseoso"],
        pista: "El agua puede hallarse en los tres estados",
        pistaImg:"https://www.saguapac.com.bo/wp-content/uploads/2023/05/definicion-del-agua-saguapac-945x630.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 2,
    },
    {
        pregunta:" ¿Cuál es el lugar más frío de la Tierra?",
        imagen:"https://qph.cf2.quoracdn.net/main-qimg-6ee05170c88797d2da38ee2130ce0d27-lq",
        respuesta: "La Antártida",
        distractores: ["Rusia", "Monte Everest", "El pecho de Messi"],
        pista: "Está cubierta de capas con un espesor de entre dos mil y tres mil metros",
        pistaImg:"https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/antartida-hielo_0.jpg?itok=XxY54Hac",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 2,
    },
    {
        pregunta:"¿Quién escribió La Odisea?",
        imagen:"https://static.cegal.es/imagenes/marcadas/9788427/978842722225.gif",
        respuesta: "Homero",
        distractores: ["Leonardo Da Vinci", "Miguel de Cervantes", "Harry Potter"],
        pista: "Tiene el nombre de uno de los personajes mas conocidos de las series animadas",
        pistaImg:"https://imagenes.catholic.net/imagenes_db/3da2fb_homerosimpson.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 2,
    },
    {
        pregunta:"¿Cuál es el río más largo del mundo?",
        imagen:"https://www.ambientum.com/wp-content/uploads/2018/03/amazonas-portada-5-696x468.jpg",
        respuesta: "Nilo",
        distractores: ["Amazonas", "Ganges", "Danubio"],
        pista: "Famoso por su antigua historia y los sitios arqueológicos que se encuentran a lo largo de sus orillas.",
        pistaImg:"https://arqueotrip.com/wp-content/uploads/2018/04/Recorriendo-el-Nilo-02-ArqueoTrip.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 2,
    },
    {
        pregunta:"¿Cuál es el disco más vendido de la historia?",
        imagen:"https://tn.com.ar/resizer/Na2-WDYdQ-vi8aF1ZAoM4VcZdDw=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/I46JENEDG5CK5M7KHHMSNHDDQQ.jpg",
        respuesta: "Thriller",
        distractores: ["The Dark side of the Moon ", "Grease", "Their Greatest Hits"],
        pista: "Fue lanzado el 30 de noviembre de 1982 por Epic Records",
        pistaImg:"https://cdn.smehost.net/epicrecordscom-usepicprod/wp-content/uploads/2021/03/ddg-x-og-slider-866x482.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 2,
    },
    {
        pregunta:"¿En qué se especializa la cartografía?",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-3ZN0kJl5K19oViqSa9c9Hx4hSrYJZBiJA&usqp=CAU",
        respuesta: "Es la ciencia que estudia los mapas",
        distractores: ["Es la ciencia que estudia las palabras", "Es la ciencia que estudia el universo", "Es la ciencia que estudia el clima"],
        pista: "Es la más científica de las artes y la más artística de las ciencias",
        pistaImg:"https://www.automaticaeinstrumentacion.com/images/showid2/4339825?w=900&mh=700",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 2,
    },
    {
        pregunta:"¿Quién invento la Bombilla?",
        imagen:"https://m.media-amazon.com/images/I/519tL20zxrL._AC_UF894,1000_QL80_.jpg",
        respuesta: "Thomas Edison",
        distractores: ["Nicolás Tesla", "Albert Einstein", "Robert Oppenheimer"],
        pista: "En la lámpara incandescente, un conductor eléctrico, en concreto de tungsteno, se calienta mediante una corriente eléctrica hasta ponerlo al rojo blanco",
        pistaImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Zarowa_ubt.JPG/640px-Zarowa_ubt.JPG",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 3,
    },
    {
        pregunta:"¿Según la biblia cual es la persona mas longeva del mundo?",
        imagen:"https://revistavive.com/wp-content/uploads/2020/09/BIBLIA-GRANDE.png",
        respuesta: "Matusalén",
        distractores: ["Moisés", "Abraham", "Adán"],
        pista: "Se lo menciona en el libro de Genesis",
        pistaImg:"https://www.shutterstock.com/image-photo/book-genesis-holy-bible-old-600nw-1843704535.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 3,
    },
    {
        pregunta:"¿Qué tipo de animal es la ballena?",
        imagen:"https://c.files.bbci.co.uk/653B/production/_95151952_mediaitem95151800.jpg",
        respuesta: "Mamífero",
        distractores: ["Anfibio", "Reptil", "Peces Cartilaginosos"],
        pista: "El Oso polar tambien pertenece a este tipo",
        pistaImg:"https://t2.ea.ltmcdn.com/es/posts/2/3/6/donde_viven_los_osos_polares_25632_600.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 3,
    },
    {
        pregunta:"¿Cómo se llama la capital de Mongolia?",
        imagen:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/62619/mongolia-flag-emoji-clipart-md.png",
        respuesta: "Ulan Bator",
        distractores: ["Pekin", "Darjan", "Erdenet"],
        pista: "El cociente intelectual (CI) medio de los habitantes de este país está entre los 10 más altos del mundo",
        pistaImg:"https://cflvdg.avoz.es/sc/480x/default/2023/03/17/00121679065528977694869/Foto/cociente.png",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 3,
    },
    {
        pregunta:"¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?",
        imagen:"https://www.sacyr.com/documents/121856245/122035946/IMG+0+Catedral+de+Par%C3%ADs.jpg/73cc588a-ff00-b572-469e-48300d69163c?t=1693377172226",
        respuesta: "Gótico",
        distractores: ["Barroca", "Renacimiento", "Moderna"],
        pista: "Estilo artístico comprendido entre el románico y el Renacimiento, que se desarrolló en Europa",
        pistaImg:"https://www.e-zigurat.com/storage/1584/conversions/Notre-default-777x388.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 3,
    },
    {
        pregunta:"¿En qué año comenzó la II Guerra Mundial?",
        imagen:"https://cnnespanol.cnn.com/wp-content/uploads/2021/08/140828132531-01-world-war-ii-0828-horizontal-large-gallery.jpg?quality=100&strip=info&w=460&h=260&crop=1",
        respuesta: "1939",
        distractores: ["1936", "1934", "1938"],
        pista: "En ella se vieron implicadas la mayor parte de las naciones del mundo",
        pistaImg:"https://media.baamboozle.com/uploads/images/509123/1634867257_15411.jpeg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 3,
    },
    {
        pregunta:"¿Cómo se llama el hueso más pequeño del cuerpo humano?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Human-Skeleton.jpg/640px-Human-Skeleton.jpg",
        respuesta: "Estribo",
        distractores: ["Fémur", "Yunque", "Martillo"],
        pista: "Está ubicado en el oído y mide alrededor de 3 milímetros",
        pistaImg:"https://centroauditivoestaire.com/images/blog/oidos-sanos-02.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 4,
    },
    {
        pregunta:"¿En qué año llegó Cristóbal Colón a América?",
        imagen:"https://humanidades.com/wp-content/uploads/2023/07/Descubrimiento-de-america-Colon.jpg",
        respuesta: "1492",
        distractores: ["1494", "1490", "1679"],
        pista: "Los barcos fueron La Niña, la Pinta y la Santa María",
        pistaImg:"https://okdiario.com/img/2018/08/06/carabelas-cristobal-colon-655x368.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 4,
    },
    {
        pregunta:"¿En qué lugar del cuerpo se produce la insulina?",
        imagen:"https://allyouneedisbiology.files.wordpress.com/2018/04/03006784cf296c3dc4ac660ca811c41c1.jpg?w=640",
        respuesta: "Páncreas",
        distractores: ["Higado", "Amigdalas", "Cerebro"],
        pista: "Es una hormona polipeptídica, producida y secretada por las células beta de los islotes de Langerhans",
        pistaImg:"https://www.iqlacy.com/wp-content/uploads/2017/08/p%C3%A1ncreas.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 4,
    },
    {
        pregunta:"¿Cómo se llama el animal más rápido del mundo?",
        imagen:"https://t1.uc.ltmcdn.com/es/posts/1/3/7/el_animal_mas_rapido_del_planeta_15731_1_600.webp",
        respuesta: "Guepardo",
        distractores: ["Leopardo", "Jaguar", "Tigre siberiano"],
        pista: "Su velocidad esta entre 80 - 130 km/h",
        pistaImg:"https://www.fuerzaycontrol.com/wp-content/uploads/2012/03/necvelocidad.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 4,
    },
    {
        pregunta:"¿En qué país se encuentra el famoso monumento Taj Mahal?",
        imagen:"https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
        respuesta: "India",
        distractores: ["China", "Egipto", "Japon"],
        pista: "Es un monumento funerario construido entre 1632 y 1654 en la ciudad de Agra",
        pistaImg:"https://www.viajes-india.net/images/blog/tourist-places/agra-city.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 4,
    },
    {
        pregunta:"¿Quién escribió “Hamlet”?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hamlet.jpg/640px-Hamlet.jpg",
        respuesta: "William Shakespeare",
        distractores: ["Stephen King", "Julio Verne", "Mary Shelley"],
        pista: "Conocido en ocasiones como el Bardo de Avon",
        pistaImg:"https://superfan.art/wp-content/uploads/2023/03/VI2-00015-00269-jpg-300x300.webp",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 4,
    },
    {
        pregunta:"¿Cuál de estos planetas es un gigante gaseoso?",
        imagen:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-545864039-1651242098.jpg?resize=980:*",
        respuesta: "Júpiter",
        distractores: ["Sol", "Marte", "Titan"],
        pista: "En el planeta se encuentra la mancha roja",
        pistaImg:"https://www.fosil.cl/wp-content/uploads/2021/12/ManchaRojaJupiter.png",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 5,
    },
    {
        pregunta:"¿Cuál es el único mamífero capaz de volar?",
        imagen:"https://concepto.de/wp-content/uploads/2019/03/mamiferos-portada.jpg",
        respuesta: "Murciélago",
        distractores: ["Águila", "Marsupial", "Buitre"],
        pista: "Su nombre cientifico es Chiroptera",
        pistaImg:"https://www.lifeder.com/wp-content/uploads/2020/06/%C3%A1guila-calva-volando-foto-2-min.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 5,
    },
    {
        pregunta:"¿Qué es más pequeño, un átomo o una molécula?",
        imagen:"https://wp.ccs.org.co/wp-content/uploads/2021/11/shutterstock_1388075891-500x250.jpg",
        respuesta: "Átomo",
        distractores: ["Molécula", "Son del mismo tamaño", "El PSG"],
        pista: "Consiste en un núcleo que contiene protones cargados positivamente y neutrones sin carga",
        pistaImg:"https://imagenes.muyinteresante.es/files/composte_image/uploads/2023/09/30/6517f5f055417.jpeg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 5,
    },
    {
        pregunta:"¿En qué año se aprobó la actual Constitución española?",
        imagen:"https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2018/09/40-anos-de-la-constitucion-espanola-3-759x500.jpg",
        respuesta: "1978",
        distractores: ["1980", "1976", "1979"],
        pista: "Creada para reemplazar a las Leyes Fundamentales del Reino",
        pistaImg:"https://humanidades.com/wp-content/uploads/2023/09/constitucion-espanola.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 5,
    },
    {
        pregunta:"¿Cuántos corazones tienen los pulpos?",
        imagen:"https://www.nationalgeographic.com.es/medio/2022/12/02/los-pulpos-son-unos-maestros-del-camuflaje-gracias-a-los-cromatoforos-y-los-multiples-musculos-que-cubren-su-epidermis_00000000_310b72c2_221202093434_800x800.jpg",
        respuesta: "3 corazones",
        distractores: ["2 corazones", "4 corazones", "6 corazones"],
        pista: "Los pulpos tienen una respiración branquial, es decir, adquieren el oxígeno del agua",
        pistaImg:"https://okdiario.com/img/2019/12/10/cuantos-corazones-tiene-un-pulpo.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 5,
    },
    {
        pregunta:"¿Cuántas estrellas aparecen en la bandera de la República Popular China?",
        imagen:"https://www.worldhistory.org/img/r/p/500x600/949.jpg?v=1685660106",
        respuesta: "Cinco estrellas",
        distractores: ["Cuatro estrellas", "Tres estrellas", "Seis estrellas"],
        pista: "La bandera de la República Popular China es un paño de color rojo que simboliza la revolución",
        pistaImg:"https://img.freepik.com/foto-gratis/templo-sanfeng_181624-37831.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 5,
    },
    {
        pregunta:"¿Qué río atraviesa la ciudad de Benarés?",
        imagen:"https://www.sildaviaviajes.com/wp-content/uploads/2018/07/Benare%CC%81s.jpg",
        respuesta: "El Río Ganges",
        distractores: ["El Río Muerto", "El Río Misuri", "El Río Danubio"],
        pista: "Conocido por sus rituales de cremaciones",
        pistaImg:"https://pasaportenomada.es/wp-content/uploads/2019/06/restos-de-sudario-rio-ganges.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 6
    },
    {
        pregunta:"Cuál es el elemento más abundante de la Tierra?",
        imagen:"https://static.dw.com/image/65962930_804.jpg",
        respuesta: "Oxígeno",
        distractores: ["Hidrogeno", "H2O", "Helio"],
        pista: "Al poner en contacto con el fuego la reaccion química es una explosion",
        pistaImg:"https://www.lavanguardia.com/andro4all/hero/2023/11/explosion-nuclear.png?width=768&aspect_ratio=16:9&format=nowebp",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 6
    },
    {
        pregunta:"¿Qué país se coronó campeón del mundo en 1982?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Selecci%C3%B3_de_futbol_d%27Hondures._Copa_del_M%C3%B3n_de_Futbol_de_1982._%28Alginet%2C_Pa%C3%ADs_Valenci%C3%A0%29.jpg/250px-Selecci%C3%B3_de_futbol_d%27Hondures._Copa_del_M%C3%B3n_de_Futbol_de_1982._%28Alginet%2C_Pa%C3%ADs_Valenci%C3%A0%29.jpg",
        respuesta: "Italia",
        distractores: ["Argentina", "Brasil", "Alemania"],
        pista: "La sede del mundial fue España",
        pistaImg:"https://murciaplaza.com/public/Image/2023/10/cc1f1efe-5198-459e-8e27-9d07d852a94b_alta-libre-aspect-ratio_default_0_NoticiaAmpliada.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 6
    },
    {
        pregunta:"¿Cuál es el libro sagrado del Judaísmo? ",
        imagen:"https://humanidades.com/wp-content/uploads/2018/10/judaismo-5-e1583808695830.jpg",
        respuesta: "La Torá",
        distractores: ["Talmud", "La Biblia", "Corán"],
        pista: "Se refiere a la religión, tradición y cultura del pueblo judío",
        pistaImg:"https://humanidades.com/wp-content/uploads/2018/08/Judaismo-min-e1534255551689.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 6
    },
    {
        pregunta:"¿Cuál es la capital de Islandia?",
        imagen:"https://img.freepik.com/vector-premium/bandera-islandia-es-bandera-nacional-islandia_787540-560.jpg",
        respuesta: "Reikiavik",
        distractores: ["Akureyri", "Vík í Mýrdal", "Egilsstaðir"],
        pista: "Se encuentra en la costa de Islandia",
        pistaImg:"https://guidetoiceland.imgix.net/339496/x/0/que-ver-en-reikiavik-los-mejores-lugares-historicos-artisticos-y-culturales-5?ixlib=php-3.3.0&w=883",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 6
    },
    {
        pregunta:"¿Cuánto duró la guerra de los 100 años?",
        imagen:"https://mihistoriauniversal.com/wp-content/uploads/batalla-azincourt.jpg",
        respuesta: "116 años",
        distractores: ["118 años", "114 años", "110 años"],
        pista: "Fue un conflicto armado entre los reinos de Francia e Inglaterra",
        pistaImg:"https://cdn.pixabay.com/photo/2020/10/18/19/58/flags-5666019_960_720.png",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 6
    },
    {
        pregunta:"¿Cuál es la velocidad de la luz?",
        imagen:"https://www.eltiempo.com/files/image_640_428/uploads/2021/12/29/61cc898ea0ad4.jpeg",
        respuesta: "299 792 458 metros por segundo",
        distractores: ["399 792 458 metros por segundo", "299 792 458 kilometros por segundo", "298 792 458 metros por milisegundos"],
        pista: "Suele aproximarse a  3 x 108 m/s",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 7,
    },
    {
        pregunta:"¿Cuál de los siguientes elementos es el mas predominante en el Sol?",
        imagen:"https://humanidades.com/wp-content/uploads/2018/11/Sol-1-e1582904895390-800x416.jpg",
        respuesta: "Hidrógeno",
        distractores: ["Helio", "Plasma", "Fósforo"],
        pista: "Su átomo está formado por un protón y un electrón",
        pistaImg:"https://www.foronuclear.org/wp-content/uploads/2020/03/hidrogeno-1-854x465.jpg?x69276",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 7,
    },
    {
        pregunta:"¿A qué país pertenece esta bandera?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
        respuesta: "Micronesia",
        distractores: ["Somalia", "Botsuana", "Kosovo"],
        pista: "La moneda oficial es el dolar estadounidense",
        pistaImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/United_States_one_dollar_bill%2C_obverse.jpg/640px-United_States_one_dollar_bill%2C_obverse.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 7,
    },
    {
        pregunta:"¿Con qué nombre se conoce al musculo gastrocnemio?",
        imagen:"https://cerebriti.b-cdn.net/uploads/90d3eaab2c91e3040e6d6e7b36fa45d8.jpg",
        respuesta: "Gemelos",
        distractores: ["Cuadriceps", "Poplíteo", "Femoral"],
        pista: "Los músculos gastrocnemios medial y lateral son músculos con fibras de tipo II, fásicas, blancas",
        pistaImg:"https://www.runners.mx/wp-content/uploads/2022/02/Musculos-de-la-pierna-1.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 7,
    },
    {
        pregunta:"¿Cuál es la edad del Universo?",
        imagen:"https://images.theconversation.com/files/458369/original/file-20220417-16-yd3g0y.png?ixlib=rb-1.1.0&rect=0%2C9%2C3331%2C2806&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        respuesta: "13.800 millones de años",
        distractores: ["13.900 millones de años", "14.800 millones de años", "12.800 millones de años"],
        pista: "Es el tiempo histórico del universo definido por su enfriamiento y expansión desde su densidad singular en la Gran Explosión",
        pistaImg:"https://www.turismodeestrellas.com/m/p/770x410/media/files/4250_pilares.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 7,
    },
    {
        pregunta:"¿Cuál es el país mas grande de África?",
        imagen:"https://t1.uc.ltmcdn.com/es/posts/3/2/7/origen_de_la_palabra_africa_16723_600.jpg",
        respuesta: "Argelia",
        distractores: ["Madagascar", "Etiopía", "R.D. del Congo"],
        pista: "Es un país de África del Norte con una costa en el Mediterráneo y un interior en el desierto del Sahara",
        pistaImg:"https://images.theconversation.com/files/469619/original/file-20220619-21-f5qril.jpg?ixlib=rb-1.1.0&rect=7%2C0%2C4985%2C2350&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 7,
    },
    {
        pregunta:"¿A qué país pertenece esta bandera?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/800px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png",
        respuesta: "San Vicente y las Granadinas",
        distractores: ["Santa Lucía", "San Cristóbal y Nieves", "Maldivas"],
        pista: "Se encuentra al Sur del Caribe",
        pistaImg:"https://www.caribbeannewsdigital.com/sites/default/files/2020-03/si_560_460.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 8,
        imagenGanador:"https://i.ibb.co/TmWjMhY/pngwing-com.png",
    },
    {
        pregunta:"¿Cuál es la estrella más cercana a nuestro Sistema Solar?",
        imagen:"https://www.astrobitacora.com/wp-content/uploads/2016/12/eso1629i.jpg",
        respuesta: "Proxima Centauri",
        distractores: ["Betelgeuse", "Aldebarán", "Sirio"],
        pista: "Se encuentra a unos 4.2 años luz de la Tierra",
        pistaImg:"https://cdn.forbes.com.mx/2022/11/dennis-alvear-perez-XIb5sgUF-kI-unsplash-e1669762211589-640x360.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 8,
        imagenGanador:"https://i.ibb.co/TmWjMhY/pngwing-com.png",
    },
    {
        pregunta:"¿En qué periodo de la historia de la Tierra nos encontramos actualmente?",
        imagen:"https://cadenaser.com/resizer/0vi8hwiiw6-GPbkU728DfuJqRE0=/990x557/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/XT7OGBM5KBMY7FINMB5JY2FCSY.jpg",
        respuesta: "Periodo Cuaternario",
        distractores: ["Periodo Neógeno", "Periodo Paleógeno", "Periodo Pérmico"],
        pista: "Este periodo se encuentra en la Era Cenozoica",
        pistaImg:"https://humanidades.com/wp-content/uploads/2019/04/cenozoico-5-e1588718248611.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 8,
        imagenGanador:"https://i.ibb.co/TmWjMhY/pngwing-com.png",
    },
    {
        pregunta:"¿En qué año se descubrió la Penicilina?",
        imagen:"https://humanidades.com/wp-content/uploads/2019/02/penicilina-1-e1585625447817.jpg",
        respuesta: "1928",
        distractores: ["1938", "1930", "1929"],
        pista: "Las penicilinas son antibióticos del grupo de los betalactámicos empleados en el tratamiento de infecciones provocadas por bacterias sensibles",
        pistaImg:"https://www.infomed.scu.sld.cu/wp-content/uploads/2022/08/Penicilina.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 8,
        imagenGanador:"https://i.ibb.co/TmWjMhY/pngwing-com.png",
    },
    {
        pregunta:"¿Cuál es la masa atómica del plomo?",
        imagen:"https://i3.wp.com/comprahierro.com/wp-content/uploads/2022/02/plomo-como-contaminante-aire.jpg",
        respuesta: "207.2",
        distractores: ["216.7", "198.4", "209.1"],
        pista: "El plomo es un elemento químico de la tabla periódica, cuyo símbolo es Pb y su número atómico es 82",
        pistaImg:"https://conceptodefinicion.de/wp-content/uploads/2017/12/Plomo2.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 8,
        imagenGanador:"https://i.ibb.co/TmWjMhY/pngwing-com.png",
    },
    {
        pregunta:"¿En qué fecha se firmó el acta de Independencia de Estados Unidos?",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/350px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg",
        respuesta: "4 de Julio de 1776",
        distractores: ["28 de Mayo de 1770", "16 de Febrero de 1774", "12 de Octubre de 1492"],
        pista: "Ocurrió entre 1775 y 1783, finalizando con la derrota británica en la batalla de Yorktown y la firma del Tratado de París",
        pistaImg:"https://enciclopediadehistoria.com/wp-content/uploads/2019/07/batalla-de-yorktown.jpg",
        imagenFinalizado: "https://i.ibb.co/L5z84Qj/bmo-bailando.png",
        nivel: 8,
        imagenGanador:"https://i.ibb.co/TmWjMhY/pngwing-com.png",
    },
]


function desordenarArreglo(arreglo) {
    // Utiliza el método sort con una función de comparación aleatoria
    return arreglo.sort(() => Math.random() - 0.5);
}

arrayDesordenado = desordenarArreglo(baseDePreguntasNivel1)
console.log (arrayDesordenado)

// Objeto auxiliar para rastrear objetos seleccionados por nivel
const objetosPorNivel = {};

// Reducir el arreglo original y seleccionar un objeto por nivel
objetosSeleccionados = arrayDesordenado.reduce((result, objeto) => {
  const nivel = objeto.nivel;

  // Verificar si ya se seleccionó un objeto para ese nivel
  if (!objetosPorNivel[nivel]) {
    // Almacenar el objeto para el nivel actual
    objetosPorNivel[nivel] = true;

    // Agregar el objeto al resultado
    result.push(objeto);
  }

  return result;
}, []);

// Ordenar el resultado por el nivel
objetosSeleccionados.sort((a, b) => a.nivel - b.nivel);

// Muestra el resultado en la consola
console.log("Objetos seleccionados por nivel (ordenados):", objetosSeleccionados); 





obtenerNuevasPreguntas(arrayDesordenado, objetosSeleccionados)

// Crear una función para obtener un nuevo conjunto de preguntas sin repetir las ya seleccionadas
function obtenerNuevasPreguntas(preguntasOriginales, preguntasSeleccionadas) {

    const preguntasDisponibles = preguntasOriginales.filter(
        pregunta => !preguntasSeleccionadas.some(selected =>
        selected.pregunta === pregunta.pregunta &&
        selected.respuesta === pregunta.respuesta &&
        pregunta.distractores.every((distractor, index) => distractor === selected.distractores[index])
    )
);

    const preguntasDesordenadas = desordenarArreglo(preguntasDisponibles);

    const objetosPorNivel = {};
    const nuevasPreguntasSeleccionadas = preguntasDesordenadas.reduce((result, pregunta) => {
        const nivel = pregunta.nivel;

        if (!objetosPorNivel[nivel]) {
        objetosPorNivel[nivel] = true;
        result.push(pregunta);
        }

        return result;
    }, []);

    return nuevasPreguntasSeleccionadas.sort((a, b) => a.nivel - b.nivel);
}

// Obtener un nuevo conjunto de preguntas sin repetir las ya seleccionadas
objetosSeleccionadosNuevo = obtenerNuevasPreguntas(baseDePreguntasNivel1, objetosSeleccionados);

// Mostrar el resultado en la consola
console.log(objetosSeleccionadosNuevo);


arregloCombinado = objetosSeleccionados.concat(objetosSeleccionadosNuevo);
console.log(arregloCombinado);
