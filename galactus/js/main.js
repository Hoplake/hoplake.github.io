var world = {}

$(document).ready(function() {
    feather.replace();
    world.game = new GameWorld();
    UpdateCounters();
    $('[data-toggle="tooltip"]').tooltip();
    console.log("ready");
    console.log(world);
});

$("#start").on("click", function(){
    $(".guide").hide();
    $(".game").show();
});

$("#timerminus1").on("click", function() {
    world.game.DecreaseTimer(1);
    UpdateCounters();
});
$("#timerminus2").on("click", function() {
    world.game.DecreaseTimer(2);
    UpdateCounters();
});
$("#timerminus3").on("click", function() {
    world.game.DecreaseTimer(3);
    UpdateCounters();
});

$(".heal").on("click", function() {
    world.game.Heal($(this).data('target'));
    UpdateCounters();
});

$(".hit").on("click", function() {
    world.game.Hit($(this).data('target'));
    UpdateCounters();
});

$("#killherald").on("click", function() {
    world.game.KillHerald();
    UpdateCounters();
})

$("#rolldice").on("click", function() {
    dieresult = world.game.RollDice();
    if(dieresult == 6){
        $("#die").text("G");
    } else if (dieresult == 5 || dieresult == 4) {
        $("#die").text("H");
    } 
    else {
        $("#die").text(dieresult);
    }
    
    UpdateCounters();
})

function UpdateCounters() {
    $("#defenderscounter").text(world.game.defenders);
    $("#galactuscounter").text(world.game.galactus);
    $("#timercounter").text(world.game.timer);
    $("#heraldlvl").text(world.game.heraldlvl);
    (world.game.heraldlvl > 0) ? $("#herald").show() : $("#herald").hide();
    
}