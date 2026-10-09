1. Frågor om koden (ca 2–4 meningar per fråga)

## State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

Appen håller reda på uppgifterna med useState, som lagrar en array av objekt där egenskapen done visar om uppgiften är klar. När datan ändras skapar vi en ny array och skickar den till setTodos. React ser att state har ändrats, renderar om komponenten och uppdaterar gränssnittet, till exempel färg och genomstrykning i TodoItem och antalet i TodoHeader.

## Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

Man får inte använda .push() eftersom den muterar den befintliga arrayen. Referensen förblir densamma, så React uppfattar det inte som en ändring och renderar inte om. Istället skapar vi en ny array. När vi lägger till en uppgift använder vi spread: setTodos(currentTodos => [...currentTodos, { id: Date.now(), title, done: false }]). När vi tar bort en uppgift använder vi .filter(): setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id)).

2. Kodgranskning

## Nedan är en funktion från en annan utvecklares lösning. Klistra inte in den i din app, utan förklara i din README vad som är felaktigt med koden i ett React-sammanhang och hur du skulle skriva om den för att den ska bli korrekt:

```js
function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
```

Svar: Funktionen använder .push(), som muterar den ursprungliga arrayen och returnerar samma referens. React ser då ingen förändring och renderar inte om, så gränssnittet uppdateras inte. Dessutom läggs en ren sträng in istället för ett objekt med id, title och done. Jag skulle istället skapa en ny array med spread och uppdatera state via setTodos, som i koden nedan:

```js
function addTodo(title) {
  setTodos((currentTodos) => [
    ...currentTodos,
    { id: Date.now(), title, done: false },
  ]);
}
```

3. Problemlösning & Reflektion (3–5 meningar)

## Hur gjorde du när du körde fast eller stötte på ett problem? Om du använde verktyg som AI, Google eller React-dokumentationen: ge ett konkret exempel på hur du tog hjälp för att förstå och lösa problemet själv.

När jag körde fast så tittade jag antingen på egen gammal kod för att förstå hur jag kunde gå vidare. Ifall inte det hjälpte så samarbetade jag med AI genom att skicka in min kod och be den rekommendera lösningar som passade. Jag granskade sedan AI's svar och rekommendationer och gick vidare med den lösning jag upplevde var bäst och som fungerade.

Exempelvis så bad jag AI om designråd för att göra appen mer intressant, där jag då bad om en massa olika features. Jag fick tillbaka en snygg och häftig version av todo-appen men det hade varit svårt för mig att förklara och äga koden eftersom jag inte skrivit den själv, utan bara ägt prompts som lett fram till designen. Därav valde jag att klona ett nytt repo från en commit där jag ägt hela koden, och lämnade AI's design i ett eget repo.

Jag hade också ett bekymmer med att line-through applicerades på både todo.title och "X" (alltså delete-knappen) eftersom det också var text som låg i <li>. Efter att ha testat att ändra om i koden och klasserna så frågade jag AI om hjälp att lösa det specifika problemet, och då skrev den att jag ska lägga todo.title i en helt egen <span> och applicera line-through på endast det elementet istället för på hela <li>.
