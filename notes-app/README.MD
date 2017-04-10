# Zadanie konkursowe

## Wykonane zadania i ewentualne uwagi

- [x] Przycisk usuwania notek
- [x] Dodanie pola _Due date_ - wyświetlanie na liście notatek + w szczegółach: Tutaj pozwoliłem sobie skorzystac z biblioteki _moment.js_ aby wygodniej było pracować z datą i bardziej elegancko wyświetlac wyniki.

- [x] Możliwość ustawiania priorytetów i ich wyświetlanie na liście i w szczegółach: Przyjąłem, że priorytety będą wartościami liczbowymi od 1 do 5.

- [x] Filtrowanie po tytule, due date, priorytetach: Utworzyłem nowy komponent, do którego przekazywana jest zawsze oryginalna lista notek, a wychodzi z niego odfiltrowana lista. Wydaje mi się, że rozwiązanie nie jest optymalne i na pewno możnaby to zrobić lepiej. W mojej implementacji korzystając z biblioteki _lodash_ filtruję listę notatek wedle podanych kryteriów za każdym razem kiedy, w którymś z nich nastąpi zmiana. W przypadku wyszukiwania po due date szukamy po okresie czasu, gdzie `start` to data początkowa (godzina ustawiona na 00:00:00), a `end` to data końcowa (godzina ustawiona na 23:59:59 - w ten sposób jeśli ustawimy ten sam dzień w `start` i `end` to wyszukiwanie obejmie cały dzień). Jeżeli po przefiltrowaniu listy klikniemy znowu przycisk **Filter**, lista notatek wróci do swojego pierwotnego stanu.

- [x] Wyróżnienie notatek z: due date na jutro, najwyższym priorytetem: Dobrym rozwiązaniem wydało mi się dodanie odpowiednich ikonek do wyróżnionych notatek na liście. Ikonka pioruna oznacza, że notatka ma najwyższy priorytet (wartość 5), a ikonka zegara oznacza, że due date notatki minie w mniej niż 24 godziny.

- [x] Przycisk cancel przy dodawaniu notatki

- [x] Edycja notatki - Tutaj napotkałem najwięcej problemów. Również przez to, że nie chciało mi się po bożemu rozbić formularza na dwa komponenty - od tworzenia nowej notatki i edycji istniejącej. Po odpowiednim refactoringu zapewne możnaby to zrobić również za pomocą jednego komponentu. Jednakże dalej występuje drobny bug, do naprawienia którego najlepiej wydzielić nowy komponent lub zastosować jakieś dirty hacki typu dołożenie settera z logiką do pola zaadnotowanego @Input (no to raczej dobry pomysł nie jest). Mianowicie chodzi o to, że jeśli już jesteśmy w trybie edycji i klikniemy w ikonkę edycji na dowolnej notatce z listy, to w komponencie nie odświeży się obiekt będący edytowaną notatką, ponieważ nie odpali się ponownie metoda `ngOnInit`. Gdyby formularz edycji był osobnym komponentem to przekazany mu obiekt byłby od razu zupdatowany i nie byłoby takiego problemu. Niestety nie mam już czasu na dalszą pracę nad tym zadaniem toteż zostawiam jak jest.
