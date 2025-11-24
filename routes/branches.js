const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/summary", (req, res) => {
    const query = `
        SELECT b.name,
               p.deposits,
               p.withdrawals,
               p.loans
        FROM branches b
        JOIN performance p ON b.id = p.branch_id
    `;

    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
