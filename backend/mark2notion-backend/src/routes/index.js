const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Mark2Notion backend!' });
});


router.get('/sample', (req, res) => {
    res.json({ message: 'This is a sample route', "user_id": 123, "title": "Sample Title" });
});
module.exports = router;
