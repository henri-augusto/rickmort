const fs = require('fs');
const { appereances, sortData } = require('../utils/apiFeatures');

exports.getData = (req, res) => {
  let data = JSON.parse(
    fs.readFileSync('public/data/characters.json', 'utf-8')
  );

  data = appereances(data);
  sortData(data);

  res.status(200).json({
    status: 'Success',
    results: data.length,
    data,
  });
};
