const SuperHerosMCU = {
    IronMan : "Intelignt",
    SpiderMan : {
        power1st : "Spider Power",
        power2nd : "Shoot webs",
        power3rd : "Can Climb Walls",
        power4th : "Spider Ting Ling"
    },
    "Hulk" : {
        power1st : "Super strength",
        power2nd : "Gamma Power", 
        "can Fly" : false,
        canThink : false
    },
    Thor : "Electrical Power"
}
// console.log(SuperHerosMCU["Hulk"]); 
// console.log(SuperHerosMCU.Hulk["can Fly"]);// If key writen in the form of string we have to use this [""] 
// -----------------------------------------------------------------------------------
const SuperHerosDC = new Object();
SuperHerosDC.SuperMan = {
    power1st : "Super Strength",
    power2nd : "Lesser Eyes",
    power3rd : "Fly"
};
SuperHerosDC.BatMan = {
    power1st : "Inteligent",
    power2nd : "Confidance",
    power3rd : "If he get some time for planing he can any fight",
    power4th : "Rich"
};
SuperHerosDC.WonderWomen = "Lesser wip";
SuperHerosDC.Flash = "Super Speed";

// console.log(SuperHerosDC.BatMan);

const allHeros = {...SuperHerosMCU, ...SuperHerosDC};// For combing Objects 
// console.log(allHeros);
//-------------------------------------------------------------------------------------------
const Pair_Of_name_and_power = Object.entries(SuperHerosDC);// It give array of pair of keys and value
// console.log(Pair_Of_name_and_power);// If value contain another objects it remains as it is
//-------------------------------------------------------------------------------------------

let some = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "Ten",
}
// console.log(Object.values(some));

//----------------------------------------------------------------------------------------------
// De-structure 
// In this for our convenence , for not always calling like "Objectname.key", we de-structure that key
// and give is a nick name to call it easly 
 const {BatMan : richman} = SuperHerosDC;
 console.log(richman);
 //--------------------------------------------------------------------------------------------------