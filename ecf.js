fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette").innerHTML += json.meals[0].strMeal
        document.querySelector(".ingredients").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients2").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients3").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients4").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients5").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients6").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients7").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients8").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients9").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients10").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients11").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients12").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients13").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients14").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients15").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients16").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients17").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients18").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients19").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients20").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage1").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage2").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage3").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage4").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage5").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage6").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage7").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage8").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage9").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage10").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage11").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage12").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage13").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage14").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage15").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage16").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage17").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage18").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage19").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage20").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette2").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette2").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients21").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients22").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients23").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients24").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients25").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients26").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients27").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients28").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients29").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients30").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients31").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients32").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients33").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients34").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients35").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients36").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients37").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients38").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients39").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients40").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage21").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage22").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage23").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage24").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage25").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage26").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage27").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage28").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage29").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage30").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage31").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage32").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage33").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage34").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage35").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage36").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage37").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage38").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage39").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage40").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette3").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette3").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients41").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients42").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients43").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients44").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients45").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients46").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients47").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients48").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients49").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients50").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients51").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients52").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients53").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients54").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients55").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients56").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients57").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients58").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients59").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients60").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage41").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage42").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage43").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage44").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage45").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage46").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage47").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage48").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage49").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage50").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage51").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage52").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage53").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage54").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage55").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage56").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage57").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage58").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage59").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage60").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette4").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette4").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients61").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients62").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients63").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients64").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients65").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients66").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients67").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients68").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients69").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients70").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients71").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients72").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients73").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients74").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients75").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients76").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients77").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients78").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients79").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients80").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage61").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage62").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage63").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage64").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage65").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage66").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage67").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage68").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage69").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage70").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage71").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage72").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage73").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage74").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage75").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage76").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage77").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage78").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage79").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage80").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette5").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette5").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients81").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients82").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients83").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients84").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients85").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients86").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients87").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients88").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients89").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients90").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients91").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients92").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients93").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients94").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients95").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients96").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients97").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients98").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients99").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients100").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage81").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage82").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage83").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage84").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage85").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage86").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage87").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage88").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage89").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage90").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage91").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage92").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage93").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage94").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage95").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage96").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage97").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage98").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage99").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage100").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette6").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette6").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients101").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients102").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients103").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients104").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients105").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients106").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients107").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients108").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients109").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients110").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients111").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients112").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients113").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients114").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients115").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients116").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients117").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients118").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients119").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients120").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage101").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage102").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage103").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage104").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage105").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage106").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage107").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage108").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage109").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage110").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage111").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage112").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage113").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage114").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage115").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage116").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage117").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage118").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage119").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage120").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette7").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette7").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients121").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients122").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients123").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients124").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients125").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients126").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients127").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients128").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients129").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients130").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients131").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients132").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients133").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients134").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients135").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients136").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients137").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients138").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients139").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients140").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage121").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage122").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage123").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage124").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage125").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage126").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage127").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage128").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage129").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage130").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage131").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage132").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage133").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage134").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage135").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage136").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage137").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage138").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage139").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage140").innerHTML = json.meals[0].strMeasure20
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette8").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nameRecette8").innerHTML += json.meals[0].strMeal

        document.querySelector(".ingredients141").innerHTML = json.meals[0].strIngredient1
        document.querySelector(".ingredients142").innerHTML = json.meals[0].strIngredient2
        document.querySelector(".ingredients143").innerHTML += json.meals[0].strIngredient3
        document.querySelector(".ingredients144").innerHTML = json.meals[0].strIngredient4
        document.querySelector(".ingredients145").innerHTML = json.meals[0].strIngredient5
        document.querySelector(".ingredients146").innerHTML = json.meals[0].strIngredient6
        document.querySelector(".ingredients147").innerHTML = json.meals[0].strIngredient7
        document.querySelector(".ingredients148").innerHTML = json.meals[0].strIngredient8
        document.querySelector(".ingredients149").innerHTML = json.meals[0].strIngredient9
        document.querySelector(".ingredients150").innerHTML = json.meals[0].strIngredient10
        document.querySelector(".ingredients151").innerHTML = json.meals[0].strIngredient11
        document.querySelector(".ingredients152").innerHTML = json.meals[0].strIngredient12
        document.querySelector(".ingredients153").innerHTML = json.meals[0].strIngredient13
        document.querySelector(".ingredients154").innerHTML = json.meals[0].strIngredient14
        document.querySelector(".ingredients155").innerHTML = json.meals[0].strIngredient15
        document.querySelector(".ingredients156").innerHTML = json.meals[0].strIngredient16
        document.querySelector(".ingredients157").innerHTML = json.meals[0].strIngredient17
        document.querySelector(".ingredients158").innerHTML = json.meals[0].strIngredient18
        document.querySelector(".ingredients159").innerHTML = json.meals[0].strIngredient19
        document.querySelector(".ingredients160").innerHTML = json.meals[0].strIngredient20

        document.querySelector(".dosage141").innerHTML = json.meals[0].strMeasure1
        document.querySelector(".dosage142").innerHTML = json.meals[0].strMeasure2
        document.querySelector(".dosage143").innerHTML = json.meals[0].strMeasure3
        document.querySelector(".dosage144").innerHTML = json.meals[0].strMeasure4
        document.querySelector(".dosage145").innerHTML = json.meals[0].strMeasure5
        document.querySelector(".dosage146").innerHTML = json.meals[0].strMeasure6
        document.querySelector(".dosage147").innerHTML = json.meals[0].strMeasure7
        document.querySelector(".dosage148").innerHTML = json.meals[0].strMeasure8
        document.querySelector(".dosage149").innerHTML = json.meals[0].strMeasure9
        document.querySelector(".dosage150").innerHTML = json.meals[0].strMeasure10
        document.querySelector(".dosage151").innerHTML = json.meals[0].strMeasure11
        document.querySelector(".dosage152").innerHTML = json.meals[0].strMeasure12
        document.querySelector(".dosage153").innerHTML = json.meals[0].strMeasure13
        document.querySelector(".dosage154").innerHTML = json.meals[0].strMeasure14
        document.querySelector(".dosage155").innerHTML = json.meals[0].strMeasure15
        document.querySelector(".dosage156").innerHTML = json.meals[0].strMeasure16
        document.querySelector(".dosage157").innerHTML = json.meals[0].strMeasure17
        document.querySelector(".dosage158").innerHTML = json.meals[0].strMeasure18
        document.querySelector(".dosage159").innerHTML = json.meals[0].strMeasure19
        document.querySelector(".dosage160").innerHTML = json.meals[0].strMeasure20
    })

    // je m'occupe de ma section 2

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {
        document.querySelector(".imgRecettePref").style.backgroundImage = "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nomRecettePref").innerHTML = json.meals[0].strMeal
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {
        document.querySelector(".imgRecettePref2").style.backgroundImage = "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nomRecettePref2").innerHTML = json.meals[0].strMeal
    })

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {
        document.querySelector(".imgRecettePref3").style.backgroundImage = "url('" + json.meals[0].strMealThumb + "')"
        document.querySelector(".nomRecettePref3").innerHTML = json.meals[0].strMeal
    })



fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')
    .then(response => response.json())
    .then( json => {
        document.querySelector(".nomViandePref").innerHTML = json.meals[0].strMeal
        document.querySelector(".imgViandePref").style.backgroundImage = "url('" + json.meals[0].strMealThumb + "')"
    })

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(response => response.json())
    .then(json => {
        document.querySelector(".nomViandePref2").innerHTML = json.meals[0].strMeal
        document.querySelector(".imgViandePref2").style.backgroundImage = "url('" + json.meals[0].strMealThumb + "')"
    })