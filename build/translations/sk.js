(function(d){	const l = d['sk'] = d['sk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Block quote":"Citát",Bold:"Tučné","Bulleted List":"Zoznam s odrážkami",Cancel:"Zrušiť","Centered image":"Zarovnať na stred","Change image text alternative":"Zmeňte alternatívny text obrázka","Choose heading":"Vyberte nadpis",Downloadable:"Na stiahnutie","Dropdown toolbar":"Panel nástrojov roletového menu","Edit link":"Upraviť odkaz","Editor toolbar":"Panel nástrojov editora","Full size image":"Obrázok v plnej veľkosti",Heading:"Nadpis","Heading 1":"Nadpis 1","Heading 2":"Nadpis 2","Heading 3":"Nadpis 3","Heading 4":"Nadpis 4","Heading 5":"Nadpis 5","Heading 6":"Nadpis 6","Horizontal line":"Vodorovná čiara","Image toolbar":"Panel nástrojov obrázka","image widget":"widget obrázka","Insert image":"Vložiť obrázok","Insert media":"Vložiť média","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Kurzíva","Left aligned image":"Zarovnať vľavo",Link:"Odkaz","Link URL":"URL adresa","Media URL":"URL média","media widget":"Nástroj pre médiá",Next:"Ďalšie","Numbered List":"Číslovaný zoznam","Open in a new tab":"Otvoriť v novej záložke","Open link in new tab":"Otvoriť odkaz v novom okne",Paragraph:"Paragraf","Paste the media URL in the input.":"Vložte URL média.",Previous:"Predchádzajúce",Redo:"Znova","Rich Text Editor":"Editor s formátovaním","Rich Text Editor, %0":"Editor s formátovaním, %0","Right aligned image":"Zarovnať vpravo",Save:"Uložiť","Show more items":"","Side image":"Bočný obrázok",Strikethrough:"Preškrtnuté","Text alternative":"Alternatívny text","The URL must not be empty.":"Musíte zadať URL.","This link has no URL":"Tento odkaz nemá nastavenú URL adresu","This media URL is not supported.":"URL média nie je podporovaná.","Tip: Paste the URL into the content to embed faster.":"Tip: URL adresu média vložte do obsahu.",Underline:"Podčiarknuté",Undo:"Späť",Unlink:"Zrušiť odkaz","Upload failed":"Nahrávanie zlyhalo","Upload in progress":"Prebieha nahrávanie","Widget toolbar":"Panel nástrojov ovládacieho prvku"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));