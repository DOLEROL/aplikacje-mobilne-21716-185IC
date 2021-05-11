# aplikacje-mobilne-21716-185IC Lab6 - obsługa obrazów + tryb offline

## kod programu

## 1) Kod pliku components/Home.js
### Wczytanie obrazków za pomocą `require()`, oraz `uri`.

![Alt Text](pliki/kod/obr1.png)

## 2) Kod pliku components/Page1.js
### Użycie komponentu `slider` do zmiany rozmiaru obrazka.

![Alt Text](pliki/kod/obr2.png)

## 3) Kod pliku components/Page2.js
### Użycie lazy do 'leniwego' wczytywania obrazków oraz ikon.

![Alt Text](pliki/kod/obr3.png)

## 4) Kod pliku components/Page3.js
### Detekcja lączności, w zależności od stanu wyświetla komunikat `Connected` lub `Not Connected`

![Alt Text](pliki/kod/obr4.png)

## 5) Kod pliku components/Page4.js
### Obsługa zapisu danych za pomocą `async-storage`

![Alt Text](pliki/kod/obr5.png)

## 6) Kod pliku components/Page5.js
### Synchronizacja danych. W zależności od stanu połączenia, zostaje wyświetlona odpowiednia treść.

![Alt Text](pliki/kod/obr6.png)


## przykład działania aplikacji
### Strona startowa: Wyświetlone zostają 2 obrazki za pomocą 2 różnych metod.

![Alt Text](pliki/app/obr1.jpg)

### Druga strona: Zmiana rozmiaru obrazka, za pomocą suwaka.

![Alt Text](pliki/app/obr2.jpg)

![Alt Text](pliki/app/obr3.jpg)

### Trzecia strona: 'leniwe' ładowanie obrazka i ikon (nie są zbyt ciężkie, nie dało się uchwycić procesu ładowania).

![Alt Text](pliki/app/obr4.jpg)

### Czwarta strona: Urządzenie posiada połączenie, zostaje wyświetlony odpowiedni komunikat.

![Alt Text](pliki/app/obr5.jpg)

### Piąta strona: Wprowadzenie tekstu do input'a i wciśnięcie przycisku `OK` spowoduje przechowanie tekstu, wciśnięcie przcisku `PRESS` spowoduje wyświetlenie przechowywanego tekstu.

![Alt Text](pliki/app/obr6.jpg)

### Ostatnia strona: W zależności od stanu połączenia, zostanie wyświetlona odpowiednia treść.

![Alt Text](pliki/app/obr7.jpg)