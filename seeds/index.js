const seedDb = require('./seed');

const runSeed = async () => {
   await seedDb();

   process.exit(0);
}
runSeed();