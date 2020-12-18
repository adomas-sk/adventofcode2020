const main = (positions) => {
  const ids = positions.map((position) => {
    const rowPosition = position.slice(0, 7);
    const columnPosition = position.slice(7);

    const row = rowPosition.split("").reduce(
      ({ to, from }, letter) => {
        const difference = Math.round((to - from) / 2);
        if (difference === 1) {
          if (letter === "B") {
            return to;
          } else {
            return from;
          }
        }
        if (letter === "B") {
          return { from: from + difference, to };
        }
        return { from, to: to - difference };
      },
      { from: 0, to: 127 }
    );
    const column = columnPosition.split("").reduce(
      ({ to, from }, letter) => {
        const difference = Math.ceil((to - from) / 2);
        if (difference === 1) {
          if (letter === "R") {
            return to;
          } else {
            return from;
          }
        }
        if (letter === "R") {
          return { from: from + difference, to };
        }
        return { from, to: to - difference };
      },
      { from: 0, to: 7 }
    );
    return row * 8 + column;
  });
  return ids.sort((a,b) => a - b).find(id => !ids.find(i => i === id + 1) && ids.find(i => i === id + 2)) + 1;
};

module.exports = main;
