const run_game = () => {
  function randomIntFromInterval(min=1,max=13) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const user1 = [randomIntFromInterval(),randomIntFromInterval(50,1000),'user1',0]
  const user2 = [randomIntFromInterval(),randomIntFromInterval(50,1000),'user2',0]
  const user3 = [randomIntFromInterval(),randomIntFromInterval(50,1000),'user3',0]
  const user4 = [randomIntFromInterval(),randomIntFromInterval(50,1000),'user4',0]
  const user5 = [randomIntFromInterval(),randomIntFromInterval(50,1000),'user5',0]
  const all_user = [
    user1,
    user2,
    user3,
    user4,
    user5
  ]
  
  const result1 = randomIntFromInterval()
  const result2 = randomIntFromInterval()
  const result3 = randomIntFromInterval()
  
  let sum_result = result1+result2+result3
  
  let answer = 0
  while (sum_result) {
    answer += sum_result % 10;
    sum_result = Math.floor(sum_result / 10);
  }
  
  let system_amount = 0;
  let winner_amount = 0;
  let winner = []
  let profit_loss = 0;
  
  for (const user_data of all_user) {
    if(user_data[0]==answer){
      winner_amount = winner_amount+(user_data[1]*9)
      winner.push(user_data[2])
      user_data[3] = user_data[1]*9
      profit_loss = profit_loss - (user_data[1]*9)
    }else{
      system_amount = system_amount+user_data[1]
      profit_loss = profit_loss+user_data[1]
    }
  }

  return {
    system_amount,
    winner_amount,
    winner,
    profit_loss,
    all_user,
    result1,
    result2,
    result3,
    answer
  }
}

let main_profit_loss=0;
for (let index = 0; index < 10000; index++) {
  let game_res = run_game()
  main_profit_loss = main_profit_loss + game_res.profit_loss  
}
console.log('main_profit_loss', main_profit_loss)
