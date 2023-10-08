export const getImagePath = (isMatched, flipped, character, currentTheme) => {

  let themePrefix = "backonepiece";

  if (isMatched || flipped) {
    return `/images/${character}.jpg`;
  } else {
    switch (currentTheme) {
      case "bleach":
        themePrefix = "backbleach";
        break;
      case "jujutsu":
        themePrefix = "backjujutsukaisen";
        break;
      case "attack on titan":
        themePrefix = "backattackontitan";
        break;
      case "naruto":
        themePrefix = "backnaruto";
        break;
      case "all":
        themePrefix = "backall";
        break;
      case "mix":
        themePrefix = "backmix";
        break;
    }

    return `/images/${themePrefix}.jpg`;
  }
};
