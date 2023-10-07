// Função para obter a lista de personagens com base no tema
export const getThemeCharacters = (theme) => {
  // Defina um objeto com os personagens de cada tema
  const themes = {
    bleach: [
      'zaraki',
      'ichigo',
      'rukia',
      'byakuya',
      'aizen',
      'hitsugaya',
      'soifon',
      'urahara',
      'gin',
      'yhwach',
      'hirako',
      'inoue',
      'abarai',
      'ishida',
      'rangiku',
      'Shunsui'


    ],
    jujutsu: [
      'nanami',
      'satoru',
      'suguru',
      'nobara',
      'itadori',
      'megumi',
      'yuta',
      'hajime',
      'toji',
      'meimei'
    ],
    onepiece: [
      'ace',
      'shanks',
      'zoro',
      'luffy',
      'law',
      'barbabranca',
      'nico',
      'nami',
      'kizaru'
    ],
    'attack on titan': [
      'eren',
      'levi',
      'historia',
      'sasha',
      'blindado',
      'mikasa',
      'armin',
      'titan',
      'annie'
    ],
    mix: [
      'kurapika',
      'anos',
      'light',
      'maru',
      'thorffin',
      'uzui',
      'goku',
      'makima',
      'nezuko',
      'vegeta',
      'polka',
      'fujinuma',
      'l',
      'mikey',
      'genos',
      'killua',
      'kai',
      'mori',
      'elric'
    ],
    naruto: [
      'naruto',
      'obito',
      'sakura',
      'hinata',
      'madara',
      'pain',
      'konan',
      'sasuke',
      'orochi',
      'boruto',
      'kawaki',
      'kakashi',
      'hashirama',
      'tsunade',
      'itachi',
      'minato'
    ]
  };

  // Se o tema for "all", retorne todos os personagens de todos os temas
  if (theme === 'all') {
    return Object.values(themes).flat();
  }

  // Caso contrário, retorne os personagens do tema específico
  return themes[theme] || [];
};
