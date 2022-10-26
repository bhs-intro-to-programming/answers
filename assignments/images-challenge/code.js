/*
 * My solutions. Some of these are perhaps a bit too clever. But sometimes it's fun to be clever.
 */

const lineOfCircles = (radius) => {
  const d = radius * 2;
  const num = Math.floor(width / d);
  const xOffset = (width - (num * d)) / 2 + radius;
  for (let i = 0; i < num; i++) {
    drawFilledCircle(xOffset + i * d, height / 2, radius, 'red');
  }
};

const lineOfCirclesAlternating = (radius) => {
  const d = radius * 2;
  const num = Math.floor(width / d);
  const xOffset = (width - (num * d)) / 2 + radius;
  for (let i = 0; i < num; i++) {
    drawFilledCircle(xOffset + i * d, height / 2, radius, i % 2 === 0 ? 'blue' : 'red');
  }
};

const concentricCircles = (num) => {
  const radius = Math.min(width, height) / 2;
  const step = radius / num;
  let color = 'blue';
  for (let r = radius; r > 0; r -= step) {
    drawFilledCircle(width / 2, height / 2, r, color);
    color = color === 'red' ? 'blue' : 'red';
  }
};

const checkerBoard = (dim) => {
  const size = Math.min(width, height);
  const sq = Math.floor(size / dim);
  const xOffset = (width - (sq * dim)) / 2;
  const yOffset = (height - (sq * dim)) / 2;
  for (let r = 0; r < dim; r++) {
    for (let c = 0; c < dim; c++) {
      const color = (r + c) % 2 === 0 ? 'blue' : 'red';
      drawFilledRect(xOffset + c * sq, yOffset + r * sq, sq, sq, color);
    }
  }
};

const notReallyCurved = (lines) => {
  const divisions = lines - 1;
  const size = Math.min(width, height);
  const top = (height - size) / 2;
  const bottom = top + size;
  const gap = size / divisions;
  for (let i = 0; i <= size / gap; i++) {
    drawLine(0, top + i * gap, i * gap, bottom);
  }
};

const fillWithCircles = (radius) => {
  const d = radius * 2;
  const rows = Math.floor(height / d);
  const columns = Math.floor(width / d);
  const xOffset = (width - (rows * d)) / 2 + radius;
  const yOffset = (height - (columns * d)) / 2 + radius;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      drawCircle(xOffset + c * d, yOffset + r * d, radius, 'blue');
    }
  }
};

const fillWithCirclesRandomFill = (radius, p) => {
  const d = radius * 2;
  const rows = Math.floor(height / d);
  const columns = Math.floor(width / d);
  const xOffset = (width - (rows * d)) / 2 + radius;
  const yOffset = (height - (columns * d)) / 2 + radius;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (Math.random() < p) {
        drawFilledCircle(xOffset + c * d, yOffset + r * d, radius, 'blue');
      } else {
        drawCircle(xOffset + c * d, yOffset + r * d, radius, 'blue');
      }
    }
  }
};

const squareOfCircles = (radius) => {
  const d = radius * 2;
  const num = Math.floor(Math.min(width, height) / d);
  const xOffset = (width - (num * d)) / 2 + radius;
  const yOffset = (height - (num *d)) / 2 + radius;
  for (let r = 0; r < num; r++) {
    for (let c = 0; c < num; c++) {
      // We only want to draw the circle if we're in the 0th or
      // the (num - 1)th row or column.
      if (num === 1 || ((r % (num - 1)) * (c % (num - 1)) === 0)) {
        drawCircle(xOffset + r * d, yOffset + c * d, radius, 'blue');
      }
    }
  }
};
