fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette2").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette2").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette3").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette3").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette4").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette4").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette5").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette5").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette6").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette6").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette7").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette7").innerHTML += json.meals[0].strMeal
})

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => {

        document.querySelector(".pictureRecette8").style.backgroundImage += "url('" + json.meals[0].strMealThumb + "')"        
        document.querySelector(".nameRecette8").innerHTML += json.meals[0].strMeal
})