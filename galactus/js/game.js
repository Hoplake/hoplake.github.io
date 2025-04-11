class GameWorld {
    constructor(defenders = 20, galactus = 20, timer = 10) {
        this.original = {};
        this.defenders = defenders;
        this.galactus = galactus;
        this.timer = timer;
        this.heraldlvl = 0;

        this.original.defenders = defenders;
        this.original.galactus = galactus;
        this.original.timer = timer;
    }

    ResetCounters() {
        this.ResetDefenders();
        this.ResetGalactus();
        this.ResetTimer();
    }

    ResetDefenders() {
        this.defenders = this.original.defenders;
    }

    ResetGalactus() {
        this.galactus = this.original.galactus;
    }

    ResetTimer() {
        this.timer = this.original.timer;
    }

    DecreaseTimer(multiplier) {
        this.timer = this.timer - multiplier;
        if(this.timer < 0) {
            this.timer = 0;
        }
    }

    Hit(target) {
        switch(target) {
            case 'defenders': 
                this.defenders--;
                if(this.defenders < 0) this.defenders = 0;
                break;
            case 'galactus' : 
                this.galactus--;
                if(this.galactus < 0) this.galactus = 0;
                break;
        }
    }

    Heal(target) {
        switch(target) {
            case 'defenders': 
                this.defenders++;
                if(this.defenders > this.original.defenders) this.defenders = this.original.defenders;
                break;
            case 'galactus' : 
                this.galactus++;
                if(this.galactus > this.original.galactus) this.galactus = this.original.galactus;
                break;
        }
    }

    RollUpHerald() {
        this.heraldlvl++;
        if(this.heraldlvl > 3) this.heraldlvl = 3;
    }

    KillHerald() {
        this.heraldlvl = 0;
    }

    RollDice() {
        var result = chance.d6();
        console.log(result);

        switch(result) {
            case 1: 
                this.DecreaseTimer(1);
                break;
            case 2:
                this.DecreaseTimer(2);
                break;
            case 3:
                this.DecreaseTimer(3);
                break;
            case 4:
                this.RollUpHerald();
                break;
            case 5:
                this.RollUpHerald();
                break;
            case 6:
                console.log("Galactus");
                break;
        }
        return result;
    }

}