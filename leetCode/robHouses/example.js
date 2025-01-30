function robHouses(houses) {
    if (houses.length <= 0) return 0;
    if (houses.length === 1) return houses[0];

    let prev1 = houses[0]; 
    let prev2 = 0; 

    for (let i = 1; i < houses.length; i++) {
        const current = Math.max(prev2 + houses[i], prev1);
        prev2 = prev1; 
        prev1 = current;
    }

    return prev1;
}