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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// extraChocolates - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#3

const extraChocolates = (nChocolates, nPeople) => { // correct
  return nChocolates % nPeople
}

const extraChocolates = (cho, people) => { // correct
  return cho % people
}

const extraChocolates = (choc, ppl) => { // correct
  return choc % ppl
}

const extraChocolates = (numC, numP) => { // correct
  return numC % numP;
};

const extrachocolates = (numberofchocolate, numberofpeople) => { // correct, let slide capitalization problem
  return (numberofchocolate%numberofpeople)
}

const extraChocolates = (chocos,people) => { // zero
  return Math.floor (chocos/people)
}

const extraChocolates = (chocolate, people) => { // zero, though chocolate - (people * chocolatesPerPerson(chocolate, people)) would have worked.
  return people - chocolate (chocolatesPerPerson(chocolate, people))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// leftOut - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#4

const leftOut = (nChocolates, nPeople) => { // correct
  if (nChocolates < nPeople) {
    return nPeople - nChocolates
  } else {return 0}
}

const leftOut = (c, p) => { // correct
if (c > p) return 0
return p - c
}

const leftOut = (choc, ppl) => { // correct
  if ((ppl - choc) < 0) {
    return 0
  } else if ((ppl - choc) > 0) {
    return ppl - choc
  }
}

const leftOut = (chocolates, people) => { // zero
  Math.floor(chocolates / people);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// probabilityAllHeads - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#5

const probabilityAllHeads = (coinflipped) => { // correct
  return 1 / (2**coinflipped)
}

const probabilityAllHeads = (flips) => { // correct
  return .5 ** flips
}

const probabilityAllHeads = (n) => { // correct
  return (.5 ** n)
}

const probabilityAllHeads = (numberoftimescoinflipped) => { // zero
  return numberoftimescoinflipped / 0.5
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// futureHour - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#6

const futureHour = (current, future) => { // correct
  return (current + future) % 24
}

const futureHour = (current, eventTime) => { // correct
  return (current + eventTime) % 24
}

const futureHour = (current, hours) => { // zero, needs %
  return current + hours;
};

const futureHour = (currenthouron24hourclock, positivenumberofhoursinthefuture) => { // zero, needs %
  return currenthouron24hourclock + positivenumberofhoursinthefuture
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// presentsBudget - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#7

const presentsBudget=(numOfFriends,avgPresentPrice)=>{ // correct
  return (numOfFriends * avgPresentPrice)
}

const presentsBudget = (friend, price) => { // correct
  return friend * price
}

const presentsBudget = (friends, presents) => { // correct
  return friends * presents
}

const presentsBudget = (nFriend, avPrice) => nFriend * avPrice // correct

const presentsBudget = (friends, price) => { // correct
  return friends * price;
};

const presentsBudget = (numberoffriendsyouarebuyingpresentsfor, theavgpriceyouplantobuy) => {  // zero, * not +
  return numberoffriendsyouarebuyingpresentsfor + theavgpriceyouplantobuy
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// perPresent - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#8

const perPresent = (budget, presents) => { // correct
  return budget / presents;
};

const perPresent = (total, n) => { // correct
  return total/n
}

const perPresent = (totalamountofmoney, presentyouneedtobuy) => { // correct
  return totalamountofmoney / presentyouneedtobuy
}

const perPresent = (friends, presents) => { // correct, though first variable name is not quite right
  return friends / presents
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// wrapingCombos - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#9

const wrapingCombos = (numberofkindsofwrappingpaper, numberofkindsofribbions, numberofkindsdecorativebows) => {  // correct
  return numberofkindsofwrappingpaper * numberofkindsofribbions * numberofkindsdecorativebows
}

const wrappingCombos = (p, b, r) => { // correct
  return p *b * r
}

const wrappingCombos = (numPaper, numRibbons, numBows) => numPaper * numRibbons * numBows // correct

const wrapingCombos = (paper, ribbons, bows) => { // zero, needs * not +
  return paper + ribbons + bows;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// biggestNumber - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#10

const biggestNumber = (digits) => { // correct
  return 10 ** digits - 1
}

const biggestNumber = (digits) => { // half, clever idea! but sadly need to convert the string to a number at the end
  let nines = ''
  for (let i = 0; i < digits; i++) {
    nines = nines + '9'
  }
  return nines;
}

const biggestNumber = (numberofdigits) => { // zero, right operator but missing too much
  return numberofdigits**
}

const biggestNumber = (digits) => { // zero
  return Math.floor(digits);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// itemsLeftOver - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#11

const itemsLeftOver = (numP, numI) => { // correct
  return numI % numP;
};

const itemsLeftOver = (ppl, items) => { // half, only works if items is greater than the number of people and  less than twice the number of people
  return items - (items % ppl)
}

const itemsLeftOver = (numberofpeople, numberofitems) => { // zero
  return numberofpeople / numberofitems
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// areaOfCircle - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#12

const areaOfCircle = (r) => Math.PI * (r ** 2) // correct

const areaOfCircle = (radius) => { // correct
  return Math.PI * radius ** 2;
};

const areaofCircle = (radiusofacircle) => { // zero, needs * and **
  return Math.PI (radiusofacircle)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// volumeOfCube - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#13

const volumeOfCube = (a) => a ** 3  // correct

const volumeOfCube = (length) => { // correct
  return length ** 3;
};

const volumeOfCube = (length) => { // correct
  return length ** 3
}

const volumeOfCube=(lengthOfEdge)=>{ // zero
  return (lengthOfEdge * 6)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// populationGrowth - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#14

const populationGrowth = (num1, numDay) => numDay * num1  // correct

const populationGrowth = (current, growth) => { // correct
  return current * growth
}

const populationGrowthRate = (population, growth) => { // correct, let slide wrong function name.
  return population * growth;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// earnedRunAverage - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#15

const earnedRunAverage=(numEarnedRuns,numInningsPitched)=>{ // correct
  return (numEarnedRuns / numInningsPitched)*9
}

const earnedRunaverage = (eRuns, pIn) => { // correct
  return (eRuns / pIn) * 9
}

const earnedRunAverage = (earnedRuns, innings) => { // correct
  return (earnedRuns / innings) * 9;
};

const earnedRunAverage = (earned, innings) => { // correct
  return (earned / innings) * 9
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// valueOfJewels - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#16

const valueOfJewels = (numD, numE, valD, valE) => (valE * numE) + (valD * numD) // correct

const valueOfJewels = (diamonds, emeralds, valueD, valueE) =>  // correct{
  return (diamonds * valueD) + (emeralds * valueE);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// payWithOvertime - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#17

const payWithOverTime = (numWorked, normalRate, overRate) => ((numWorked - 8) * overRate) + (normalRate * 8) // half, only works as long as numWorked is 8 or more.

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstClassPostage - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#18

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// weightOnJupiter - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#19

const weightOnJupiter = (weight) => { // correct
  return weight * (JUPITER_GRAVITY / EARTH_GRAVITY);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// gravity - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#20

const gravity = (mass1, mass2, distance) => { // correct
  return ((mass1 * mass2) / distance ** 2) * G;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// averageWeight - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#21

const averageWeight = (itemWeights, items) => { // correct
  return itemWeights / items
}

const averageWeight=(weightOfitems,numOfItems)=>{ // correct
  return (weightOfitems / numOfItems)
}

const averageWeight = (weight, items) => { // correct
  return weight / items;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// hypotenuse - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#22

const hypotenuse = (l1, l2) => { // correct
  return Math.sqrt(l1**2 + l2**2)
}

const hypotenuse = (length1, length2) => { // half, missing square root.
  return (length1 ** 2) + (length2 ** 2);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// maxRadius - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#23

const maxRadius = (width, height) => { // correct
  if (height >= width) {
    return width/2
  }
  else return height/2
}

const maxRadius = (width, height) => { // zero
  return width * height;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// numCircles - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#24

const numCircles = (radius, width) => { // correct
  return Math.floor(width/(radius*2))
}

const numCircles = (radius, width) => { // zero
  return Math.max(radius * width);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// offset - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#25

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// fireAlarm - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#26

const fireAlarm = (firealarmispulled, plannedfiredrill, smokedetected) => { // correct
  return (firealarmispulled || plannedfiredrill || smokedetected)
}

const fireAlarm = (pulled, smoke, drill) => { // correct
  return pulled || smoke || drill;
};

const fireAlarm = (pulled,smoke,drill) => { // correct
  return (pulled||smoke||drill)
}

const fireAlarm = (pulled, smoke, planned) => { // correct
  return pulled || smoke || planned
}

const fireAlarm=(smokeDetected,planedDrill,alarmPulled)=>{ // correct
  return smokeDetected||planedDrill||alarmPulled
}

const fireAlarm = (pulled, smoke, planned) => { // correct
  return pulled || smoke || planned
}

const fireAlarm = (pulled, smoke, drill) => { // correct
  return pulled || smoke || drill
}

const fireAlarm = (pulled, smoke, drill) => pulled || smoke || drill  // correct

const fireAlarm = (alarm, smoke, drill) => { // correct
  return alarm || smoke || drill;
};

const fireAlarm = (pulled, smokeDetected, planned) => { // zero
  return pulled && smokeDetected || planned
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// canBePresident - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#27

const canBePresident = (age, naturalBornCitizen, usFourteenYears) => { // correct
  return age >= 35 && naturalBornCitizen && usFourteenYears >= 14;
};

const canBePresident = (age, citizen, years) => { // correct
  return age >= 35 && citizen && years >= 14
}

const canBePresident = (age, citezen, years) => { // correct
  return age >= 35 && citezen && years >=14
}

const canBePresident = (age, naturalBorn, lived) => (Math.floor(age)) > 34 && naturalBorn && (Math.floor(lived)) > 13 // correct

const canBePresident = (age, naturalBorn, yearsInUS) => { // correct, I let 37 vs 35 slide.
  return age >= 37 && naturalBorn && yearsInUS >= 14;
};

const canBePresident = (age, naturalborncitizen, yearslivedinUS) => { // correct
  if (age >= 35 && naturalborncitizen && yearslivedinUS >= 14) {
    return true
  }
  else return false
}

const canBePresident = (ageInYears, bornCitizen, yearsLivedInUs) => { // half
  return ageInYears>35 && bornCitizen && yearsLivedInUs
}

const canBePresident = (atleast35yearsold, naturalborncitizen, livedinUSfor14years) => { // half
  return (atleast35yearsold && naturalborncitizen && livedinUSfor14years)
}

const canBePresident=(atLeast35,naturalBornCitizen,liveInUS14Years)=> { // half
  return atLeast35 && naturalBornCitizen && liveInUS14Years
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// willSeeTweet - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#28

const willSeeTweet=(followingTweeter,followingRetweeter,noTweetIfblocked) => { // correct
  return (followingTweeter || followingRetweeter) && !noTweetIfblocked
}

const willSeeTweet = (follow, followretweet, blocked) => { // correct, though *way* too complicated!
  if (follow && !followretweet && !blocked || !follow && followretweet && !blocked || follow && followretweet && !blocked) {
    return true
  }
  else return false
}

const willSeeTweet = (followThePerson, followThePersonWhoRT, blocked) => { // half, missing return
  (followThePerson || followThePersonWhoRT) && !blocked;
};

const willSeeTweet = (followthepersontweet, followapersonretweeted, blocked) => { // half, precedence not quite right
  return (followthepersontweet || followapersonretweeted && ! blocked)
}

const willSeeTweet =  (followed, retweeted, blocked) => { // half, same
  return followed || retweeted && !blocked
}

const willSeeTweet = (follow, retweet, blocked) => { // half, same
  return follow || retweet && !blocked;
};

const willSeeTweet = (ft,fsrt,bt) => { // half
  return (ft||fsrt||!bt)
}

const willSeeTweet = (follows, retweet, blocked) => { // half
  return follows || retweet || !blocked
}

const willSeeTweet = (tweeter, retweeterFollower, blocked) => { // half, precedence plus & instead of &&
  return tweeter || retweeterFollower &! blocked
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// needHeavyCoat - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#29

const needHeavyCoat = (goingoutside, somewherecold) => { // correct
  return goingoutside && somewherecold
}

const needHeavyCoat = (goingOutside, cold) => { // correct
  return goingOutside && cold;
};

const needHeavyCoat = (outside, cold) => { // correct
  return outside && cold
}

const needHeavyCoat = (goingOutside, somewhereCold) => { // correct
  return goingOutside && somewhereCold
}

const needHeavyCoat=(goingOutside,somewhereCold)=>{ // correct
  return goingOutside && somewhereCold
}

const needHeavyCoat = (out, cold) => { // correct
  return out && cold
}

const needHeavyCoat = (goOutside, cold) => { // correct
  return goOutside && cold
}

const needHeavyCoat = (cold, outside) => { // correct
  return cold && outside
}

const needHeavyCoat = (outside, cold) => { // correct
  return outside && cold;
};

const needHeavyCoat = (outside, cold) => { // correct
  if (outside && cold) {
    return true
  }
  else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// needSunscreen - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#30

const needSunscreen = (beach, skiing) => { // correct
  return beach || skiing
}

const needSunscreen = (beach, skis) => { // correct
  return beach || skis
}

const needSunscreen = (goingToBeach, goingSkiing) => { // correct
  return goingToBeach || goingSkiing
}

const needSunscreen=(goingSkiing,goingToBeach)=>{ // correct
  return goingSkiing||goingToBeach
}

const needSunscreen = (beach, ski) => { // correct
  return beach || ski
}

const needSunscreen = (goToBeach, goSkiing) => { // correct
  return goToBeach || goSkiing
}

const needSunScreen = (beach, ski) => beach || ski // correct

const needSunscreen = (beach, skiing) => { // correct
  if (!beach && !skiing) {
    return false
  }
  else return true
}

const needSunScreen = (goingToBeach, goingSkiing) => { // half, missing return
  goingToBeach || goingSkiing;
};

const needSunscreen = (beach, skiing) => { // zero
  return beach && skiing;
};

const needSunscreen = (goingtothebeach, goingskiing) => { // zero
  return goingtothebeach && goingskiing
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// needMittens - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#31

const needMittens = (goingoutside, somewherewarm) => { // correct
  return goingoutside && ! somewherewarm
}

const needMittens = (outside, warm) => { // correct
  return outside && !warm
}

const needMittens=(goingOutside,somewhereWarm)=>{ // correct
  return goingOutside&&!somewhereWarm
}

const needMittens = (out, warm) => { // correct
  return out && !warm
}

const needMittens = (goOut, warm) => { // correct
  return goOut && !warm
}

const needMittens = (outside, warm) => { // correct
  return outside && !warm;
};

const needMittens = (goingOutside, somewhereWarm) => { // half, missing return
  goingOutside && !somewhereWarm;
};

const needMittens = (goOutside, warm) => { // half, & instead of &&
  return goOutside &! warm
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isVenomous - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#32

const isVenomous = (striped, blue) => { // correct
  return striped || !blue;
};

const isVenomous = (striped,blueHead) => { // correct
  if(!striped && blueHead ){
    return false}
    else true
}

const isVenomous = (stripedSnake, blueHeaded) => { // half, missing return
  stripedSnake || !blueHeaded;
};

const isVenomous = (stripedsnake, blueheadsnake) => { // half, logic not quite right
  return stripedsnake && ! blueheadsnake
}


const isVenomous = (stripedSnake, blueHeadSnake) => { // half, logic not quite right plus & instead of &&
  return stripedSnake &! blueheadSnake
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isMagicNumber - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#33

const isMagicNumber = (n) => { // correct
  return n === 42 || n === 17
}

const isMagicNumber = (x) => { // correct
  return x === 42 || x === 17
}

const isMagicNumber = (number) => { // zero, can't index numbers.
  return number[42] || number[17];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// canSleepIn - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#34

const canSleepIn = (weekday, vacation) => { // correct
  return !weekday || vacation;
};

const canSleepIn = (weekday, vacation) => { // correct
  if (!weekday || vacation) { return true
  }
  else return false
}

const canSleepIn = (weekday,vacation) => { // correct, let the misspelling of false slide.
  if (!vacation && weekday){
    return flase}
    else true
}

const canSleepIn = (weekday, vacation) => { // half, exactly inverted
  return !weekday && vacation
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// canGoToProm - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#35

const canGoToProm = (senior, inviteSen, promEx) => (senior || inviteSen) && !promEx // correct

const canGoToProm = (senior, invited, list) => { // half, operator precedence problem, && is higher than ||
  return (senior || invited && !list)
}

const canGoToProm = (senior, invited, exclusion) => { // half, same
  return senior || invited && exclusion
}

const canGoToProm = (senior, invited, list) => { // half, same
  return senior || invited && !list
}

const canGoToProm = (senior, invited, excluded) => { // half, same
  return senior || invited && !excluded;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// getsSpeedingTicket - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#36

const getsSpeedingTicket = (carSpeed, copIsGrouchy) => { // correct
  return carSpeed > 65 && copIsGrouchy || carSpeed > 70
}

const getsSpeedingTicket = (mph, grouchyCop) => { // correct
  return (mph > 70 && !grouchyCop) || (mph > 65 && grouchyCop);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// evenGreaterThanZero - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#37

const evenGreaterThanZero = (number) => { // correct
  return number > 0 && number % 2 === 0;
};

const evenGreaterThanZero = (number) => { // correct
  return number > 0 && number % 2 === 0
}

const evenGreaterThanZero = (n) => { // half, need % not /
  if (n/2 === 0 && n > 0) return true
  else return false
}

const evenGreaterThanZero = (num) => { // half, need % not /
  return num / 2 === 0 && num > 0;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isLeapYear - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#38

const isLeapYear = (year) => { // correct
  return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)
}

const isLeapYear = (year) => { // zero, wants % not /
  return year / 4 === 0 || (year / 100 === 0 && year / 400 === 0);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// okaySpeed - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#39

const okaySpeed = (postedMph, carMph) => { // half, this is exactly inverted from the desired output.
  return carMph >= postedMph + 10 || carMph <= postedMph - 10;
};

const okaySpeed = (speedlimitinmilesperhour, speedacarisgoinginmilesperhour) => { // zero, needs some math.
return speedlimitinmilesperhour && speedacarisgoinginmilesperhour
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// twiceAsExpensive - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#40

const twiceAsExpensive = (price1, price2) => { // correct
  return price1 > price2 * 2
}

const twiceAsExpensive = (item1, item2) => { // correct
  return item1 > (item2 * 2);
};

const twiceAsExpensive = (price1, price2) => { // half, should be > not ===
  return price1 === price2 * 2
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// winningRecord - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#41

const winningRecord = (wins, losses, ties) => { // correct
  return wins > losses + ties
}

const winningRecord = (wins, losses, ties) => { // correct
  return wins > losses + ties;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// aFartherThanB - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#42

const aFartherThanB = (num, num2, num3) => (num - num3) > (num2 - num3) // half, needs absolute value

const aFartherThanB = (num1, num2, num3) => { // half, same
  return num3 - num1 > num3 - num2;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstFewEveryOther - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#43

const firstFewEveryOther = (s) => s[0] + s[2] + s[4]; // correct

const firstFewEveryOther = (s) => { // correct
  return s[0] + s[2] + s[4]
}

const firstFewEveryOther = (s) => { // correct
  return s[0] + s[2] + s[4]
}

const firstFewEveryOther = (string) => { // correct
  return string[0] + string[2] + string[4]
}

const firstFewEveryOther=(s)=>{ // correct
  return s[0]+s[2]+s[4]
}

const firstFewEveryOther = (s) => { // correct
  return s[0] + s[2] + s[4]
}

const firstFewEveryOther = (s) => { // half, mising return
  s[0] + s[2] + s[4]
};

const firstFewEveryOther = (s) => { // zero, mixing method calling and indexing
  return s.substring[0] + s.substring[2] + s.substring[4]
}

const firstFewEveryOther = (s) => { // zero, substring doesn't work that way.
  return s.substring(0, 2, 4);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstHalf - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#44

const firstHalf = (s) => // correct
  s.substring(0, s.length / 2);

const firstHalf = (s) =>{ // correct
return s.substring(0,s.length/2)
}

const firstHalf = (s) => s.substring(0, (s.length / 2)); // correct

const firstHalf = (s) => { // correct
  return s.substring(0, s.length / 2)
}

const firstHalf = (s) => { // correct
  return s.substring(0, s.length / 2)
}

const firstHalf = (string) => { // correct
  return string.substring(0,string.length/2)
}

const firstHalf=(s)=>{ // correct
  return s.substring(0,s.length/2)
}

const firstHalf = (s) => { // correct
  return s.slice(0, s.length/2)
}

const firstHalf = (s) => { // correct
  return s.substring(0, s.length/2)
}

const firstHalf = (s) => { // correct
  return s.substring(0, s.length / 2);
};

const firstHalf = (s) => { // zero
  return s.substring(1,0)+s.substring(s.length/2)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// secondHalf - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#45

const secondHalf = (s) => { // correct
  return s.substring(s.length/2)
}

const secondHalf = (s) => s.substring(s.length / 2); // correct

const secondHalf = (s) => // correct, though I'd write it all one one line to emphasize that it's in shorthand form
  s.substring(s.length / 2);

const secondHalf = (s) => { // correct
  return s.substring(s.length / 2)
}

const secondHalf = (s) => { // correct
  return s.substring(s.length/2)
}

const secondHalf = (s) => { // correct
  return s.substring(s.length / 2)
}

const secondHalf=(s)=>{ // correct
  return s.substring(s.length/2)
}

const secondHalf = (s) => { // correct
  return s.slice(s.length/2, s.length)
}

const secondHalf = (s) => { // correct
  return s.substring(s.length / 2);
};

const secondHalf = (string) => { // correct, but second arg to substring is not needed in this case
  return string.substring(string.length/2,string.length)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// swapFrontAndBack - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#46

const swapFrontAndBack = (s) => { // correct, love the use of the other functions.
  return secondHalf(s) + firstHalf(s)
}

const swapFrontAndBack = (string) => { // correct, same
  return secondHalf(string) + firstHalf(string)
}

const swapFrontAndBack = (s) => { // correct
  return secondHalf(s) + firstHalf(s)
}

const swapFrontAndBack = (s) =>{ // correct, love the use of the other functions. Could use some indentation.
return secondHalf(s)+ firstHalf(s)
}

const swapFrontAndBack = (s) => // correct
  s.substring(s.length / 2) + s.substring(0, s.length / 2);

const swapFrontAndBack = (s) => s.substring(s.length / 2) + s.substring(0, (s.length / 2)); // correct

const swapFrontAndBack = (s) => { // correct
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

const swapFrontAndBack = (s) => s.substring(s.length/2) + s.substring(0, s.length/2) // correct

const swapFrontAndBack = (s) => { // correct
  return s.substring(s.length / 2) + s.substring(0, s.length / 2);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// upDown - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#47

const upDown = (s) => // correct
  s.toUpperCase() + s.toLowerCase();

const upDown = (s) => { // correct
return s.toUpperCase()+s.toLowerCase()
}

const upDown = (s) => s.toUpperCase() + s.toLowerCase(); // correct

const upDown = (s) => { // correct
  return s.toUpperCase() + s.toLowerCase()
}

const upDown = (s) => { // correct
  return s.toUpperCase() + s.toLowerCase()
}

const upDown = (string) => { // correct
  return string.toUpperCase() + string.toLowerCase()
}

const upDown = (s) => { // correct
  return s.toUpperCase() + s.toLowerCase()
}

const upDown = (s) => { // correct
  return s.toUpperCase() + s.toLowerCase()
}

const upDown = (s) => { // correct
  return s.toUpperCase() + s.toLowerCase();
};

const upDown = (s) => { // half, literally half right, i.e. the first half.
  return s.toUpperCase() + push.s
}

const upDown = (s) => { // zero
  return s.substring(toUpperCase(0,2))+s.substring(s.length*2)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// upDownLastCharacter - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#48

const upDownLastCharacter = (s) => s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase(); // correct

const upDownLastCharacter = (s) => { // correct
  return s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase;
};

const upDownLastCharacter = (s) => { // correct
  return s.slice(s.length - 1).toUpperCase() + s.slice(s.length - 1).toLowerCase()
}

const upDownLastCharacter = (s) => { // correct
  return s.substring(s.length - 1, s.length).toUpperCase() +
    s.substring(s.length - 1, s.length).toLowerCase()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstAndLast - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#49

const firstAndLast = (s) => // correct
  s[0] + s[s.length - 1];

const firstAndLast = (s) => s[0] + s[s.length - 1]; // correct

const firstAndLast = (s) => { // correct
  return s[0] + s[s.length - 1]
}

const firstAndLast = (s) => { // correct
  return s[0] + s[s.length - 1];
};

const firstAndLast = (s) => { // correct
return s[0]+ s.substring(s.length-1)
}

const firstAndLast = (s) => { // correct
  return s[0] + s.substring(s.length - 1, s.length)
}

const firstAndLast = (s) => { // half
  return s.substring(0,1) + s.substring(s.length, -1)
}

const firstAndLast=(s)=>{ // zero
  return s.substring(0)+ s.substring(s.length -1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// simplePigLatin - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#50

const simplePigLatin = (s, v) => { // correct
  return s.substring(v, s.length) + s.substring(0, v) + 'ay'
}

const simplePigLatin = (s, x) => s.substring(x - 1) + s.substring(0, x - 1) + 'ay'; // half, basically right but off by one

const simplePigLatin = () => { // zero
  return s.substring(s.search(/['aeiou']/))+s.substring(0,s.search -1)+'aeiou'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// randomCharacter - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#51

const randomCharacter = (s) => s[rand(s.length)]; // correct

const randomCharacter = (s) => { // correct
  return s[rand(s.length)]
}

const randomCharacter = (s) => { // correct
  return s[rand(s.length)]
}

const randomCharacter = (s) => { // zero, rand was specified to take a number, not a string.
  return rand(s);
};

const randomCharacter = (s) =>{ // zero
return Math.random(s)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// randomCharacterUpDown - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#52

const randomCharacterUpDown = (s) => { // correct
  let n = rand(s.length);
  return s[n].toUpperCase() + s[n].toLowerCase();
}

const randomCharacterUpDown = (s) => { // half, calling rand twice will pick two different random characters.
  return s[rand(s.length)].toUpperCase() +
    s[rand(s.length)].toLowerCase()
}

const randomCharacterUpDown = (s) => { // zero, incorrect use of rand plus the double rand issue of the previous
  return rand(s).toUpperCase + rand(s).toLowerCase;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isAllUpperCase - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#53

const isAllUpperCase = (s) => s.toUpperCase() === s; // correct

const isAllUpperCase = (s) => { // correct
  if (s.toUpperCase() === s) {
    return true
  } else {
    return false
  }
}

const isAllUpperCase = () => { // correct
  return s.toUpperCase() ===s
}

const isAllUpperCase = (s) => { // correct
  if (s === s.toUpperCase()) { return true
  }
  else return false
}

const isAllUpperCase = (s) => s.toUpperCase() === s // correct

const isAllUpperCase = (s) => { // half, need to call toUpperCase
  return s === s.toUpperCase
}

const isAllUpperCase=(s)=>{ // zero, no comparison, need to call toUpperCase, and substring is gratuitious
  return s.substring().toUpperCase
}

const isAllUpperCase = (s) => { // zero, toUpperCase doesn't take arguments and doesn't return a boolean
  if (s.toUpperCase(s.length()) === true) {
    return true
  }
  else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sameIgnoringCase - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#54

const sameIgnoringCase = (s, i) => s.toLowerCase() === i.toLowerCase(); // correct

const sameIgnoringCase = (s1, s2) => { // correct
  if (s1.toUpperCase() === s2.toUpperCase()) {
    return true
  } else {
    return false
  }
}

const sameIgnoringCase = (s1, s2) => { // zero, doesn't ignore case
  if (s1 === s2) { return true
  }
  else return false
}

const sameIgnoringCase = (s1, s2) => { // zero, same as previous
  return s1 === s2;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstName - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#55

const firstName = (s) => s.substring(0, s.indexOf(' ')); // correct

const firstName = (s) => { // correct
  return s.substring(0, s.indexOf(' '))
}

const firstName = (s) => { // zero, need to use indexOf and also the - 1 isn't needed.
  return s.indexOf(0, ' ' - 1);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// lastName - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#56

const lastName = (s) => s.substring(s.indexOf(' ') + 1); // correct

const lastName = (s) => { // correct, though second argument, s.length, not actually needed in this case
  return s.substring(s.indexOf(' ') + 1, s.length)
}

const lastName = (s) => { // zero, needs indexOf.
  return s.indexOf(' ' + 1);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// initials - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#57

const initials = (s) => s[0] + s[s.indexOf(' ') + 1] // correct

const initials = (s) => { // correct
  return s.substring(0, 1) +
    s.substring(s.indexOf(' ') + 1, s.indexOf(' ') + 2)
}

const initials = (s) => { // half, needs indexOf
  return s[0] + s[' ' + 1];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// upToX - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#58

const upToX = (s) => s.substring(0, s.indexOf('x')) // correct

const upToX = (s) => { // correct
  return s.substring(0, s.indexOf('x'))
};

const upToX = (s) => { // correct
  return s.substring(0, (s.indexOf('x')))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// charactersAround - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#59

const charactersAround = (s, i) => s[i - 1] + s[i + 1] // correct

const charactersAround = (s, i) => { // correct
  return s.substring(i - 1, i) + s.substring(i + 1, i + 2)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// middle - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#60

const middle = (s) => s.substring(s.length / 4, (s.length / 4) * 3) // correct

const middle = (s) => { // correct
  return s.substring(s.length / 4, s.length - s.length / 4);
}

const middle = (string) => { // correct
  return string.substring(string.length / 4, string.length / 4 * 3)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// pair - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#61

const paire = (s1, s2) => { // correct
  return s1 + ' and ' + s2
}

const paire = (string1, string2) => { // correct
  return string1 + ' and ' + string2
}

const paire = (s1, s2) => s1 + ' and ' + s2 // correct

const pair = (s1, s2) => s1 + 'and' + s2 // half, missing the spaces around the "and"

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// containsX - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#62

const containsX = (s) => { // correct
    if (s.indexOf('x') >= 0) {
    return true
  } else {
    return false
  }
}

const containsX = (string) => { // correct
  for (let x = 0; x < string.length; x++) {
    if (string[x] === 'x') {
      return true
    }
  }
  return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// slug - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#63

const slug = (string1, string2, string3) => { // correct
  return string1.toLowerCase() + '-' + string2.toLowerCase() + '-' + string3.toLowerCase()
}

const slug = (s, s2, s3) => { // correct
  return (s + '-' + s2 + '-' + s3).toLowerCase()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// capitalize - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#64

const capitalize = (string) => { // correct
  return string[0].toUpperCase() + string.substring(1, string.length).toLowerCase()
}

const capitalize = (s) => { // zero, toUpperCase doesn't take arguments.
  return s.toUpperCase(0,1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// capitalizeName - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#65

const capitalizeName = (fullName) => { // correct
  return capitalize(fullName.substring(0, fullName.indexOf(' '))) + ' ' + capitalize(fullName.substring(fullName.indexOf(' ') + 1, fullName.length))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// moreThanTwiceAsLong - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#66

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// yesIfEven - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#67

const yesIfEven = (n) => { // correct
  if (n % 2 === 0) {
    return "yes"
  }
  else return 'no'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// logIfOk - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#68

const logIfOk = (o) => { // correct
  if (isOk(o)) {
    log(o)
  }
}

const logIfOk = (n) => { // correct
  if (isOk(n))
  log(n)
}

const logIfOk = (a) => { // correct
  if (isOk(a) === true)
    log(a)
}

const logIfOk = (n) => { // half, for basic logic and structure
  if (isOk(n)) {
    log.isOK
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// firstOk - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#69

const firstOk = (arg) => { // correct
  for (let i = 0; i < arg; i++) {
    if (isOk(arg)) {
      return i
    }
  }
}

const firstOk = (x) => { // correct
  for(let i = 0; i < x; i++) {
    if (isOk(i)) { return i; }
  }
}

const firstOk = (num) => { // half, right structure
  for (let i = 0; i < num; i++) {
    if (num === isOk) {
      return isOk
    }
    else return undefined
  }
}

const firstOk = (x) => { // zero
  for (let i =0; i < x; i++);
  if(isOk(i))
  return firstOk
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// timeToLeet - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#70

const timeToLeet = () => { // correct
  let count = 0;
  while (!isLeet(random10k())) {
    count++;
  }
  return count;
};

const timeToLeet = () => { // correct
  let count = 0;
  while (!isLeet(random10k())) {
   count++
  }
  return count;
}

const timeToLeet = () => { // zero, wrong use of isLeet function.
  for (let i = 0; i < i + 1; i++) {
    if (random10k() === isLeet()) {
      return i
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// classify - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#71

const classify = (o) => { // correct
  if (isOk(o)) {
    recordOk(o)
  } else {
    recordNotOk(o)
  }
}

const classify = (arg) => { // correct
  if (isOk(arg)) {
    recordOk(arg)
  } else {
    recordNotOk(arg)
  }
}

const classify = (x) => { // correct, letting slide some typos 0 for O and Notok rather than NotOk
 if (isOk(x)) {
   record0k(x);
 } else {
   recordNotok(x);
 }
}

const classify = (v) => { // correct
  if (isOk(v) === true)
  recordOk(v)
  else {
  recordNotOk(v)
}
}

const classify = (v) => { // half, right structure. Didn't use isOk as a function
  if (v === isOk) { return recordOk(v)
  }
  else return recordNotOk(v)
}

const classify = (num) => { // half, correct use of isOk, didn't call recordOk and recordNotOk
  if (isOk(num) === true) {
    return recordOk
  }
  else return recordNotOk
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// threewayClassify - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#72

const threewayClassify = (o) => { // correct
  if (isOk(o)) {
    recordOk(o)
  } else if (isMeh(o)) {
    recordMeh(o)
  } else {
    recordNotOk(o)
  }
}

const threewayClassify = (x) => { // correct
  if (is0k(x)) {
   record0k(x);
 } else if (isMeh(x)) {
   recordMeh (x);
 } else {
   recordNot0k(x);
}}

const threewayClassify = (v) => { // half, right structure. Didn't use isOk and isMeh
  if (v === okay) { return recordOk(v)
  }
  if (v === meh) { return recordMeh(v)
  }
  else return recordNotOk(v)
}

const threewayClassify = (num) => { // half, right structure and used isOk and isMeh but didn't call other functions
  if (isOk(num) === true) {
    return recordOk
  }
  else if (isMeh(num) === true) {
    return recordMeh
  }
  else return recordNotOk
}

const threewayClassify = (arg) => { // zero, always returns true.
return isOk(arg) || isMeh(arg) || isNotOk(arg)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sumOfSquares - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#73

const sumOfSquares = (n) => { // correct
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i ** 2
  }
  return sum
}

const sumOfSquares = (arg) => { // correct
  let final = 0
  for (let i = 0; i < arg; i++) {
    final = final + i**2
  }
  return final
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// pairs - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#74

const pairs = (number) => { // correct
  for (let x = 1; x < number; x++) {
    for (let y = 1; y < number; y++) {
      pair(x, y)
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// timesTable - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#75

const timesTable = (number) => { // correct
  for (let x = 1; x < number + 1; x++) {
    for (let y = 1; y < number + 1; y++) {
      emit(x, y, x * y)
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sumSquares - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#76

const sumSquares = (n) => { // half, n is a number so n.length doesn't make sense
  let sum = 0
  for(let i = 0; i < n.length; i++) {
    sum = sum + i**2
  }
  return sum
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// countXs - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#77

const countXs = (s) => { // correct
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      count++
    }
  }
  return count
}

const countXs = (s) => { // correct
  let xs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x')
      xs++
  }
  return xs
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// makeRow - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#78

const makeRow = () => { // correct
  return ['', '', '']
}

const makeRow = () => { // correct
  return ['','','']
}

const makeRow = () => { // correct
  return [' ', ' ', ' ']
}

const makeRow = () => { // correct
  return ['','','']
}

const makeRow=()=>{ // correct
  return ['','','']
}

const makeRow = () => { // correct
  return ['', '','']
}

const makeRow = () => { // correct
  return ['' , '' , '']
}

const makeRow = () => { // correct, let slide the ' ', vs ''.
  return [' ', ' ', ' ']
};

const makeRow = () => { // half, missing return
  ['','','']
}

const makeRow = () => { ['', '', ''] } // half, also missing return

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// makeBoard - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#79

const makeBoard = () => { // correct
  return [makeRow(), makeRow(), makeRow()]
};

const makeBoard = () => { // correct
  return [makeRow(), makeRow(), makeRow()]
}

const makeBoard = () => { // correct
  return [
    makeRow(), makeRow(), makeRow(),
  ]
}

const makeBoard = () => { // correct
  return [makeRow(), makeRow(), makeRow()]
}

const makeBoard = () => { // correct
  return [['', '', ''],['', '', ''],['', '', '']]
}

const makeBoard = () => { // correct
  return [
    makeRow(),
    makeRow(),
    makeRow(),
    ]
}

const makeBoard = () => { // half, missing return
  [['', '', '']
  ['', '', '']
  ['', '', '']];
}

const makeBoard = () => { // zero, not an array, not calling makeRow
  makeRow,
  makeRow,
  makeRow;
}

const makeBoard=()=>{ // zero, not an array, not calling makeRow
  return (makeRow + makeRow + makeRow)
}

const makeBoard = () => { // zero, not an array, not calling makeRow
  makerow,
  makerow,
  makerow;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// allTheSame - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#80

const allTheSame = (a) => { // correct
  return a[0] === a[1] && a[1] === a[2]
};

const allTheSame = (ary) => (ary[0] === ary[1] && ary[0] === ary[2]); // correct

const allTheSame = (array) => { // correct
  return array[0] === array[1] && array[0] === array[2]
}

const allTheSame = (arrayOfElements) => { // correct
  return arrayOfElements[0] === arrayOfElements[1] && arrayOfElements[0] === arrayOfElements[2]
}

const allTheSame = (array) => { // correct
  return array[0] === array[1] && array[1] === array[2]
}

const allTheSame = (array) => { // correct
  return array[0] === array[1] && array[1] === array[2]
}

const allTheSame = (array) => { // correct, but the formatting is off
  if (array[0] === array[1] && array[1] === array[2]) { return true
  }
else return false
}

const allTheSame = (array) => { // correct, this is nice in that it works for arrays of any length
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      return false
    }
  }
  return true
}

const allTheSame = (xs) => { // correct, same as previous
  for (let i = 1; i < xs.length; i++) {
    if (xs[0] !== xs[i]) return false;
  }
  return true;
};

const allTheSame = ([a, b, c]) => (a === b) && (a === c) // correct, this is quite stylish but only works because of an advanced feature we haven't discussed but

const allTheSame = (element1, element2, element3) => { // zero, wrong number of arguments
  return element1 === element2 && element2 === element3
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// extractColumn - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#81

const extractColumn = (board, c) => { // correct
  let col = [];
  for (let r = 0; r < board.length; r++) {
    col.push(board[r][c]);
  }
  return col;
};

const extractColumn = (board, collumn) => { // correct
  let extraction = []
  for (let i = 0; i < 3; i++) {
    extraction.push(board[i][collumn])
  }
  return extraction
};

const extractColumn = (array, index) => { // correct
  let newArr = []
  for (let i = 0; i < array.length; i++){
    newArr.push(array[i][index])
  }
  return newArr
}

const extractColumn = (ary, i) => { // correct
  let ary2 = ['', '', '']
  ary2[0] = ary[0] [i]
  ary2[1] = ary[1] [i]
  ary2[2] = ary[2] [i]
  return ary;
}

const extractColumn = (board, index) => { // correct
  let extract = []
  for (let i = 0; i < 3; i++) {
    extract.push(board[i][index])
  }
  return extract
}

const extractColumn = (board, index) => { // correct
  return [board[0][index], board[1][index], board[2][index]]
}

const extractColumn = (board,column) => { // half, variable names got mixed up.
  let column = []{
  }
  for(let i =0 ; i < board.length; i ++){
    column(board[r][c]);
  }
  return col;
}

const extractColumn = (board, index) => { // half, syntax around push got mangled
  let newBoard = []
  for (let i = 0; i < board.length; i++) {
    newBoard.push[i][index]
  }
  return newBoard
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// fillTimesTable - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#82

const fillTimesTable = (array) => { // correct
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      array[x][y] = (x + 1) * (y + 1)
    }
  }
  return array
}

const fillTimesTable = (array) => { // zero, this creates a new array rather than filling in the given array and calls push with too many arguments.
  let table = []
  for (let i = 0; i < array.length; i++) {
    table.push((i + 1), (i + 1) * 2, (i + 1) * 3)
  }
  return table
};

const fillTimesTable = (array) => { // zero, incomplete plus shouldn't be using push.
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      array.push()
    }
  }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// sums - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#83

const sums = (n) => { // correct
  let sum = 0
  let summy = []
  for (let i = 0; i < n+1; i++) {
    summy.push(sum = sum + i)
  }
  return summy
};

const sums = (n) => { // correct
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

const sums = (number) => { // half, pushes an extra 0 at the beginning.
  let array = [0]
  for (let x = 0; x < number; x++) {
    array.push(x + array[x])
  }
  return array
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// rule110 - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#84

const rule110 = (array) => { // half, for being the only one to attempt it. this is a *hard* problem.
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

const isSamePoint = (point1, point2) => { // correct
  return (point1.x === point2.x) && (point1.y === point2.y)
};

const isSamePoint = (obj1, obj2) => obj1.x === obj2.x && obj1.y === obj2.y; // correct

const isSamePoint = (p1,p2) => { // correct
  return p1.x === p2.x && p1.y === p2.y
}

const isSamePoint = (p1, p2) => { // correct
  if (p1.x === p2.x && p1.y === p2.y) { return true
  }
  else return false
}

const isSamePoint = (p1, p2) => { // correct
  return (p1.x === p2.x) && (p1.y === p2.y)
}

const isSamePoint = (point1,point2) => { // half, needs === not =
  return (point1.x = point2.x) && (point1.y = point2.y)
}

const isSamePoint = (p1, p2) => { // half, needs === not =
  return (p1.x = p2.x) && (p1.y = p2.y)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// area - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#86

const area = (rect) => { // correct
  return rect.width * rect.height
};

const area = (obj) => obj.width * obj.height; // correct

const area = (rect) => { // correct
  return rect.width * rect.height
}

const area = (r) => { // correct
  return r.width * r.height
}

const area = (w, h) => w * h // zero, would be correct if arguments were numbers not a single object as specified

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// totalWithTip - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#87

const totalWithTip = (subtotal, tip) => { // correct
  let totals = {}
  totals.subtotal = subtotal.subtotal
  totals.tip = subtotal.subtotal*tip
  totals.total = (subtotal.subtotal*tip) + subtotal.subtotal
  return totals
};

const totalWithTip = (receet, tip) => { // correct
  return {subtotal: receet.subtotal, tip: receet.subtotal * tip, total: receet.subtotal + receet.subtotal * tip}
}

const totalWithTip = (object, number) => { // correct
  return {subtotal: object.subtotal, tip: object.subtotal*number, total: object.subtotal + object.subtotal*number}
}

const totalWithTip = (o, n) => { // correct
  let t = o.subtotal * n
  let all = o.subtotal + tip
  return {subtotal: o.subtotal, tip: t, subtotal: all}
}

const totalWithTip = (subtotal, percentageTip) => { // half, first argument is an object plus totalExcludingTip is never defined
  let tip = subtotal * percentageTip
  let total = tip + subtotal
  return { subtotal: totalExcludingTip, tip: tipValue, total: totalValue }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// higherPaid - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#88

const higherPaid = (employee1, employee2) => { // correct
  if (employee1.salary > employee2.salary) {
    return employee1
  }
  return employee2
};

const higherPaid = (e1, e2) => { // correct
  if (e1.salary < e2.salary) {
    return e2
  }
  else return e1
}

const higherPaid = (e1, e2) => { // correct
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }
}

const higherPaid = (employee1, employee2) => { // correct
  if (employee1.salary > employee2.salary) {
    return employee1
  }
  else {
    return employee2
  }
}

const higherPaid = (employee1, employee2) => { // correct
  if (employee1.salary > employee2.salary) {
    return employee1
  } else {return employee2}
}

const higherPaid = (e1, e2) => { // correct
  if (e1.salary > e2.salary) { return e1
  }
  else return e2
}

const higherPaid = (x1,x2) => { // correct
  if (x1.salary > x2.salary){
    return x1;
  } else if (x2.salary > x1.salary){
    return x2;
} }

const higherPaid=(salery1,salery2)=>{ // zero, arguments are objects not numbers
   if(salery1 > salery2)
   return salery1
   else
   return salery2
}

const higherPaid = (salary1, salary2) => { // zero, syntax is very muddled.
  if ([salary1] > [salary2]) {
    return [salary1]
  }
  if ([salary1] < [salary2]) {
    return [salary2]
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// isWinner - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#89

const isWinner = (player) => { // correct
  return player.score > 100
}

const isWinner = (player) => { // correct
  return player.score > 100
}

const isWinner = (scores) => { // correct
  return scores.score > 100
};

const isWinner = (o) => { // correct
  return o.score > 100
}

const isWinner = (object) => { // correct
  return object.score > 100
}

const isWinner = (obj) => { // correct, but formatting is wonky
  if (obj.score > 100) { return true
  }
  else return false
}

const isWinner = (obj) => obj.score > 100  // correct

const isWinner=(score)=>{ // half, logic is right but argument is an object not a number
  if (score > 100)
  return true
  else
  return false
}

const isWinner = (score) => { // half, same as previous
  if (score > 100) {
    return true
  }
  else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// updateWins - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#90

const updateWins = (playerList) => { // half, this is closest, missing only a .length in x < playerList.length
  for (let x = 0; x < playerList; x++) {
    if (isWinner(playerList[x])) {
      playerList[x].wins = playerList[x].wins + 1
    }
  }
}

const updateWins = (scores) => { // half, logic is basically right but scores is an array, not a single object.
  if (isWinner(scores.score)); {
    scores.wins=scores.wins++
  }
  return 'undefined'
};

const updateWins = (player) => { // half, similar to previous
  if (player.score > 100) {
    player.wins++
  }
  return
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// bigWinners - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#91

const bigWinners = (players) => { // correct
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

const makeMove = (mark, row, column) => { // correct
  return { mark: mark, row: row, column: column };
};

const makeMove = (m, r, c) => { // correct
  return { m: m, r: r, c: c, };
}

const makeMove = (x , y , o) => { // correct
  let makeMove = {'mark' : x , 'row' : y , 'column' : o }
  return makeMove
}

const makeMove = (xorO, row, column) => { // correct, due to shorthand object notation for row and column
  return {mark: xorO, row, column}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// placeMark - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#93

const placeMark = (board, move) => { // correct
  board[move.row][move.column] = move.mark
}

const placeMark = (board, move) => { // correct
  board[move.row][move.column] = move.mark;
};

const placeMark = (board, move ) => { // half, basically right except extra comma
  return board [move.row] , [move. coloumn] = move.mark;
}

const placeMark = (array, moves) => { // zero
  for (let i = 0; i < array.length; i++) {
    placeMark(array, moves[i])
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// recordMove - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#94

const recordMove = (array, move) => { // correct
  array.push(move)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// rowForMove - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#95

const rowForMove = (array, n) => { // correct
  return array[n].row
}

const rowForMove = (moveobjects, index) => { // correct
  return moves[index].row
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// placeMoves - https://intro.gigamonkeys.com/assessments/2022-12-16-fall-semester-final/#96

// no one tried it
