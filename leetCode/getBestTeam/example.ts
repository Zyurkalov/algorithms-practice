//ОТКЛОНЕНО: превышен лимит времени
function getBestTeamOne(N: number, staff: number[], K: number): number {
    const maxTeam = Math.min(K, N);
    const newStaff = Array(maxTeam).fill(0);

    for (const userSkill of staff) {
        if (userSkill > newStaff[maxTeam - 1]) {
            newStaff[maxTeam - 1] = userSkill;
            newStaff.sort((a, b) => b - a);
        }
    }
    return newStaff.reduce((skill, sum) => (sum += skill), 0);
}

console.log(getBestTeamOne(3, [5, 2, 9, 1, 3], 4)); //17

//ОТКЛОНЕНО: превышен лимит времени
function getBestTeamTwo(N: number, staff: number[], K: number): number {
    const maxTeam = Math.min(K, N);
    const newStaff = Array(maxTeam).fill(0);

    for (const userSkill of staff) {
        if (userSkill > newStaff[maxTeam - 1]) {
            let i = maxTeam - 1;
            while (i > 0 && userSkill > newStaff[i - 1]) {
                newStaff[i] = newStaff[i - 1];
                i--;
            }
            newStaff[i] = userSkill;
        }
    }
    return newStaff.reduce((skill, sum) => sum + skill, 0);
}

console.log(getBestTeamTwo(3, [5, 2, 9, 1, 3], 4)); // 17
