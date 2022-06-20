function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor((Math.random() * 6) + 1);
        alert('Value of your roll was ' + roll);
        if (roll === 1) {
            alert('Game over no more rolls');
            break;
            } 
            else if (roll < 5) {
                continue;
            }
            else if (roll === 5) {
                alert('Congratulations you win 5 gold coins.');
                goldCoins += roll;
            }
            else {
                alert('Congratulations you win 6 gold coins');
                goldCoins += roll;
            }
    }  
    alert('The game is over and you won ' + goldCoins + 'gold coins !');    
}

