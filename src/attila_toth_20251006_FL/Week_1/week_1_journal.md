# Week 1 Journal

## Reflections

- **Day 1:**  
  _Ich habe mal den Task gestartet mit TDD. Ich habe es schon vermutet, dass die Herausforderung wird sein, wie mann die Spalte Längen kalkuliert und dann entsprechend noch white spaces hinzufügt aber ich bin trotzdem Schritt für Schritt vorgegangen. Ich überlege jetzt für morgen, dass ich doch mit dem getMaxColumnLengths() starten soll, damit ich das besser verstehe/auseinandersetzen kann._
  _MaxColumLengths könnte man auch als Map<number, number> implementieren, in javascript funktionieren aber objects auch identisch._
  _Ich mache mir bisschen Sorgen wegen dem Performance, jetzt ist es O m*n wegen den doppelten For Schleifen, aber ich denke das wird auch so bleiben, sehe noch nicht wie man das verbessern könnte :)_

- **Day 2:**  
  _Ich habe heute mit dem getMaxColumnLengths() angefangen und habe den Ansatz mit dem Map probiert. Ich finde es schöner und aussagekräftiger, wenn man die dedizierte functions verwendet, also werde ich morgen auch bei dem bleiben._
  _Habe jetzt die tabelliere Funktion auch soweit fertig gemacht, dass es die Tabelle ausgibt, ohne die richtige Formatierung für die erste Zeile._
  _Anstatt habe ich versucht Klassen einzuführen. Auf jeden Fall würde das aber dazu führen, dass ich die ursprüngliche Funktion Signatur ändern müsste, und die Tests von Anfang an so schreiben sollte._
  _Ich werde mal morgen diesen Ansatz weiterverfolgen, obwohl ehrlich gesagt sehe ich da nicht unbedingt einen Mehrwert, ich werde mal vielleicht nur mit einer Klasse versuchen und eher auf IOSP fokussieren._
  _Ich muss ehrlich zugeben, dass copilot heute viel geholfen hat. In der Arbeit verwenden wir es um die Tests zu generieren, aber umgekehrt funktioniert es sogar besser. Nachdem ich die Tests geschrieben habe, hat es mir den Implementation generiert. padEnd() hat auch er vorgeschlagen..._

- **Day 3:**  
  _CSVParser Klasse war eine grosse Hilfe für IOSP. Mann kann sowohl die input als auch die Zwischenschritte und das Resultat auch speichern. Dh. die Funktionen brauchen keine Parameters. Was der Nachteil ist, dass so die Variables nicht immutable und die Funktionen nicht pure sind._
  _Diese 2 Dinge sind in Function Programming sehr wichtig und würde auch die Testbarkeit verbessern. Heute hatte ich nur einen "end-to-end" test gehabt, was alles getestet aber keine separate test für die "private" Funktionen. Ich werde mal morgen probieren, ob ich das irgendwie kombinieren kann._
  _Heute habe ich so ca. 10 Min gecheatet, weil ich unbedingt noch die separator line hinkriegen wollte und bisschen Mühe gehabt habe mit Map.values()..._
  _Was ich noch überlege, ob ich irgendwie die looping auslagern kann, damit ich es nicht 2x machen muss, weil die eigentliche Logik nur respektive 1-2 Zeilen wäre._

- **Day 4:**  
  _Write your reflection here._

- **Day 5:**  
  _Write your reflection here._