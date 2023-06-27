const router = require('express').Router();
const seedDb = require('../../seeds/seed');
router.post("/", async (req, res) => {
    if(req.body.password === process.env.SEED_PASSWORD){
        await seedDb();
        res.status(200).json({message: "good password"});
    }
    else{
        res.status(400).json({message: "failed password"});
    }
    
});

module.exports = router;
