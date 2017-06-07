/* När sidan har lästs in och DOM-trädet har skapats utfär denna
 * anonyma funktion som letar upp a-elementet (länken) med id = sortera och kopplar
 * funktionen sortera() till händelsen onclick, d.v.s. att denna funktion skall utfäras
 * när man klickar på länken
 */

window.onload = function()
{
    var link = document.getElementById("sortera");
    link.onclick = sortera;
}

/* Anropas via länken */
function sortera()
{
    //hämtar fram alla li-element, d.v.s. listposterna som skall sorteras
    var listposter = document.getElementsByTagName("li");
    //anropar sorteringsfunktionen
    urvalssortering(listposter)
}

/* Sorteringsfunktion av typen urvalssortering (Selection sort). Denna är tillräckligt effektiv på denna datamängd  */
function urvalssortering(listposter)
{
    var antalPoster = listposter.length;

    //Föräldraelementet till listposterna, d.v.s. ul-elementet.
    var parent = listposter[0].parentNode;

    for(var i = 0; i < antalPoster - 1; i++)
    {
        /* Hitta det minsta värdet i den återstående, osorterade delen av listan */

        /* Anropar hjälpfunktion hittaMinsta() som returneras platsen där detta minsta värde ligger */
        var minstasPlats = hittaMinsta(listposter, i);
        //kopierar li-elementet på plats i. Se sidan 314 i kursboken
        var liElementEfter = listposter[i].cloneNode(true);
        //kopierar li-elementet på plats minstasPlats
        var liElementFore = listposter[minstasPlats].cloneNode(true);
        //byter ut li-element på plats minstasPlats med det kopierade li-elementet liElementEfter. Se sidan 318 i kursboken
        parent.replaceChild(liElementEfter, listposter[minstasPlats]);
        //byter ut li-element på plats i med det kopierade li-elementet liElementFore
        parent.replaceChild(liElementFore, listposter[i]);
    }
}

/* Hjälpfunktion till urvalsorteringsfunktionen */
function hittaMinsta(listposter, i)
{
    //anta att plats i håller den hittills minsta
    var hittillsMinstaPlats = i;

    for(var j = i + 1; j < listposter.length; j++)
    {
        if(listposter[j].firstChild.nodeValue < listposter[hittillsMinstaPlats].firstChild.nodeValue)
        {
            /* Sant om man hittar ett värde på plats j som är lägre än det på
            *  plats hittillsMinstaPlats. Sätt därför om hittillsMinstaPlats att peka
            *  på detta nya, minsta värdets plats*/
            hittillsMinstaPlats = j;
        }
    }
    return hittillsMinstaPlats;
}
