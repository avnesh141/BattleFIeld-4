const express = require('express');
const router = express.Router();

const serverData = {
  tickets:400,
  vehicle_spawn_delay:25
};

router.get('/api/server/:id', (req, res) => {
    res.json({serverData});
});

router.get('/api/server/:id/players', (req, res) => {
  res.json(serverData.players);
});

module.exports = router;