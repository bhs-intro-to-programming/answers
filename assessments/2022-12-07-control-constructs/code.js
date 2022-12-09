const logIfOk = (x) => {
  if (isOk(x)) {
    log(x);
  }
};

const firstOk = (limit) => {
  for (let n = 0; n < limit; n++) {
    if (isOk(n)) {
      return n;
    }
  }
};

const timeToLeet = () => {
  let count = 0;
  while (!isLeet(random10k())) {
    count++;
  }
  return count;
};

const classify = (x) => {
  if (isOk(x)) {
    recordOk(x);
  } else {
    recordNotOk(x);
  }
};

const threewayClassify = (x) => {
  if (isOk(x)) {
    recordOk(x);
  } else if (isMeh(x)) {
    recordMeh(x);
  } else {
    recordNotOk(x);
  }
};

const sumOfSquares = (limit) => {
  let sum = 0;
  for (let n = 0; n < limit; n++) {
    sum = sum + n ** 2;
  }
  return sum;
};

const pairs = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pair(i, j);
    }
  }
};
