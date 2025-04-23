function sleepyCat(input) {
  let restDay = Number(input[0])
  let normToPlayMin = 30000
  let daysForWork = 365 - restDay
  let minForPlayOnWorkingDays = daysForWork * 63
  let minForPlayOnRestingDays = restDay * 127
  let totalMinForPlayPerYear = minForPlayOnRestingDays + minForPlayOnWorkingDays

  let moreHoursToPlay = Math.floor((normToPlayMin - totalMinForPlayPerYear) / 60)
  let moreMinutesToPlay = ((normToPlayMin - totalMinForPlayPerYear) % 60)

  if (normToPlayMin >= totalMinForPlayPerYear) {
    console.log(`Tom sleeps well`)
    console.log(`${moreHoursToPlay} hours and ${moreMinutesToPlay} minutes less for play`)
  }
  else {
    let neededMoreHours = Math.floor((totalMinForPlayPerYear - normToPlayMin) / 60)
    let neededMoreMins = Math.floor((totalMinForPlayPerYear - normToPlayMin) % 60)

    console.log(`Tom will run away`)
    console.log(`${neededMoreHours} hours and ${neededMoreMins} minutes more for play`)
  }
}
sleepyCat(["113"])