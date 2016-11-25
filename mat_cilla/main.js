// Här den här arrayen ligger alla maträtter i form av object
var foods = [
    {name: "Palak Paneer", veg: true, url: "http://www.manjulaskitchen.com/palak-paneer-2016/"},
    {name: "Vegansk inlagd sill", veg: true, url: "http://www.ica.se/recept/vegansk-inlagd-sill-721246/"},
    {name: "Okonomiyaki Osaka-style", veg: false, url: "http://www.ica.se/recept/okonomiyaki-osaka-style-721354/"},
    {name: "Halstrad tonfisk med avokadohummus", veg: false, url: "http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"},
    {name: "Ärtsoppa", veg: true, url: "http://www.tasteline.com/recept/artsoppa/"},
    {name: "Krämiga köttfärsburritos med tomat- och avokadosallad", veg: false, url: "http://www.tasteline.com/recept/kramiga-kottfarsburritos-med-tomat-och-avokadosallad/"},
    {name: "Saffransfisk med bulgur och rårivna morötter", veg: false, url: "http://www.tasteline.com/recept/saffransfisk-med-bulgur-och-rarivna-morotter-2/"},
    {name: "Grönkålssoppa med grönkålschips", veg: true, url: "http://mittkok.expressen.se/recept/gronkalssoppa-med-gronkalschips/"},
    {name: "Bolognese på högrev", veg: false, url: "http://www.arla.se/recept/bolognese-pa-hogrev"},
    {name: "Biffkebab", veg: false, url: "http://www.arla.se/recept/biffkebab"},
    {name: "Blomkålscurry", veg: true, url: "https://www.alpro.com/se/recept/blomkalscurry"},
    {name: "Brasilianska fisktacos med mangosalsa", veg: false, url: "http://www.koket.se/brasilianska-fisktacos-med-mangosalsa"},
    {name: "Krispig torsk med sesammajonnäs", veg: false, url: "http://www.koket.se/krispig-torsk-med-sesammajonnas"},
    {name: "Röd linssoppa", veg: true, url: "http://www.veganrecept.se/rod-linssoppa"},
    {name: "Pankobakad torsk med krossad potatis och kall citronsås", veg: false, url: "http://www.arla.se/recept/pankobakad-torsk-med-krossad-potatis-och-kall-citronsas/"},
    {name: "Auberginebollar", veg: true, url: "http://www.vegokoll.se/recept/auberginbullar"},
    {name: "Högrevsgryta med syrad grädde och sambal", veg: false, url: "http://www.arla.se/recept/hogrevsgryta-med-syrad-gradde-och-sambal/"},
    {name: "Sushi", veg: false, url: "http://www.koket.se/tea_stjarne/_/fisk_och_skaldjur/sushi/"},
    {name: "Gnocchi med tomat, grönpeppar, salvia och kronärtskocka", veg: true, url: "http://www.ica.se/recept/gnocchi-med-tomat-gronpeppar-salvia-och-kronartskocka-720737/"},
    {name: "Hoisinglazad karréburgare med pickles och srirachamajo", veg: false, url: "http://www.ica.se/recept/hoisinglazad-karreburgare-med-pickles-och-srirachamajo-720317/"}];

// När checkboxen är aktiverad skickas användaren till funktionen chooseVeg
// annars skickas användaren till funktionen notVeg
function dinnerSuggestions() {
        if (mat = document.getElementById("myCheck").checked){
        chooseVeg();
    }

    else{
        notVeg();
    }

function chooseVeg(){

// Genom en filterfunktion sorteras alla maträtter som är vegetariska ut, dvs de object i arrayen som har property veg: value true.
    var vegFoods =  foods.filter(function(mat) {
    return mat.veg == true;});

// Vegalternativen som returnerades sparas ned i en variabel och randomiseras genom mathrandom
    var vegDinner = vegFoods[Math.floor(vegFoods.length * Math.random())];

// Här sparas de properties jag vill använda ner i variabler
    var foodsName = vegDinner.name;
    var foodsLink = vegDinner.url;

// Här hämtas paragraf id "myid" ut och kopplas ihop med foodsName och läggs ut på htmlsidan genom innerHTML 
    document.getElementById("myid").innerHTML = foodsName;


// Här hämtas a id "link" ut och kopplas ihop med foodsLink, texten "Här finns receptet!" och själva länken (som får target blank)
    document.getElementById("link").innerHTML = foodsLink;
    document.getElementById("link").innerHTML = "Här finns receptet!";
    document.getElementById("link").href = foodsLink;
    document.getElementById("link").target = "_blank";
};

// Funktionen som innehåller alla maträtter
function notVeg(){ 
    var allDinner = foods[Math.floor(foods.length * Math.random())];

    var foodsName2 = allDinner.name;
    var foodsLink2 = allDinner.url;

    document.getElementById("myid").innerHTML = foodsName2;
    document.getElementById("link").innerHTML = foodsLink2;

    document.getElementById("link").innerHTML = "Här finns receptet!";
    document.getElementById("link").href = foodsLink2;
    document.getElementById("link").target = "_blank";
};
};

