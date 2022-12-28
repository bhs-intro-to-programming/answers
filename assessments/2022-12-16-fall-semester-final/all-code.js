/////////////////////////////////////////////////////////////////////////////////////////////////////////
// totalEggs - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#1

const totalEggs = (hardboiledeggs, softboiledeggs) => { // correct
  return hardboiledeggs + softboiledeggs
}
const totalEggs = (hEgg, sEgg) => { // correct
  return hEgg + sEgg
}
const totalEggs = (nHardBoiled, nSoftBoiled) => { // correct
  return nHardBoiled + nSoftBoiled
}
const totalEggs=(numHardBoiled,numSoftBoiled)=>{ // correct
  return (numHardBoiled + numSoftBoiled)
}
const totalEggs = (hard, soft) => { // correct
  return hard + soft
}
const totalEggs = (soft, hard) => { // correct, though variable names are swapped
  return soft + hard
}
const totalEggs = (hard, soft) => { // correct
  return hard + soft;
};
const totalEggs = (hard, soft) => { // correct
  return hard + soft
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// chocolatesPerPerson - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#2

const chocolatesPerPerson = (chocolates, people) => { // correct
  return Math.floor(chocolates / people)
}

const chocolatesPerPerson = (nChocolates, nPeople) => { // correct
  return Math.floor(nChocolates / nPeople)
}

const chocolatesPerPerson = (c, p) => { // correct
  return Math.floor(c/p)
}

const chocolatesPerPerson = (cho, people) => { // correct
  return Math.floor(cho / people)
}

const chocolatesPerPerson = (choc, ppl) => { // correct
  return Math.floor(choc / ppl)
}

const chocolatesperperson = (numberofchocolate, numberofpeople) => { // half, needs Math.floor
  return numberofchocolate / numberofpeople
}

const chocolatesPerPerson = (numC, numP) => { // half, needs Math.floor
  return numC / numP;
};

/*
 * Rather than comment on every PR individually, I've collected all the answers
 * for all the questions from the final with comments about how I scored them.
 * Every question was either 'correct', (one point), 'half', (half a point) or
 * 'zero' (no points). For many of the 'half' and 'zero' answers I've commented
 * on why they were not fully correct and for some of the 'correct' answers I
 * pointed out small mistakes that made them technically not 100% correct but
 * which I let slide, usually things like obvious typos. (There were some
 * answers to some questions that were so incomplete I didn't score them at all,
 * treating them as not an attempt as that would do less damage to your grade on
 * that standard. I did not include those answers partial here.)
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// extraChocolates - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#3

// correct
const extraChocolates = (nChocolates, nPeople) => {
  return nChocolates % nPeople
}

// correct
const extraChocolates = (cho, people) => {
  return cho % people
}

// correct
const extraChocolates = (choc, ppl) => {
  return choc % ppl
}

// correct
const extraChocolates = (numC, numP) => {
  return numC % numP;
};

// correct, let slide capitalization problem
const extrachocolates = (numberofchocolate, numberofpeople) => {
  return (numberofchocolate%numberofpeople)
}

// zero
const extraChocolates = (chocos,people) => {
  return Math.floor (chocos/people)
}

// zero, though chocolate - (people * chocolatesPerPerson(chocolate, people)) would have worked.
const extraChocolates = (chocolate, people) => {
  return people - chocolate (chocolatesPerPerson(chocolate, people))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// leftOut - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#4

// correct
const leftOut = (nChocolates, nPeople) => {
  if (nChocolates < nPeople) {
    return nPeople - nChocolates
  } else {return 0}
}

// correct
const leftOut = (c, p) => {
if (c > p) return 0
return p - c
}

// correct
const leftOut = (choc, ppl) => {
  if ((ppl - choc) < 0) {
    return 0
  } else if ((ppl - choc) > 0) {
    return ppl - choc
  }
}

// zero
const leftOut = (chocolates, people) => {
  Math.floor(chocolates / people);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// probabilityAllHeads - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#5

// correct
const probabilityAllHeads = (coinflipped) => {
  return 1 / (2**coinflipped)
}

// correct
const probabilityAllHeads = (flips) => {
  return .5 ** flips
}

// correct
const probabilityAllHeads = (n) => {
  return (.5 ** n)
}

// zero
const probabilityAllHeads = (numberoftimescoinflipped) => {
  return numberoftimescoinflipped / 0.5
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// futureHour - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#6

// correct
const futureHour = (current, future) => {
  return (current + future) % 24
}

// correct
const futureHour = (current, eventTime) => {
  return (current + eventTime) % 24
}

// zero, needs %
const futureHour = (current, hours) => {
  return current + hours;
};

// zero, needs %
const futureHour = (currenthouron24hourclock, positivenumberofhoursinthefuture) => {
  return currenthouron24hourclock + positivenumberofhoursinthefuture
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// presentsBudget - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#7

// correct
const presentsBudget=(numOfFriends,avgPresentPrice)=>{
  return (numOfFriends * avgPresentPrice)
}

// correct
const presentsBudget = (friend, price) => {
  return friend * price
}

// correct
const presentsBudget = (friends, presents) => {
  return friends * presents
}

// correct
const presentsBudget = (nFriend, avPrice) => nFriend * avPrice

// correct
const presentsBudget = (friends, price) => {
  return friends * price;
};

// zero, * not +
const presentsBudget = (numberoffriendsyouarebuyingpresentsfor, theavgpriceyouplantobuy) => {
  return numberoffriendsyouarebuyingpresentsfor + theavgpriceyouplantobuy
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// perPresent - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#8

// correct
const perPresent = (budget, presents) => {
  return budget / presents;
};

// correct
const perPresent = (total, n) => {
  return total/n
}

// correct
const perPresent = (totalamountofmoney, presentyouneedtobuy) => {
  return totalamountofmoney / presentyouneedtobuy
}

// correct, though first variable name is not quite right
const perPresent = (friends, presents) => {
  return friends / presents
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// wrapingCombos - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#9

// correct
const wrapingCombos = (numberofkindsofwrappingpaper, numberofkindsofribbions, numberofkindsdecorativebows) => {
  return numberofkindsofwrappingpaper * numberofkindsofribbions * numberofkindsdecorativebows
}

// correct
const wrappingCombos = (p, b, r) => {
  return p *b * r
}

// correct
const wrappingCombos = (numPaper, numRibbons, numBows) => numPaper * numRibbons * numBows

// zero, needs * not +
const wrapingCombos = (paper, ribbons, bows) => {
  return paper + ribbons + bows;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// biggestNumber - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#10

// correct
const biggestNumber = (digits) => {
  return 10 ** digits - 1
}

// half, clever idea! but sadly need to convert the string to a number at the end
const biggestNumber = (digits) => {
  let nines = ''
  for (let i = 0; i < digits; i++) {
    nines = nines + '9'
  }
  return nines;
}

// zero, right operator but missing too much
const biggestNumber = (numberofdigits) => {
  return numberofdigits**
}

// zero
const biggestNumber = (digits) => {
  return Math.floor(digits);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// itemsLeftOver - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#11

// correct
const itemsLeftOver = (numP, numI) => {
  return numI % numP;
};

// half, only works if items is greater than the number of people and  less than twice the number of people
const itemsLeftOver = (ppl, items) => {
  return items - (items % ppl)
}

// zero
const itemsLeftOver = (numberofpeople, numberofitems) => {
  return numberofpeople / numberofitems
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// areaOfCircle - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#12

// correct
const areaOfCircle = (r) => Math.PI * (r ** 2)

// correct
const areaOfCircle = (radius) => {
  return Math.PI * radius ** 2;
};

// zero, needs * and **
const areaofCircle = (radiusofacircle) => {
  return Math.PI (radiusofacircle)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// volumeOfCube - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#13

// correct
const volumeOfCube = (a) => a ** 3

// correct
const volumeOfCube = (length) => {
  return length ** 3;
};

// correct
const volumeOfCube = (length) => {
  return length ** 3
}

// zero
const volumeOfCube=(lengthOfEdge)=>{
  return (lengthOfEdge * 6)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// populationGrowth - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#14

// correct
const populationGrowth = (num1, numDay) => numDay * num1

// correct
const populationGrowth = (current, growth) => {
  return current * growth
}

// correct, let slide wrong function name.
const populationGrowthRate = (population, growth) => {
  return population * growth;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// earnedRunAverage - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#15

// correct
const earnedRunAverage=(numEarnedRuns,numInningsPitched)=>{
  return (numEarnedRuns / numInningsPitched)*9
}

// correct
const earnedRunaverage = (eRuns, pIn) => {
  return (eRuns / pIn) * 9
}

// correct
const earnedRunAverage = (earnedRuns, innings) => {
  return (earnedRuns / innings) * 9;
};

// correct
const earnedRunAverage = (earned, innings) => {
  return (earned / innings) * 9
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// valueOfJewels - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#16

// correct
const valueOfJewels = (numD, numE, valD, valE) => (valE * numE) + (valD * numD)

// correct{
const valueOfJewels = (diamonds, emeralds, valueD, valueE) =>
  return (diamonds * valueD) + (emeralds * valueE);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// payWithOvertime - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#17

// half, only works as long as numWorked is 8 or more.
const payWithOverTime = (numWorked, normalRate, overRate) => ((numWorked - 8) * overRate) + (normalRate * 8)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstClassPostage - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#18

// no one attempted

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// weightOnJupiter - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#19

// correct
const weightOnJupiter = (weight) => {
  return weight * (JUPITER_GRAVITY / EARTH_GRAVITY);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// gravity - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#20

// correct
const gravity = (mass1, mass2, distance) => {
  return ((mass1 * mass2) / distance ** 2) * G;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// averageWeight - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#21

// correct
const averageWeight = (itemWeights, items) => {
  return itemWeights / items
}

// correct
const averageWeight=(weightOfitems,numOfItems)=>{
  return (weightOfitems / numOfItems)
}

// correct
const averageWeight = (weight, items) => {
  return weight / items;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// hypotenuse - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#22

// correct
const hypotenuse = (l1, l2) => {
  return Math.sqrt(l1**2 + l2**2)
}

// half, missing square root.
const hypotenuse = (length1, length2) => {
  return (length1 ** 2) + (length2 ** 2);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// maxRadius - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#23

// correct
const maxRadius = (width, height) => {
  if (height >= width) {
    return width/2
  }
  else return height/2
}

// zero
const maxRadius = (width, height) => {
  return width * height;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// numCircles - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#24

// correct
const numCircles = (radius, width) => {
  return Math.floor(width/(radius*2))
}

// zero
const numCircles = (radius, width) => {
  return Math.max(radius * width);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// offset - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#25

// no one attempted

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// fireAlarm - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#26

// correct
const fireAlarm = (firealarmispulled, plannedfiredrill, smokedetected) => {
  return (firealarmispulled || plannedfiredrill || smokedetected)
}

// correct
const fireAlarm = (pulled, smoke, drill) => {
  return pulled || smoke || drill;
};

// correct
const fireAlarm = (pulled,smoke,drill) => {
  return (pulled||smoke||drill)
}

// correct
const fireAlarm = (pulled, smoke, planned) => {
  return pulled || smoke || planned
}

// correct
const fireAlarm=(smokeDetected,planedDrill,alarmPulled)=>{
  return smokeDetected||planedDrill||alarmPulled
}

// correct
const fireAlarm = (pulled, smoke, planned) => {
  return pulled || smoke || planned
}

// correct
const fireAlarm = (pulled, smoke, drill) => {
  return pulled || smoke || drill
}

// correct
const fireAlarm = (pulled, smoke, drill) => pulled || smoke || drill

// correct
const fireAlarm = (alarm, smoke, drill) => {
  return alarm || smoke || drill;
};

// zero
const fireAlarm = (pulled, smokeDetected, planned) => {
  return pulled && smokeDetected || planned
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// canBePresident - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#27

// correct
const canBePresident = (age, naturalBornCitizen, usFourteenYears) => {
  return age >= 35 && naturalBornCitizen && usFourteenYears >= 14;
};

// correct
const canBePresident = (age, citizen, years) => {
  return age >= 35 && citizen && years >= 14
}

// correct
const canBePresident = (age, citezen, years) => {
  return age >= 35 && citezen && years >=14
}

// correct
const canBePresident = (age, naturalBorn, lived) => (Math.floor(age)) > 34 && naturalBorn && (Math.floor(lived)) > 13

// correct, I let 37 vs 35 slide.
const canBePresident = (age, naturalBorn, yearsInUS) => {
  return age >= 37 && naturalBorn && yearsInUS >= 14;
};

// correct
const canBePresident = (age, naturalborncitizen, yearslivedinUS) => {
  if (age >= 35 && naturalborncitizen && yearslivedinUS >= 14) {
    return true
  }
  else return false
}

// half
const canBePresident = (ageInYears, bornCitizen, yearsLivedInUs) => {
  return ageInYears>35 && bornCitizen && yearsLivedInUs
}

// half
const canBePresident = (atleast35yearsold, naturalborncitizen, livedinUSfor14years) => {
  return (atleast35yearsold && naturalborncitizen && livedinUSfor14years)
}

// half
const canBePresident=(atLeast35,naturalBornCitizen,liveInUS14Years)=> {
  return atLeast35 && naturalBornCitizen && liveInUS14Years
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// willSeeTweet - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#28

// correct
const willSeeTweet=(followingTweeter,followingRetweeter,noTweetIfblocked) => {
  return (followingTweeter || followingRetweeter) && !noTweetIfblocked
}

// correct, though *way* too complicated!
const willSeeTweet = (follow, followretweet, blocked) => {
  if (follow && !followretweet && !blocked || !follow && followretweet && !blocked || follow && followretweet && !blocked) {
    return true
  }
  else return false
}

// half, missing return
const willSeeTweet = (followThePerson, followThePersonWhoRT, blocked) => {
  (followThePerson || followThePersonWhoRT) && !blocked;
};

// half, precedence not quite right
const willSeeTweet = (followthepersontweet, followapersonretweeted, blocked) => {
  return (followthepersontweet || followapersonretweeted && ! blocked)
}

// half, same
const willSeeTweet =  (followed, retweeted, blocked) => {
  return followed || retweeted && !blocked
}

// half, same
const willSeeTweet = (follow, retweet, blocked) => {
  return follow || retweet && !blocked;
};

// half
const willSeeTweet = (ft,fsrt,bt) => {
  return (ft||fsrt||!bt)
}

// half
const willSeeTweet = (follows, retweet, blocked) => {
  return follows || retweet || !blocked
}

// half, precedence plus & instead of &&
const willSeeTweet = (tweeter, retweeterFollower, blocked) => {
  return tweeter || retweeterFollower &! blocked
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// needHeavyCoat - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#29

// correct
const needHeavyCoat = (goingoutside, somewherecold) => {
  return goingoutside && somewherecold
}

// correct
const needHeavyCoat = (goingOutside, cold) => {
  return goingOutside && cold;
};

// correct
const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

// correct
const needHeavyCoat = (goingOutside, somewhereCold) => {
  return goingOutside && somewhereCold
}

// correct
const needHeavyCoat=(goingOutside,somewhereCold)=>{
  return goingOutside && somewhereCold
}

// correct
const needHeavyCoat = (out, cold) => {
  return out && cold
}

// correct
const needHeavyCoat = (goOutside, cold) => {
  return goOutside && cold
}

// correct
const needHeavyCoat = (cold, outside) => {
  return cold && outside
}

// correct
const needHeavyCoat = (outside, cold) => {
  return outside && cold;
};

// correct
const needHeavyCoat = (outside, cold) => {
  if (outside && cold) {
    return true
  }
  else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// needSunscreen - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#30

// correct
const needSunscreen = (beach, skiing) => {
  return beach || skiing
}

// correct
const needSunscreen = (beach, skis) => {
  return beach || skis
}

// correct
const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}

// correct
const needSunscreen=(goingSkiing,goingToBeach)=>{
  return goingSkiing||goingToBeach
}

// correct
const needSunscreen = (beach, ski) => {
  return beach || ski
}

// correct
const needSunscreen = (goToBeach, goSkiing) => {
  return goToBeach || goSkiing
}

// correct
const needSunScreen = (beach, ski) => beach || ski

// correct
const needSunscreen = (beach, skiing) => {
  if (!beach && !skiing) {
    return false
  }
  else return true
}

// half, missing return
const needSunScreen = (goingToBeach, goingSkiing) => {
  goingToBeach || goingSkiing;
};

// zero
const needSunscreen = (beach, skiing) => {
  return beach && skiing;
};

// zero
const needSunscreen = (goingtothebeach, goingskiing) => {
  return goingtothebeach && goingskiing
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// needMittens - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#31

// correct
const needMittens = (goingoutside, somewherewarm) => {
  return goingoutside && ! somewherewarm
}

// correct
const needMittens = (outside, warm) => {
  return outside && !warm
}

// correct
const needMittens=(goingOutside,somewhereWarm)=>{
  return goingOutside&&!somewhereWarm
}

// correct
const needMittens = (out, warm) => {
  return out && !warm
}

// correct
const needMittens = (goOut, warm) => {
  return goOut && !warm
}

// correct
const needMittens = (outside, warm) => {
  return outside && !warm;
};

// half, missing return
const needMittens = (goingOutside, somewhereWarm) => {
  goingOutside && !somewhereWarm;
};

// half, & instead of &&
const needMittens = (goOutside, warm) => {
  return goOutside &! warm
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isVenomous - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#32

// correct
const isVenomous = (striped, blue) => {
  return striped || !blue;
};

// correct
const isVenomous = (striped,blueHead) => {
  if(!striped && blueHead ){
    return false}
    else true
}

// half, missing return
const isVenomous = (stripedSnake, blueHeaded) => {
  stripedSnake || !blueHeaded;
};

// half, logic not quite right
const isVenomous = (stripedsnake, blueheadsnake) => {
  return stripedsnake && ! blueheadsnake
}

// half, logic not quite right plus & instead of &&
const isVenomous = (stripedSnake, blueHeadSnake) => {
  return stripedSnake &! blueheadSnake
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isMagicNumber - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#33

// correct
const isMagicNumber = (n) => {
  return n === 42 || n === 17
}

// correct
const isMagicNumber = (x) => {
  return x === 42 || x === 17
}

// zero, can't index numbers.
const isMagicNumber = (number) => {
  return number[42] || number[17];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// canSleepIn - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#34

// correct
const canSleepIn = (weekday, vacation) => {
  return !weekday || vacation;
};

// correct
const canSleepIn = (weekday, vacation) => {
  if (!weekday || vacation) { return true
  }
  else return false
}

// correct, let the misspelling of false slide.
const canSleepIn = (weekday,vacation) => {
  if (!vacation && weekday){
    return flase}
    else true
}

// half, exactly inverted
const canSleepIn = (weekday, vacation) => {
  return !weekday && vacation
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// canGoToProm - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#35

// correct
const canGoToProm = (senior, inviteSen, promEx) => (senior || inviteSen) && !promEx

// half, operator precedence problem, && is higher than ||
const canGoToProm = (senior, invited, list) => {
  return (senior || invited && !list)
}

// half, same
const canGoToProm = (senior, invited, exclusion) => {
  return senior || invited && exclusion
}

// half, same
const canGoToProm = (senior, invited, list) => {
  return senior || invited && !list
}

// half, same
const canGoToProm = (senior, invited, excluded) => {
  return senior || invited && !excluded;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// getsSpeedingTicket - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#36

// correct
const getsSpeedingTicket = (carSpeed, copIsGrouchy) => {
  return carSpeed > 65 && copIsGrouchy || carSpeed > 70
}

// correct
const getsSpeedingTicket = (mph, grouchyCop) => {
  return (mph > 70 && !grouchyCop) || (mph > 65 && grouchyCop);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// evenGreaterThanZero - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#37

// correct
const evenGreaterThanZero = (number) => {
  return number > 0 && number % 2 === 0;
};

// correct
const evenGreaterThanZero = (number) => {
  return number > 0 && number % 2 === 0
}

// half, need % not /
const evenGreaterThanZero = (n) => {
  if (n/2 === 0 && n > 0) return true
  else return false
}

// half, need % not /
const evenGreaterThanZero = (num) => {
  return num / 2 === 0 && num > 0;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isLeapYear - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#38

// correct
const isLeapYear = (year) => {
  return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)
}

// zero, needs % not /
const isLeapYear = (year) => {
  return year / 4 === 0 || (year / 100 === 0 && year / 400 === 0);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// okaySpeed - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#39

// half, this is exactly inverted from the desired output.
const okaySpeed = (postedMph, carMph) => {
  return carMph >= postedMph + 10 || carMph <= postedMph - 10;
};

// zero, needs some math.
const okaySpeed = (speedlimitinmilesperhour, speedacarisgoinginmilesperhour) => {
return speedlimitinmilesperhour && speedacarisgoinginmilesperhour
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// twiceAsExpensive - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#40

// correct
const twiceAsExpensive = (price1, price2) => {
  return price1 > price2 * 2
}

// correct
const twiceAsExpensive = (item1, item2) => {
  return item1 > (item2 * 2);
};

// half, should be > not ===
const twiceAsExpensive = (price1, price2) => {
  return price1 === price2 * 2
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// winningRecord - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#41

// correct
const winningRecord = (wins, losses, ties) => {
  return wins > losses + ties
}

// correct
const winningRecord = (wins, losses, ties) => {
  return wins > losses + ties;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// aFartherThanB - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#42

// half, needs absolute value
const aFartherThanB = (num, num2, num3) => (num - num3) > (num2 - num3)

// half, same
const aFartherThanB = (num1, num2, num3) => {
  return num3 - num1 > num3 - num2;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstFewEveryOther - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#43

// correct
const firstFewEveryOther = (s) => s[0] + s[2] + s[4];

// correct
const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[4]
}

// correct
const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[4]
}

// correct
const firstFewEveryOther = (string) => {
  return string[0] + string[2] + string[4]
}

// correct
const firstFewEveryOther=(s)=>{
  return s[0]+s[2]+s[4]
}

// correct
const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[4]
}

// half, mising return
const firstFewEveryOther = (s) => {
  s[0] + s[2] + s[4]
};

// zero, mixing method calling and indexing
const firstFewEveryOther = (s) => {
  return s.substring[0] + s.substring[2] + s.substring[4]
}

// zero, substring doesn't work that way.
const firstFewEveryOther = (s) => {
  return s.substring(0, 2, 4);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstHalf - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#44

// correct
const firstHalf = (s) =>
  s.substring(0, s.length / 2);

// correct
const firstHalf = (s) =>{
return s.substring(0,s.length/2)
}

// correct
const firstHalf = (s) => s.substring(0, (s.length / 2));

// correct
const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

// correct
const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

// correct
const firstHalf = (string) => {
  return string.substring(0,string.length/2)
}

// correct
const firstHalf=(s)=>{
  return s.substring(0,s.length/2)
}

// correct
const firstHalf = (s) => {
  return s.slice(0, s.length/2)
}

// correct
const firstHalf = (s) => {
  return s.substring(0, s.length/2)
}

// correct
const firstHalf = (s) => {
  return s.substring(0, s.length / 2);
};

// zero
const firstHalf = (s) => {
  return s.substring(1,0)+s.substring(s.length/2)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// secondHalf - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#45

// correct
const secondHalf = (s) => {
  return s.substring(s.length/2)
}

// correct
const secondHalf = (s) => s.substring(s.length / 2);

// correct, though I'd write it all one one line to emphasize that it's in shorthand form
const secondHalf = (s) =>
  s.substring(s.length / 2);

// correct
const secondHalf = (s) => {
  return s.substring(s.length / 2)
}

// correct
const secondHalf = (s) => {
  return s.substring(s.length/2)
}

// correct
const secondHalf = (s) => {
  return s.substring(s.length / 2)
}

// correct
const secondHalf=(s)=>{
  return s.substring(s.length/2)
}

// correct
const secondHalf = (s) => {
  return s.slice(s.length/2, s.length)
}

// correct
const secondHalf = (s) => {
  return s.substring(s.length / 2);
};

// correct, but second arg to substring is not needed in this case
const secondHalf = (string) => {
  return string.substring(string.length/2,string.length)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// swapFrontAndBack - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#46

// correct, love the use of the other functions.
const swapFrontAndBack = (s) => {
  return secondHalf(s) + firstHalf(s)
}

// correct, same
const swapFrontAndBack = (string) => {
  return secondHalf(string) + firstHalf(string)
}

// correct
const swapFrontAndBack = (s) => {
  return secondHalf(s) + firstHalf(s)
}

// correct, love the use of the other functions. Could use some indentation.
const swapFrontAndBack = (s) =>{
return secondHalf(s)+ firstHalf(s)
}

// correct
const swapFrontAndBack = (s) =>
  s.substring(s.length / 2) + s.substring(0, s.length / 2);

// correct
const swapFrontAndBack = (s) => s.substring(s.length / 2) + s.substring(0, (s.length / 2));

// correct
const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

// correct
const swapFrontAndBack = (s) => s.substring(s.length/2) + s.substring(0, s.length/2)

// correct
const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// upDown - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#47

// correct
const upDown = (s) =>
  s.toUpperCase() + s.toLowerCase();

// correct
const upDown = (s) => {
return s.toUpperCase()+s.toLowerCase()
}

// correct
const upDown = (s) => s.toUpperCase() + s.toLowerCase();

// correct
const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

// correct
const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

// correct
const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase()
}

// correct
const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

// correct
const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

// correct
const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase();
};

// half, literally half right, i.e. the first half.
const upDown = (s) => {
  return s.toUpperCase() + push.s
}

// zero
const upDown = (s) => {
  return s.substring(toUpperCase(0,2))+s.substring(s.length*2)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// upDownLastCharacter - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#48

// correct
const upDownLastCharacter = (s) => s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase();

// correct
const upDownLastCharacter = (s) => {
  return s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase;
};

// correct
const upDownLastCharacter = (s) => {
  return s.slice(s.length - 1).toUpperCase() + s.slice(s.length - 1).toLowerCase()
}

// correct
const upDownLastCharacter = (s) => {
  return s.substring(s.length - 1, s.length).toUpperCase() +
    s.substring(s.length - 1, s.length).toLowerCase()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstAndLast - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#49

// correct
const firstAndLast = (s) =>
  s[0] + s[s.length - 1];

// correct
const firstAndLast = (s) => s[0] + s[s.length - 1];

// correct
const firstAndLast = (s) => {
  return s[0] + s[s.length - 1]
}

// correct
const firstAndLast = (s) => {
  return s[0] + s[s.length - 1];
};

// correct
const firstAndLast = (s) => {
return s[0]+ s.substring(s.length-1)
}

// correct
const firstAndLast = (s) => {
  return s[0] + s.substring(s.length - 1, s.length)
}

// half
const firstAndLast = (s) => {
  return s.substring(0,1) + s.substring(s.length, -1)
}

// zero
const firstAndLast=(s)=>{
  return s.substring(0)+ s.substring(s.length -1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// simplePigLatin - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#50

// correct
const simplePigLatin = (s, v) => {
  return s.substring(v, s.length) + s.substring(0, v) + 'ay'
}

// half, basically right but off by one
const simplePigLatin = (s, x) => s.substring(x - 1) + s.substring(0, x - 1) + 'ay';

// zero
const simplePigLatin = () => {
  return s.substring(s.search(/['aeiou']/))+s.substring(0,s.search -1)+'aeiou'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// randomCharacter - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#51

// correct
const randomCharacter = (s) => s[rand(s.length)];

// correct
const randomCharacter = (s) => {
  return s[rand(s.length)]
}

// correct
const randomCharacter = (s) => {
  return s[rand(s.length)]
}

// zero, rand was specified to take a number, not a string.
const randomCharacter = (s) => {
  return rand(s);
};

// zero
const randomCharacter = (s) =>{
return Math.random(s)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// randomCharacterUpDown - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#52

// correct
const randomCharacterUpDown = (s) => {
  let n = rand(s.length);
  return s[n].toUpperCase() + s[n].toLowerCase();
}

// half, calling rand twice will pick two different random characters.
const randomCharacterUpDown = (s) => {
  return s[rand(s.length)].toUpperCase() +
    s[rand(s.length)].toLowerCase()
}

// zero, incorrect use of rand plus the double rand issue of the previous
const randomCharacterUpDown = (s) => {
  return rand(s).toUpperCase + rand(s).toLowerCase;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isAllUpperCase - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#53

// correct
const isAllUpperCase = (s) => s.toUpperCase() === s;

// correct
const isAllUpperCase = (s) => {
  if (s.toUpperCase() === s) {
    return true
  } else {
    return false
  }
}

// correct
const isAllUpperCase = () => {
  return s.toUpperCase() ===s
}

// correct
const isAllUpperCase = (s) => {
  if (s === s.toUpperCase()) { return true
  }
  else return false
}

// correct
const isAllUpperCase = (s) => s.toUpperCase() === s

// half, need to call toUpperCase
const isAllUpperCase = (s) => {
  return s === s.toUpperCase
}

// zero, no comparison, need to call toUpperCase, and substring is gratuitious
const isAllUpperCase=(s)=>{
  return s.substring().toUpperCase
}

// zero, toUpperCase doesn't take arguments and doesn't return a boolean
const isAllUpperCase = (s) => {
  if (s.toUpperCase(s.length()) === true) {
    return true
  }
  else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sameIgnoringCase - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#54

// correct
const sameIgnoringCase = (s, i) => s.toLowerCase() === i.toLowerCase();

// correct
const sameIgnoringCase = (s1, s2) => {
  if (s1.toUpperCase() === s2.toUpperCase()) {
    return true
  } else {
    return false
  }
}

// zero, doesn't ignore case
const sameIgnoringCase = (s1, s2) => {
  if (s1 === s2) { return true
  }
  else return false
}

// zero, same as previous
const sameIgnoringCase = (s1, s2) => {
  return s1 === s2;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstName - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#55

// correct
const firstName = (s) => s.substring(0, s.indexOf(' '));

// correct
const firstName = (s) => {
  return s.substring(0, s.indexOf(' '))
}

// zero, need to use indexOf and also the - 1 isn't needed.
const firstName = (s) => {
  return s.indexOf(0, ' ' - 1);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// lastName - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#56

// correct
const lastName = (s) => s.substring(s.indexOf(' ') + 1);

// correct, though second argument, s.length, not actually needed in this case
const lastName = (s) => {
  return s.substring(s.indexOf(' ') + 1, s.length)
}

// zero, needs indexOf.
const lastName = (s) => {
  return s.indexOf(' ' + 1);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// initials - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#57

// correct
const initials = (s) => s[0] + s[s.indexOf(' ') + 1]

// correct
const initials = (s) => {
  return s.substring(0, 1) +
    s.substring(s.indexOf(' ') + 1, s.indexOf(' ') + 2)
}

// half, needs indexOf
const initials = (s) => {
  return s[0] + s[' ' + 1];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// upToX - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#58

// correct
const upToX = (s) => s.substring(0, s.indexOf('x'))

// correct
const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
};

// correct
const upToX = (s) => {
  return s.substring(0, (s.indexOf('x')))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// charactersAround - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#59

// correct
const charactersAround = (s, i) => s[i - 1] + s[i + 1]

// correct
const charactersAround = (s, i) => {
  return s.substring(i - 1, i) + s.substring(i + 1, i + 2)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// middle - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#60

// correct
const middle = (s) => s.substring(s.length / 4, (s.length / 4) * 3)

// correct
const middle = (s) => {
  return s.substring(s.length / 4, s.length - s.length / 4);
}

// correct
const middle = (string) => {
  return string.substring(string.length / 4, string.length / 4 * 3)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// pair - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#61

// correct
const paire = (s1, s2) => {
  return s1 + ' and ' + s2
}

// correct
const paire = (string1, string2) => {
  return string1 + ' and ' + string2
}

// correct
const paire = (s1, s2) => s1 + ' and ' + s2

// half, missing the spaces around the "and"
const pair = (s1, s2) => s1 + 'and' + s2

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// containsX - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#62

// correct
const containsX = (s) => {
    if (s.indexOf('x') >= 0) {
    return true
  } else {
    return false
  }
}

// correct
const containsX = (string) => {
  for (let x = 0; x < string.length; x++) {
    if (string[x] === 'x') {
      return true
    }
  }
  return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// slug - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#63

// correct
const slug = (string1, string2, string3) => {
  return string1.toLowerCase() + '-' + string2.toLowerCase() + '-' + string3.toLowerCase()
}

// correct
const slug = (s, s2, s3) => {
  return (s + '-' + s2 + '-' + s3).toLowerCase()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// capitalize - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#64

// correct
const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1, string.length).toLowerCase()
}

// zero, toUpperCase doesn't take arguments.
const capitalize = (s) => {
  return s.toUpperCase(0,1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// capitalizeName - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#65

// correct
const capitalizeName = (fullName) => {
  return capitalize(fullName.substring(0, fullName.indexOf(' '))) + ' ' + capitalize(fullName.substring(fullName.indexOf(' ') + 1, fullName.length))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// moreThanTwiceAsLong - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#66

// no one attempted

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// yesIfEven - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#67

// correct
const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return "yes"
  }
  else return 'no'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// logIfOk - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#68

// correct
const logIfOk = (o) => {
  if (isOk(o)) {
    log(o)
  }
}

// correct
const logIfOk = (n) => {
  if (isOk(n))
  log(n)
}

// correct
const logIfOk = (a) => {
  if (isOk(a) === true)
    log(a)
}

// half, for basic logic and structure
const logIfOk = (n) => {
  if (isOk(n)) {
    log.isOK
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstOk - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#69

// correct
const firstOk = (arg) => {
  for (let i = 0; i < arg; i++) {
    if (isOk(arg)) {
      return i
    }
  }
}

// correct
const firstOk = (x) => {
  for(let i = 0; i < x; i++) {
    if (isOk(i)) { return i; }
  }
}

// half, right structure
const firstOk = (num) => {
  for (let i = 0; i < num; i++) {
    if (num === isOk) {
      return isOk
    }
    else return undefined
  }
}

// zero
const firstOk = (x) => {
  for (let i =0; i < x; i++);
  if(isOk(i))
  return firstOk
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// timeToLeet - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#70

// correct
const timeToLeet = () => {
  let count = 0;
  while (!isLeet(random10k())) {
    count++;
  }
  return count;
};

// correct
const timeToLeet = () => {
  let count = 0;
  while (!isLeet(random10k())) {
   count++
  }
  return count;
}

// zero, wrong use of isLeet function.
const timeToLeet = () => {
  for (let i = 0; i < i + 1; i++) {
    if (random10k() === isLeet()) {
      return i
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// classify - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#71

// correct
const classify = (o) => {
  if (isOk(o)) {
    recordOk(o)
  } else {
    recordNotOk(o)
  }
}

// correct
const classify = (arg) => {
  if (isOk(arg)) {
    recordOk(arg)
  } else {
    recordNotOk(arg)
  }
}

// correct, letting slide some typos 0 for O and Notok rather than NotOk
const classify = (x) => {
 if (isOk(x)) {
   record0k(x);
 } else {
   recordNotok(x);
 }
}

// correct
const classify = (v) => {
  if (isOk(v) === true)
  recordOk(v)
  else {
  recordNotOk(v)
}
}

// half, right structure. Didn't use isOk as a function
const classify = (v) => {
  if (v === isOk) { return recordOk(v)
  }
  else return recordNotOk(v)
}

// half, correct use of isOk, didn't call recordOk and recordNotOk
const classify = (num) => {
  if (isOk(num) === true) {
    return recordOk
  }
  else return recordNotOk
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// threewayClassify - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#72

// correct
const threewayClassify = (o) => {
  if (isOk(o)) {
    recordOk(o)
  } else if (isMeh(o)) {
    recordMeh(o)
  } else {
    recordNotOk(o)
  }
}

// correct
const threewayClassify = (x) => {
  if (is0k(x)) {
   record0k(x);
 } else if (isMeh(x)) {
   recordMeh (x);
 } else {
   recordNot0k(x);
}}

// half, right structure. Didn't use isOk and isMeh
const threewayClassify = (v) => {
  if (v === okay) { return recordOk(v)
  }
  if (v === meh) { return recordMeh(v)
  }
  else return recordNotOk(v)
}

// half, right structure and used isOk and isMeh but didn't call other functions
const threewayClassify = (num) => {
  if (isOk(num) === true) {
    return recordOk
  }
  else if (isMeh(num) === true) {
    return recordMeh
  }
  else return recordNotOk
}

// zero, always returns true.
const threewayClassify = (arg) => {
return isOk(arg) || isMeh(arg) || isNotOk(arg)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sumOfSquares - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#73

// correct
const sumOfSquares = (n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i ** 2
  }
  return sum
}

// correct
const sumOfSquares = (arg) => {
  let final = 0
  for (let i = 0; i < arg; i++) {
    final = final + i**2
  }
  return final
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// pairs - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#74

// correct
const pairs = (number) => {
  for (let x = 1; x < number; x++) {
    for (let y = 1; y < number; y++) {
      pair(x, y)
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// timesTable - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#75

// correct
const timesTable = (number) => {
  for (let x = 1; x < number + 1; x++) {
    for (let y = 1; y < number + 1; y++) {
      emit(x, y, x * y)
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sumSquares - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#76

// half, n is a number so n.length doesn't make sense
const sumSquares = (n) => {
  let sum = 0
  for(let i = 0; i < n.length; i++) {
    sum = sum + i**2
  }
  return sum
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// countXs - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#77

// correct
const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      count++
    }
  }
  return count
}

// correct
const countXs = (s) => {
  let xs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x')
      xs++
  }
  return xs
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// makeRow - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#78

// correct
const makeRow = () => {
  return ['', '', '']
}

// correct
const makeRow = () => {
  return ['','','']
}

// correct
const makeRow = () => {
  return [' ', ' ', ' ']
}

// correct
const makeRow = () => {
  return ['','','']
}

// correct
const makeRow=()=>{
  return ['','','']
}

// correct
const makeRow = () => {
  return ['', '','']
}

// correct
const makeRow = () => {
  return ['' , '' , '']
}

// correct, let slide the ' ', vs ''.
const makeRow = () => {
  return [' ', ' ', ' ']
};

// half, missing return
const makeRow = () => {
  ['','','']
}

// half, also missing return
const makeRow = () => { ['', '', ''] }

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// makeBoard - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#79

// correct
const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
};

// correct
const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}

// correct
const makeBoard = () => {
  return [
    makeRow(), makeRow(), makeRow(),
  ]
}

// correct
const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}

// correct
const makeBoard = () => {
  return [['', '', ''],['', '', ''],['', '', '']]
}

// correct
const makeBoard = () => {
  return [
    makeRow(),
    makeRow(),
    makeRow(),
    ]
}

// half, missing return
const makeBoard = () => {
  [['', '', '']
  ['', '', '']
  ['', '', '']];
}

// zero, not an array, not calling makeRow
const makeBoard = () => {
  makeRow,
  makeRow,
  makeRow;
}

// zero, not an array, not calling makeRow
const makeBoard=()=>{
  return (makeRow + makeRow + makeRow)
}

// zero, not an array, not calling makeRow
const makeBoard = () => {
  makerow,
  makerow,
  makerow;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// allTheSame - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#80

// correct
const allTheSame = (a) => {
  return a[0] === a[1] && a[1] === a[2]
};

// correct
const allTheSame = (ary) => (ary[0] === ary[1] && ary[0] === ary[2]);

// correct
const allTheSame = (array) => {
  return array[0] === array[1] && array[0] === array[2]
}

// correct
const allTheSame = (arrayOfElements) => {
  return arrayOfElements[0] === arrayOfElements[1] && arrayOfElements[0] === arrayOfElements[2]
}

// correct
const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}

// correct
const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}

// correct, but the formatting is off
const allTheSame = (array) => {
  if (array[0] === array[1] && array[1] === array[2]) { return true
  }
else return false
}

// correct, this is nice in that it works for arrays of any length
const allTheSame = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      return false
    }
  }
  return true
}

// correct, same as previous
const allTheSame = (xs) => {
  for (let i = 1; i < xs.length; i++) {
    if (xs[0] !== xs[i]) return false;
  }
  return true;
};

// correct, this is quite stylish but only works because of an advanced feature
// we haven't discussed but
const allTheSame = ([a, b, c]) => (a === b) && (a === c)

// zero, wrong number of arguments
const allTheSame = (element1, element2, element3) => {
  return element1 === element2 && element2 === element3
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// extractColumn - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#81

// correct
const extractColumn = (board, c) => {
  let col = [];
  for (let r = 0; r < board.length; r++) {
    col.push(board[r][c]);
  }
  return col;
};

// correct
const extractColumn = (board, collumn) => {
  let extraction = []
  for (let i = 0; i < 3; i++) {
    extraction.push(board[i][collumn])
  }
  return extraction
};

// correct
const extractColumn = (array, index) => {
  let newArr = []
  for (let i = 0; i < array.length; i++){
    newArr.push(array[i][index])
  }
  return newArr
}

// correct
const extractColumn = (ary, i) => {
  let ary2 = ['', '', '']
  ary2[0] = ary[0] [i]
  ary2[1] = ary[1] [i]
  ary2[2] = ary[2] [i]
  return ary;
}

// correct
const extractColumn = (board, index) => {
  let extract = []
  for (let i = 0; i < 3; i++) {
    extract.push(board[i][index])
  }
  return extract
}

// correct
const extractColumn = (board, index) => {
  return [board[0][index], board[1][index], board[2][index]]
}

// half, variable names got mixed up.
const extractColumn = (board,column) => {
  let column = []{
  }
  for(let i =0 ; i < board.length; i ++){
    column(board[r][c]);
  }
  return col;
}

// half, syntax around push got mangled
const extractColumn = (board, index) => {
  let newBoard = []
  for (let i = 0; i < board.length; i++) {
    newBoard.push[i][index]
  }
  return newBoard
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// fillTimesTable - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#82

// correct
const fillTimesTable = (array) => {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      array[x][y] = (x + 1) * (y + 1)
    }
  }
  return array
}

// zero, this creates a new array rather than filling in the given array and
// calls push with too many arguments.
const fillTimesTable = (array) => {
  let table = []
  for (let i = 0; i < array.length; i++) {
    table.push((i + 1), (i + 1) * 2, (i + 1) * 3)
  }
  return table
};

// zero, incomplete plus shouldn't be using push.
const fillTimesTable = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      array.push()
    }
  }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sums - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#83

// correct
const sums = (n) => {
  let sum = 0
  let summy = []
  for (let i = 0; i < n+1; i++) {
    summy.push(sum = sum + i)
  }
  return summy
};

// correct
const sums = (n) => {
  let array = []
  for (let i = 0; i < n + 1; i++){
    if (i === 0){
      array.push(i)
      }
    else {
      array.push(array[i -1] + i)
    }
  }
  return array
}

// half, pushes an extra 0 at the beginning.
const sums = (number) => {
  let array = [0]
  for (let x = 0; x < number; x++) {
    array.push(x + array[x])
  }
  return array
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// rule110 - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#84

// half, for being the only one to attempt it. this is a *hard* problem.
const rule110 = (array) => {
  let newArray = []
  for (let i=0; i < array.length; i++) {
    if (array[i-1, i ,i+1] = 0) {
      newArray.push(0)
    }
  }
  return newArray
};// this is only half of the weird ass thing ur asking us to do with this this one
//and it crashes the website so god only knows what would happen if i finished it

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isSamePoint - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#85

// correct
const isSamePoint = (point1, point2) => {
  return (point1.x === point2.x) && (point1.y === point2.y)
};

// correct
const isSamePoint = (obj1, obj2) => obj1.x === obj2.x && obj1.y === obj2.y;

// correct
const isSamePoint = (p1,p2) => {
  return p1.x === p2.x && p1.y === p2.y
}

// correct
const isSamePoint = (p1, p2) => {
  if (p1.x === p2.x && p1.y === p2.y) { return true
  }
  else return false
}

// correct
const isSamePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y)
}

// half, needs === not =
const isSamePoint = (point1,point2) => {
  return (point1.x = point2.x) && (point1.y = point2.y)
}

// half, needs === not =
const isSamePoint = (p1, p2) => {
  return (p1.x = p2.x) && (p1.y = p2.y)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// area - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#86

// correct
const area = (rect) => {
  return rect.width * rect.height
};

// correct
const area = (obj) => obj.width * obj.height;

// correct
const area = (rect) => {
  return rect.width * rect.height
}

// correct
const area = (r) => {
  return r.width * r.height
}

// zero, would be correct if arguments were numbers not a single object as specified
const area = (w, h) => w * h

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// totalWithTip - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#87

// correct
const totalWithTip = (subtotal, tip) => {
  let totals = {}
  totals.subtotal = subtotal.subtotal
  totals.tip = subtotal.subtotal*tip
  totals.total = (subtotal.subtotal*tip) + subtotal.subtotal
  return totals
};

// correct
const totalWithTip = (receet, tip) => {
  return {subtotal: receet.subtotal, tip: receet.subtotal * tip, total: receet.subtotal + receet.subtotal * tip}
}

// correct
const totalWithTip = (object, number) => {
  return {subtotal: object.subtotal, tip: object.subtotal*number, total: object.subtotal + object.subtotal*number}
}

// correct
const totalWithTip = (o, n) => {
  let t = o.subtotal * n
  let all = o.subtotal + tip
  return {subtotal: o.subtotal, tip: t, subtotal: all}
}

// half, first argument is an object plus totalExcludingTip is never defined
const totalWithTip = (subtotal, percentageTip) => {
  let tip = subtotal * percentageTip
  let total = tip + subtotal
  return { subtotal: totalExcludingTip, tip: tipValue, total: totalValue }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// higherPaid - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#88

// correct
const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1
  }
  return employee2
};

// correct
const higherPaid = (e1, e2) => {
  if (e1.salary < e2.salary) {
    return e2
  }
  else return e1
}

// correct
const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }
}

// correct
const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1
  }
  else {
    return employee2
  }
}

// correct
const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1
  } else {return employee2}
}

// correct
const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) { return e1
  }
  else return e2
}

// correct
const higherPaid = (x1,x2) => {
  if (x1.salary > x2.salary){
    return x1;
  } else if (x2.salary > x1.salary){
    return x2;
} }

// zero, arguments are objects not numbers
const higherPaid=(salery1,salery2)=>{
   if(salery1 > salery2)
   return salery1
   else
   return salery2
}

// zero, syntax is very muddled.
const higherPaid = (salary1, salary2) => {
  if ([salary1] > [salary2]) {
    return [salary1]
  }
  if ([salary1] < [salary2]) {
    return [salary2]
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isWinner - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#89

// correct
const isWinner = (player) => {
  return player.score > 100
}

// correct
const isWinner = (player) => {
  return player.score > 100
}

// correct
const isWinner = (scores) => {
  return scores.score > 100
};

// correct
const isWinner = (o) => {
  return o.score > 100
}

// correct
const isWinner = (object) => {
  return object.score > 100
}

// correct, but formatting is wonky
const isWinner = (obj) => {
  if (obj.score > 100) { return true
  }
  else return false
}

// correct
const isWinner = (obj) => obj.score > 100

// half, logic is right but argument is an object not a number
const isWinner=(score)=>{
  if (score > 100)
  return true
  else
  return false
}

// half, same as previous
const isWinner = (score) => {
  if (score > 100) {
    return true
  }
  else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// updateWins - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#90

// half, this is closest, missing only a .length in x < playerList.length
const updateWins = (playerList) => {
  for (let x = 0; x < playerList; x++) {
    if (isWinner(playerList[x])) {
      playerList[x].wins = playerList[x].wins + 1
    }
  }
}

// half, logic is basically right but scores is an array, not a single object.
const updateWins = (scores) => {
  if (isWinner(scores.score)); {
    scores.wins=scores.wins++
  }
  return 'undefined'
};

// half, similar to previous
const updateWins = (player) => {
  if (player.score > 100) {
    player.wins++
  }
  return
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// bigWinners - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#91

// correct
const bigWinners = (players) => {
  let superiorWinners = []
  for (let i = 0; i < players.length; i++) {
    if (players.wins > 10) {
      players.push(superiorWinners)
    }
  }
  return superiorWinners
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// makeMove - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#92

// correct
const makeMove = (mark, row, column) => {
  return { mark: mark, row: row, column: column };
};

// correct
const makeMove = (m, r, c) => {
  return { m: m, r: r, c: c, };
}

// correct
const makeMove = (x , y , o) => {
  let makeMove = {'mark' : x , 'row' : y , 'column' : o }
  return makeMove
}

// correct, due to shorthand object notation for row and column
const makeMove = (xorO, row, column) => {
  return {mark: xorO, row, column}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// placeMark - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#93

// correct
const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark
}

// correct
const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark;
};

// half, basically right except extra comma
const placeMark = (board, move ) => {
  return board [move.row] , [move. coloumn] = move.mark;
}

// zero
const placeMark = (array, moves) => {
  for (let i = 0; i < array.length; i++) {
    placeMark(array, moves[i])
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// recordMove - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#94

// correct
const recordMove = (array, move) => {
  array.push(move)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// rowForMove - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#95

// correct
const rowForMove = (array, n) => {
  return array[n].row
}

// correct
const rowForMove = (moveobjects, index) => {
  return moves[index].row
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// placeMoves - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#96

// no one attempted
