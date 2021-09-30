function solve(year, month, date) {
    let time = new Date(year, month -1, date );
    time.toLocaleTimeString(time)
    time.setDate(time.getDate() -1)
    // console.log(time)

    console.log(time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate())
  

}

solve(2016, 9, 30);
solve(2016, 10, 1);