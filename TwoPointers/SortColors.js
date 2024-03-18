function sortColors(colors) {
  // Initialiaze the 3 pointers; red(0), white(1) and blue(2).
  let red = 0;
  let white = 0;
  let blue = colors.length - 1;

  // Loop over the array and set the following conditions:
  while (white <= blue) {
    // 1. If colors[white] === 0 && colors[red] !== 0 then swap values and increment the pointers.
    if (colors[white] === 0) {
      if (colors[red] !== 0) {
        [colors[red], colors[white]] = [colors[white], colors[red]];
      }
      // Else if colors[red] === 0 then increment the pointers.
      red++;
      white++;
    }

    // 2. If colors[white] === 1 then increment the pointer.
    if (colors[white] === 1) {
      white++;
    }

    // 3. If colors[white] === 2 && colors[blue] !== 2 then swap values and decrement the blue pointer.
    if (colors[blue] !== 2) {
      [colors[white], colors[blue]] = [colors[blue], colors[white]];
    }

    // Else if colors[blue] === 2 then decrement blue pointer.
    blue--;
  }

  return colors;
}

export { sortColors };
