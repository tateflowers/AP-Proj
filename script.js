
var url ="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Animals/100%20Birds%20of%20the%20World.csv";
var names = getColumn(url,1)
var scientificNames = getColumn(url,2)
var conservationStatuses = getColumn(url,3)
var primaryColors = getColumn(url,4)
var diets = getColumn(url,5)

function searchBirds(primaryColor, diet){
    
    var matchingBirds=[];
        for(var i=0; i < names.length; i++){
            if(diets[i].toLowerCase().includes(diet.toLowerCase())&&primaryColors[i].toLowerCase().includes(primaryColor.toLowerCase())){
                matchingBirds.push(names[i])
            }
        }
        if(matchingBirds.length == 0){
            return "not found yo"
        }
        else{
        return matchingBirds;
        }
}
console.log(searchBirds("brown","seeds"));
