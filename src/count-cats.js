const countCats = (catsArr) => (catsArr.toString().match(/\^\^/g) || []).length;

