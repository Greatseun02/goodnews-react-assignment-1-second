export function shuffle<T>(collection:T[]){
    let index = -1,
    length = collection ? collection.length : 0,
    result = Array(typeof length == 'number' ? length : 0);

    collection.forEach(function(value) {
        let rand = baseRandom(0, ++index);
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
}

function baseRandom(min:number, max:number) {
    return min + Math.floor(Math.random() * (max - min + 1));
}