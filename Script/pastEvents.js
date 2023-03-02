const event = data.events
const currentDate = data.currentDate

for (let x=0;x<data.events.length;x++) {
    if (data.events[x].date <= data.currentDate) {
        console.log(data.events[x].name, data.events[x].date);            
    }
}