const express = require('express');
const { insertPythonCode, findPythonCode } = require('../controller/convertPythonCode');
const router = express.Router();

router.post('/insertPythonCode', async (req, res) => {
    const data = req.body;
    const result = await insertPythonCode(data);
    if (result.error) {
        res.status(404).send('Insert error');
    } else res.send('Insert successfully');
});

router.post('/findPythonCode', async (req, res) => {
    const data = req.body;
    const result = await findPythonCode(data);
    if (result.error) {
        res.status(404).send('Not found');
    } else res.send(result);
});

module.exports = router;
