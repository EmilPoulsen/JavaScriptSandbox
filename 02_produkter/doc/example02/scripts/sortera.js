window.onload = function()
{
	var link = document.getElementById("sortera");
	link.onclick = sortera;
}

function sortera()
{
	var tabell = document.getElementById('tabell');
	var tabellRader = document.getElementsByTagName("tr");
	//anropar sorteringsfunktionen
	urvalssortering(tabellRader)
}

function urvalssortering(tabellRader)
{
	var antalPoster = tabellRader.length;
	var parent = tabellRader[0].parentNode;
	// Iterationen börjar på i=1, inte i=0, eftersom första tr-elementet i tabellen
	// utgörs av tabellhuvud, dvs inte riktig data som ska ingå i sorteringen.
	for(var i = 1; i < antalPoster - 1; i++)
	{
		/* hitta det minsta värdet i den återstående, osorterade delen av tabellen.
		Anropar hjälpfunktion hittaMinsta() som returneras platsen där detta minsta värde ligger*/

		var minstasPlats = hittaMinsta(tabellRader, i);

		//kopierar tr-elementet på plats 'i'. Se sidan 314 i kursboken

		var trElementEfter = tabellRader[i].cloneNode(true);

		//kopierar tr-elementet på plats minstasPlats

		var trElementFore = tabellRader[minstasPlats].cloneNode(true);

		//byter ut tr-element på plats minstasPlats med det kopierade tr-elementet trElementEfter. Se sidan 318 i kursboken

		parent.replaceChild(trElementEfter, tabellRader[minstasPlats]);

		//byter ut tr-element på plats i med det kopierade tr-elementet trElementFore

		parent.replaceChild(trElementFore, tabellRader[i]);

	}
}

function hittaMinsta(tabellRader, i)
{
	//anta att plats i håller den hittils minsta
	var hittillsMinstaPlats = i;

	for(var j = i + 1; j < tabellRader.length; j++)
	{
		var hittillsMinstaKod = tabellRader[hittillsMinstaPlats].getElementsByTagName('td')[1].firstChild.nodeValue;
		var kod = tabellRader[j].getElementsByTagName('td')[1].firstChild.nodeValue;

		if(kod < hittillsMinstaKod)
		{
			/* sant om man hittar ett värde på plats j som är lägre än det på
			* plats hittilsMinstaPlats. Sätt därfär om hittilsMinstaPlats att peka
			* på detta nya, minsta värdet plats*/

			hittillsMinstaPlats = j;
		}
	}
	return hittillsMinstaPlats;

}
