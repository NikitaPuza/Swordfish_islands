const express = require('express');
const router = express.Router();

const types = ['Intelligent', 'Elemental', 'Beast', 'Fuegonauts', 'Night Axe'];
const where = ['Light Jungle', 'Heavy Jungle', 'Mtns Jungle', 'Volcano', 'Volcanic', 'Ruins', 'Village'];
const beast = {
  LightJungle: ['Crystal Frog', 'Flayfiend', 'Duecadre', 'Muttering Serp','Broadback', 'Singing Golem', 'Tabibari', 'Giant Centipede', 'Boar', 'Giant Rat', 'Zip Bird', 'Vyderac', 'Blindfire Vine', 'Dire Boar', 'Spine Dragon', 'Poison Dart Frog'],
  HeavyJungle: ['Poison Dart Frog', 'Obsidian Digger', 'Blindfire Carpet']
}

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
