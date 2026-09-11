/**
 * One-time migration script: seeds Firestore with the patents and
 * presentations that currently live in the static array files, so the
 * admin panel and public site have data to show from day one.
 *
 * SAFE TO RE-RUN: it only ADDS documents, it never deletes or updates
 * existing ones. If you run it twice you'll get duplicates, so only run it
 * once against a fresh Firestore project (or clear the collections first).
 *
 * Setup:
 *   1. npm install firebase-admin --save-dev   (run from the project root)
 *   2. In the Firebase console: Project settings > Service accounts >
 *      "Generate new private key". Save the downloaded file as
 *      scripts/serviceAccountKey.json (this file is gitignored - never
 *      commit it).
 *   3. From the project root run: node scripts/migrate-to-firestore.js
 */
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');
const patents = require('./patents_seed.json');
const presentations = require('./presentations_seed.json');

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

async function seedCollection(name, docs) {
    const batch = db.batch();
    docs.forEach((docData) => {
        const ref = db.collection(name).doc();
        batch.set(ref, docData);
    });
    await batch.commit();
    console.log(`Seeded ${docs.length} documents into "${name}".`);
}

async function run() {
    // NOTE: one presentation in the original data (the "Engineering with
    // Computers" journal entry) had no date on the site, so it was seeded
    // with today's date as a placeholder sort date. Find it in the admin
    // panel afterward and correct the date if you know it.
    await seedCollection('patents', patents);
    await seedCollection('presentations', presentations);
    console.log('Migration complete.');
    process.exit(0);
}

run().catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
});
