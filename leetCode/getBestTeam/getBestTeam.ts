//лучшее, первое решение, но все еще не проходит проверку по времени выполнения
function getBestTeam(N: number, staff: number[], K: number): number {
    if (K === N) return staff.reduce((sum, skill) => sum + skill, 0);
    const maxTeam = Math.min(K, N);

    const sorted = [...staff].sort((a, b) => b - a);
    return sorted.slice(0, maxTeam).reduce((sum, skill) => sum + skill, 0);
}
console.log(getBestTeam(4, [5, 2, 9, 1, 3], 3));
