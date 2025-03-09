//your JS code here. If required.
console.time("Execution Time");

let r1 = (Math.floor(Math.random() * 3) + 1); 
let r2 = (Math.floor(Math.random() * 3) + 1); 
let r3 = (Math.floor(Math.random() * 3) + 1); 

let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Promise 1", time: r1 });
    }, r1 * 1000);
});

let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Promise 2", time: r2 });
    }, r2 * 1000);
});

let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Promise 3", time: r3 });
    }, r3 * 1000);
});

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log('Resolved:', results);
        console.timeEnd("Execution Time");

        let output = document.getElementById("output");
        let loadingRow = document.getElementById("loading");

        // Remove "Loading..." row
        if (loadingRow) loadingRow.remove();

        // Populate table with resolved promises
        results.forEach(result => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
            output.appendChild(row);
        });

        // Calculate the total time (max of all promise times)
        let totalTime = Math.max(r1, r2, r3).toFixed(3);

        // Append Total row
        let totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
        output.appendChild(totalRow);
    })
    .catch((rej) => {
        console.log('Rejected:', rej);
    });

console.log('Below');
p1.then(res => console.log(`${res.name} ${res.time}`));
p2.then(res => console.log(`${res.name} ${res.time}`));
p3.then(res => console.log(`${res.name} ${res.time}`));
