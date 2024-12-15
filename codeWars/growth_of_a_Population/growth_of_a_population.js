function nbYear(p0, percent, aug, p) {
    if(p0 >= p) {
      return 0
    }
    const totalIsThisEndYear = Math.floor(p0 + p0 * (percent / 100) + aug)
    return 1 + nbYear(totalIsThisEndYear, percent, aug, p);
  }