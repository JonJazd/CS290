/* 3/7 1 creep, 2/7 2 creeps, 2/7 0 creeps.
9/81(1/9) 1v1
15/81 2v1 or 1v2
3/81 1v3 or 3v1
25/81 2v2
5/81 2v3 or 3v2
1/81 3v3

47 or 48 heroes


*/
function hero (nam,att,arm,hel){
    var myHero = {
        name: nam,
        attack: att,
        armor: arm,
        health: hel
    }
    return myHero;
}
const heroArray = [
    hero("axe",7,2,11),
    hero("beastmaster",5,0,12),
    hero("bristleback",8,0,12),
    hero("centaur_warrunner",4,0,14),
    hero("keefe_the_bold",6,1,11),
    hero("legion_commander",6,1,8),
    hero("mazzie",6,3,6),
    hero("pugna",6,0,9),
    hero("sven",5,0,11),
    hero("tidehunter",2,1,18),
    hero("timbersaw",4,0,11),
    hero("ursa",7,0,11),
    hero("crystal_maiden",2,0,5),
    hero("earthshaker",2,0,7),
    hero("jmuy_the_wise",3,0,8),
    hero("kanna",2,0,12),
    hero("luna",3,0,8),
    hero("meepo",4,0,5),
    hero("ogre_magi",3,0,7),
    hero("outworld_devourer",4,0,6),
    hero("prellex",3,0,5),
    hero("skywrath_mage",3,0,6),
    hero("venomancer",2,0,6),
    hero("zeus",3,0,7),
    hero("bloodseeker",7,0,6),
    hero("bounty_hunter",7,0,7),
    hero("debbi_the_cunning",7,0,5),
    hero("lich",5,0,9),
    hero("lion",6,0,5),
    hero("necrophos",5,0,6),
    hero("phantom_assassin",6,0,8),
    hero("sniper",5,0,6),
    hero("sorla_khan",8,0,6),
    hero("storm_spirit",4,0,6),
    hero("winter_wyvern",6,0,6),
    hero("abaddon",4,0,9),
    hero("chen",4,0,9),
    hero("dark_seer",5,0,9),
    hero("drow_ranger",4,0,7),
    hero("enchantress",4,0,8),
    hero("fahrvhan_the_dreamer",4,0,10),
    hero("lycan",4,0,10),
    hero("magnus",4,1,9),
    hero("omniknight",5,0,12),
    hero("rix",3,0,7),
    hero("treant_protector",4,0,10),
    hero("viper",4,0,10),
]
const cardPre = "./ArtifactDB-master/assets/artwork/large/";

function startingCreeps(){
    let start = Math.floor(Math.random()*9)+1;
    if (start<6){
        return 1;
    } else if (start>5 && start<9){
        return 0;
    } else {
        return 2;
    }
}
function getEnemyHero(){
    let start = Math.floor(Math.random()*47);
    return start;
}
function isUnitBlocked(alliedCreeps,enemyCreeps){
    if (enemyCreeps>=alliedCreeps){
        return true;
    } else {
        
    }
}
function placeHeroesAndCreeps(allyName,enemyName,ac,ec){
    var enemyHeroName = heroArray[enemyName].name;
    var allyHeroName = heroArray[allyName].name;
    var enemyArray = ["","",""];
    var allyArray = ["","",""];
    var laneArray = ["first ","second ","third "];
    if (ac===2){
        allyArray[0] = "melee_creep";
        allyArray[1] = allyHeroName;
        allyArray[2] = "melee_creep";
    }
    if (ec===2){
        enemyArray[0] = "melee_creep";
        enemyArray[1] = enemyHeroName;
        enemyArray[2] = "melee_creep";
    }
    if (ac===1){
        if (ec===2){
            var random = Math.floor(Math.random()*3);
            if (random===0){
                allyArray[1] = allyHeroName;
                allyArray[0] = "melee_creep";
            } else if (random===1){
                allyArray[0] = allyHeroName;
                allyArray[1] = "melee_creep";
            } else {
                allyArray[0] = allyHeroName;
                allyArray[2] = "melee_creep";
            }
        } else {
            var random = Math.floor(Math.random()*2);
            if (random===0){
                allyArray[0] = allyHeroName;
                allyArray[1] = "melee_creep";
            } else {
                allyArray[1] = allyHeroName;
                allyArray[0] = "melee_creep";
            }
        }
    }
    if (ec===1){
        if (ac===2){
            var random = Math.floor(Math.random()*3);
            if (random===0){
                enemyArray[1] = enemyHeroName;
                enemyArray[0] = "melee_creep";
            } else if (random===1){
                enemyArray[0] = enemyHeroName;
                enemyArray[1] = "melee_creep";
            } else {
                enemyArray[0] = enemyHeroName;
                enemyArray[2] = "melee_creep";
            }
        } else {
            var random = Math.floor(Math.random()*2);
            if (random===0){
                enemyArray[0] = enemyHeroName;
                enemyArray[1] = "melee_creep";
            } else {
                enemyArray[1] = enemyHeroName;
                enemyArray[0] = "melee_creep";
            }
        }
    }
    if (ac===0){
        if (ec===0){
            allyArray[1] = allyHeroName;
        } else {
            var random = Math.floor(Math.random()*(ec+1));
            allyArray[random] = allyHeroName;
        }
    }
    if (ec===0){
        if (ac===0){
            enemyArray[1] = enemyHeroName;
        } else {
            var random = Math.floor(Math.random()*(ac+1));
            enemyArray[random] = enemyHeroName;
        }
    }
    for (var a=0; a<3;a++){
        var allySpot = document.getElementById(laneArray[a] + "ally");
        var imageSrc = cardPre + allyArray[a] + ".jpg";
        var imageAlly = new Image(237,400);
        if (allyArray[a]!==""){
            imageAlly.src = imageSrc;
            allySpot.appendChild(imageAlly);
        } else {
            allySpot.innerHTML = "";
        }
        var imageEnemy = new Image(237,400);
        var enemySpot = document.getElementById(laneArray[a] + "enemy");
        imageSrc = cardPre + enemyArray[a] + ".jpg";
        if (enemyArray[a]!==""){
            imageEnemy.src = imageSrc;
            enemySpot.appendChild(imageEnemy);
        } else {
            enemySpot.innerHTML = "";
        }
    }
}
function go(){
    var laneArray = ["first ","second ","third "];
    for (var a=0; a<3;a++){
        var allySpot = document.getElementById(laneArray[a] + "ally");
        allySpot.innerHTML = "";
        var enemySpot = document.getElementById(laneArray[a] + "enemy");
        enemySpot.innerHTML = "";
    }
    var alliedCreeps = startingCreeps();
    var enemyCreeps = startingCreeps();
    var enemyHero = getEnemyHero();
    var scroll = document.getElementById("scroll");
    var scrollString = "Your Hero spawns with " + alliedCreeps + " creeps.</br>The Enemy spawns with " +enemyCreeps + " creeps.</br>";
    scroll.innerHTML = scrollString;
    var heroName = document.getElementById("hero").value-1;
    var goButton = document.getElementById("Gobutton");
    goButton.innerHTML = "Go Again!";
    placeHeroesAndCreeps(heroName,enemyHero,alliedCreeps,enemyCreeps);
    
}
