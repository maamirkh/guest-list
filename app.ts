#! usr/bin/ env node
let guests: string[] = ["Ahmed Ebrahim", "Danish Anwer", "Fahim Saleem"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});