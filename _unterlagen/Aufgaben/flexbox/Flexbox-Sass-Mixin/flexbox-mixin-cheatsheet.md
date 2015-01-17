# Cheatsheet Flexbox-Mixin

## Flexbox-Umgebung erstellen

	@include flexbox;

## Inline-Flexbox-Umgebung erstellen

	@include inline-flex;

## In welche Richtung fliessen die Flex-Items? | [Spec](http://w3.org/tr/css3-flexbox/#flex-direction-property)

	@include flex-direction(row);

- Values: row | row-reverse | column | column-reverse

## Eine Zeile oder mehrere? | [Spec](http://w3.org/tr/css3-flexbox/#flex-wrap-property)

	@include flex-wrap(nowrap);

- Values: nowrap | wrap | wrap-reverse

## Die Reihenfolge kontrollieren | [Spec](http://w3.org/tr/css3-flexbox/#order-property)

	@include order(0);

## Wie stark soll ein Flex-Item im Vergleich zu den anderen wachsen können? | [Spec](http://w3.org/tr/css3-flexbox/#flex-grow-property)

	@include flex-grow(0);

## Wie stark soll ein Flex-Item im Vergleich zu den anderen schrumpfen können? | [Spec](http://w3.org/tr/css3-flexbox/#flex-shrink-property)

	@include flex-shrink(1);

## Einem Flex-Item eine Breite geben | [Spec](http://w3.org/tr/css3-flexbox/#flex-basis-property)

	@include flex-basis(auto);

- Jede Art von Breite. Am sinnvollsten sind sicherlich Prozentwerte.

## Ausrichtung an der Hauptachse (main-axis) | [Spec](http://w3.org/tr/css3-flexbox/#justify-content-property)

		@include justify-content(flex-start);

- Values: flex-start | flex-end | center | space-between | space-around
- Default: flex-start

## Ausrichtung an der Querachse (cross-axis) | [Spec](http://w3.org/tr/css3-flexbox/#align-items-property)

		@include align-items(stretch);

- Values: flex-start | flex-end | center | baseline | stretch
- Default: stretch

## Ausrichtung eines einzelnen Flex-Items an der Querachse (cross-axis) | [Spec](http://w3.org/tr/css3-flexbox/#align-items-property)

		@include align-self(auto);

- Values: auto | flex-start | flex-end | center | baseline | stretch
- Default: auto

## Ausrichtung an der Querachse (cross-axis) | [Spec](http://w3.org/tr/css3-flexbox/#align-content-property)

		@include align-content(stretch);

- Values: flex-start | flex-end | center | space-between | space-around | stretch
- Default: stretch
