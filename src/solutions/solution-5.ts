interface SolutionFish {
    name: string
    age: number
    swim: () => void
}

interface SolutionBird {
    name: string
    age: string
    fly: () => void
}

/* *
  * Complete isFish predicate function
  * isFish always returns type of Fish if pet is type of Fish
*/
const solutionIsFish = (pet: SolutionFish | SolutionBird): pet is SolutionFish => {
  // return typeof pet.age === 'number'
  return (pet as Fish).swim !== undefined;
}

/* *
  * Complete petPerfom predicate function
  * petPerfom returns either swim of fly functions depending on pet type
*/

const solutionPetPerform = (pet: SolutionFish | SolutionBird) => {
  if ("swim" in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
};