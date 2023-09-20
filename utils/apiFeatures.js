exports.appereances = (characters) => {
  const newCharacters = [];
  characters.map((character) => {
    // verifica se o personagem está vivo
    if (character.status === 'Alive') {
      // preencher as temporadas que o personagem vivo participa
      searchEpisode(character);

      // popula um campo com valor '0' para o tratamento no front-end
      if (character.tempOne === undefined) character.tempOne = 0;
      if (character.tempTwo === undefined) character.tempTwo = 0;
      if (character.tempThree === undefined) character.tempOThree = 0;

      // quantidade de aparições no total
      character.appereances = character.episode.length;

      // popula um novo array somente com os personagens vivos
      newCharacters.push(character);
    }
  });
  return newCharacters;
};

const searchEpisode = (character) => {
  let tempOne = 0;
  let tempOTwo = 0;
  let tempOThree = 0;

  character.episode.map((episode) => {
    // retorna o ultimo elemento do campo 'episode'
    const ep = episode.split('episode/')[1];

    // verifica os episodes e coloca em sua respectiva temporada
    if (ep <= 11) return (character.tempOne = tempOne += 1);
    if (ep >= 12 && ep <= 21) return (character.tempTwo = tempOTwo += 1);
    if (ep >= 22 && ep <= 31) return (character.tempThree = tempOThree += 1);
  });
};

exports.sortData = (characters) => {
  characters.sort((a, b) => {
    // colocar o nomes em caixa alta para facilitar a comparação
    const x = a.name.toUpperCase();
    const y = b.name.toUpperCase();

    // organiza em ordem descrecente pelas quantida de aparições
    // após isso organiza pelo nome em ordem crescente
    return b.appereances - a.appereances || x.localeCompare(y);
  });
};
