interface Fish {
  name: string;
  age: number;
  swim: () => void;
}

interface Bird {
  name: string;
  age: string;
  fly: () => void;
}

/* *
 * Complete isFish predicate function
 * isFish always returns type of Fish if pet is type of Fish
 */
const isFish = (pet: Fish | Bird) => {};

/* *
 * Complete petPerfom predicate function
 * petPerfom returns either swim of fly function depending on pet type
 */

const petPerform = (pet: Fish | Bird) => {};