const event = data.events
const currentDate = data.currentDate

for (let x=0;x<event.length;x++) {
    if (event[x].date <= currentDate) {
        console.log(event[x].name, event[x].date);            
    }
}