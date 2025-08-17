// Map animal names to their corresponding emojis
export const getAnimalEmoji = (animalName) => {
    const animalMap = {
      'Owl': '🦉',
      'Eagle': '🦅',
      'Butterfly': '🦋',
      'Dragon': '🐉',
      'Fox': '🦊',
      'Wolf': '🐺',
      'Elephant': '🐘',
      'Lion': '🦁',
      'Cat': '🐱',
      'Peacock': '🦚',
      'Panda': '🐼',
      'Turtle': '🐢',
      'Bear': '🐻',
      'Tiger': '🐅',
      'Rabbit': '🐰',
      'Horse': '🐴',
      'Monkey': '🐵',
      'Penguin': '🐧',
      'Dolphin': '🐬',
      'Shark': '🦈'
    };
    
    return animalMap[animalName] || '🦄'; // Default to unicorn if animal not found
  };