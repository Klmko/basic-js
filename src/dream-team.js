const createDreamTeam = (members) => {
    if (!Array.isArray(members)) {
        return false;
    } else {
        return members.filter(el => typeof el === 'string').map((el) => el.trim()[0]).sort().join('');
    }
}