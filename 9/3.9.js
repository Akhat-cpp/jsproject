// 9

function inpd(kolKvart, kvarVprol, kolEtag)
{
	alert('nomer podezda: '+((kolKvart-(kolKvart%(kvarVprol*kolEtag)))/(kvarVprol*kolEtag)+1)+ //celoe chislo ot delenija vvedennogo kol-va kvartir na kol-vo kvartir v podezdah>>dalshe ostacha idet v novuy podyezd
		' etag: '+((((kolKvart%(kvarVprol*kolEtag))-(kolKvart%(kvarVprol*kolEtag))%kvarVprol)/kvarVprol)+1));//priblizitelno tak kak i s podezdami)))
}