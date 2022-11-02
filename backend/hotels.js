const data = [
    {country: 'Greece', city: 'Thessaloniki', hotel: 'Morning Star', room_id: 1, capacity: 3, start: new Date(2022, 10, 1), end: new Date(2022, 10, 10), price: 100},
    {country: 'Greece', city: 'Thessaloniki', hotel: 'Morning Star', room_id: 1, capacity: 3, start: new Date(2022, 10, 15), end: new Date(2022, 10, 30), price: 110}
]

exports.search = (location, persons, start, end, minResultCount) => {
    // todo: introduce maxResultCount param for performace imporvement
    let s = searchByLocationAndDates(location, start, end)

    if(s.length === 0) return [];

    let result = s.filter(h=> persons <= h.capacity)

    // todo: convert return into format compatable with multiple rooms result
    if(result.length >= minResultCount)
        return result
        .sort((a,b)=>{
            if(a.price > b.price) return 1;
            if(a.price < b.price) return -1;
            return 0;
        });

    // looks like we have kind of 'Knapsack problem' and have to find several rooms 

    // loop by hotels which have enought capacities for whole hotel
}

function searchByLocationAndDates(location, start, end){
    return data
        .filter(h=> 
            (h.city == location || h.country == location) && 
            start >= h.start && end <= h.end 
        )
}