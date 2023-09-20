const fs = require('fs');
const { appereances, sortData } = require('../utils/apiFeatures');

exports.getData = (req, res) => {
  let characters = JSON.parse(
    fs.readFileSync('public/data/characters.json', 'utf-8')
  );

  characters = appereances(characters);
  sortData(characters);

  res.status(200).json({
    status: 'Success',
    results: characters.length,
    characters,
  });
};

exports.getViewData = (req, res) => {
  let characters = JSON.parse(
    fs.readFileSync('public/data/characters.json', 'utf-8')
  );

  characters = appereances(characters);
  sortData(characters);

  res.status(200).render('index', {
    title: 'Rick and Morty',
    characters,
  });
};
