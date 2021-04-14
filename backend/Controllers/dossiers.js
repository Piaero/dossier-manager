var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) throw err;
  const db = client.db('dossier-manager');
  const countersCollection = db.collection('dossiers');
});

router.get('/dossiers', (req, res) => {
  client
    .db('dossier-manager')
    .collection('dossiers')
    .find()
    .toArray()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => console.error(error));
});

module.exports = router;
