Country = function(name, continent, capital, population){
    this.Name = name;
    this.Continent = continent;
    this.Capital = capital;
    this.PopulationInMillions = population;
}
Country.prototype.DisplayInfo = function(){
    return this.Name + " is a country in " + this.Continent +
     " with the capital of " + this.Capital + " and the total population of " + 
     this.PopulationInMillions.toString() + " millions.";
}
Country.prototype.ComparePopulation = function(Country) {
    var biggerPopulationCountry;
    var text = "Comparing population of " + this.Name + " and " + Country.Name + "<br/>";
    text += "Country with a larger population is ";
    if (this.PopulationInMillions > Country.PopulationInMillions){
        text += this.Name;
    }
    else {
        text += Country.Name; 
    }
    return text;    
}

var USA = new Country("United States of America", "North America", "Washington", 325);
var Poland = new Country("Poland", "Europe", "Warsaw", 39);
var Japan = new Country("Japan", "Asia", "Tokyo", 126);
var Italy = new Country("Italy", "Europe", "Rome", 60);

document.body.innerHTML = Poland.DisplayInfo();
document.body.innerHTML += "<br/><br/>";
document.body.innerHTML += USA.DisplayInfo();
document.body.innerHTML += "<br/><br/>";
document.body.innerHTML += USA.ComparePopulation(Japan);
document.body.innerHTML += "<br/><br/>";
document.body.innerHTML += Poland.ComparePopulation(Italy);
