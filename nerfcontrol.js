

class TeamTimer {
    constructor(teamName) {
        this.teamName = teamName;
        this.time = 0;
        this.interval = null;
    }

    start() {
        if (this.interval) return; // Prevent multiple intervals
        this.interval = setInterval(() => {
            this.time++;
            console.log(`${this.teamName} Time: ${this.formatTime(this.time)}`);
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        this.stop();
        this.time = 0;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
}
function capturing(team){ 
    let capturetimer =0; 
    const countdown = setInterval(() => {
        capturetimer++;
        console.log(`Capturing ${team}: ${10 - capturetimer} seconds remaining`);
        if (capturetimer >= 10) {
            clearInterval(countdown);
            capture(team);
        }
    }, 1000);
    
}
function capture(team){ 
if(team == "blue"){ 
    team1Timer.start();

}
if(team == "red"){ 
    team2Timer.start();
}
}
function neutral(){ 
    team1Timer.stop();
    team2Timer.stop();  
}
const team1Timer = new TeamTimer('Team 1');
const team2Timer = new TeamTimer('Team 2');

// Example usage
team1Timer.start();
team2Timer.start();

// To stop the timers
// team1Timer.stop();
// team2Timer.stop();

// To reset the timers
// team1Timer.reset();
// team2Timer.reset();
