CONSEGNA
Ricreate un carosello, ma questa volta usando un array di oggeti.

Ogni slide è rappresentata da un oggetto contenente:
percorso immagine
titolo
descrizione


MILESTONE #0
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilizzare lo slider.

//costruzione tramite html per vedere lo scheletro della slide e classi da utilizzare

MILESTONE #1
Ora rimuoviamo i contenuti statici dall'HTML.
Costruiamo noi delle slide da aggiungere in pagina tramite un ciclo sul nostro array.

//commento la card in html per poterla poi ricreare tramite JS
//inserieìsco la card creata precedentemente in un ciclo (pensa a quale) che mi stampi un tot numero di carte in base al numero di OGGETTi che ho


MILESTONE #2
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//creo dei pulsanti che mi facciano andare avanti e indietro nelle slide come nell'esercizio del carosello

MILESTONE #3
Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.

//idem milestone 2


:regalo: BONUS #1
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
:regalo: BONUS #2
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
:regalo: BONUS #3
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.