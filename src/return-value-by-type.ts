interface Animal {
  name: string;
}

interface Human {
  firstName: string;
  lastName: string;
}

const getDisplayName = <T extends Animal | Human>(
  item: T
): T extends Human ? { humanName: string } : { animalName: string } => {
  return {} as any;
};

const animal: Animal = { name: "animal-name" };
const human: Human = {
  firstName: "human-firstname",
  lastName: "human-lastname",
};

const { animalName } = getDisplayName(animal);
const { humanName } = getDisplayName(human);

export {};
