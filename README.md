## Krav för Godkänt (G):


#### JSON-fil med frågor:
Skapa en JSON-fil med minst 5 frågor, varje fråga med svarsalternativ och rätt svar. Exempel nedan:
```[
  { question: "Vad är 2+2?", options: [2, 4, 5], answer: 4 },
  {
    question: "Vilken färg har himlen?",
    options: ["Blå", "Grön", "Röd"],
    answer: "Blå",
  },
]
```
#### Styling:
Eran webapplikation ska ha någon form av styling, se inspiration längre ned.
#### Dynamisk inladdning:
Använd förslagsvis fetch för att ladda JSON-filen och visa frågorna en i taget i webbläsaren.
#### Interaktivitet:
Användaren ska kunna välja ett svarsalternativ och få direkt återkoppling (ex. "Rätt!" eller "Fel!").
#### Poängsystem:
Lägg till ett poängsystem som visar användarens totalpoäng när spelet är klart.
#### Hosting:
Lägg upp den färdiga webbapplikationen på Netlify. Du får välja mellan Drag ‘N drop eller repository linking.



## Krav för Väl Godkänt (VG):


#### SPA:
Webappen har endast ett HTML-dokument och ett element: ```<div id="root"></div>```

Använd JS för att injecta HTML element i samma dokument eller använd ett ramverk. Detta är för att utmana er från att bygga MPAer. Exempel nedan:


```<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exempel</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="main.js"></script>
</body>

</html>
```

#### Tidsbegränsning:
Ge användaren 10 sekunder per fråga. Om tiden går ut, ska nästa fråga visas automatiskt.
#### Val & tillgänglighet:
- Lägg till möjlighet att spela om quizen eller visa rätt svar efter varje fråga.

 - Responsiv design så att spelet fungerar plattformsoberoende.
