function ex7(arr) {
    let total = []
    let k = ''
    let j = arr[0]
    let result = []
    // const [town, latitude, longitude] = arr[0].split(' | ')
    for (let i = 0; i < arr[0].length; i++) {
        if (j[i] != '|') {
            k += j[i]
        }

    }
    k = k.trim();



    const [town, latitude, longitude] = k.split('  ')
    town.trimLeft();
    latitude.trim();
    longitude.trimEnd();
   
    
    for (let i = 1; i < arr.length; i++) {
        let [currTown, currLatitude, currLongitude] = arr[i].split(' | ')
        let obj = {};
        obj[town] = currTown.replace('| ', "").trim(' ');
        obj[latitude] = Number(Number(currLatitude).toFixed(2));
        obj[longitude] = Number(Number(currLongitude.replace(' |', "")).toFixed(2));

        result.push(obj);
    }
    return JSON.stringify(result)
   

}


ex7(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])