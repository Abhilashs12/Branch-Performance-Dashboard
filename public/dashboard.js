fetch("http://localhost:5001/api/branches/summary")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("results");
        container.innerHTML = data.map(item => `
            <p><strong>${item.name}</strong><br>
            Deposits: ₹${item.deposits}<br>
            Withdrawals: ₹${item.withdrawals}<br>
            Loans: ₹${item.loans}</p>
            <hr>
        `).join("");
    });
