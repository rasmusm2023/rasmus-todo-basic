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
