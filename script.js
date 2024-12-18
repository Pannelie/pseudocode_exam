// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
Start

    SET personer = 4
    SET nota = 1000kr
    SET dricks_procent = 10%

        dricks = nota * dricks_procent /100
        total_belopp = nota + dricks
        nota_per_person = total_belopp /personer

    Skriv ut "Varje person ska betala:" + nota_per_person

Stopp

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()

    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";
    SET variabel guessCount till 0

    Skriv ut "Ditt startord är " +startOrd + ". Din uppgift är att ändra en bokstav i taget för att nå " +slutordOrd"

        while startOrd != slutordOrd
            skriv ut "Ditt nuvarande ord är " +startOrd+ ". Gissa ett ord: "
            input = användarens gissning
            if(isOneLetterApart(startOrd, input ) == true && contains(input))

                guessCount++
                startOrd = input
            else
                Skriv ut "Ogiltigt ord, skriv in ett annat ord"

    Skriv ut "Grattis du vann! Det tog dig " + guessCount + "försök!"


end function play

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0


    if length(wordOne) != length(wordTwo)
        skriv ut "Fel ordlängd, skriv ett ord med 4 tecken"
        return false

    for each tecken i wordOne
        if tecken i wordOne != tecken i wordTwo
            öka då diffcount++;

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt 


end function isOneLetterApart

function contains(ifWordExist)

    foreach(word in ordbok)

        if (word == ifWordExist)
            return true
    return false

end function contains

*/
