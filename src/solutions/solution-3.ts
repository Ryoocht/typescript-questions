type SolutionLetters = 'a' | 'b' | 'c'

/* *
    * Complete RemoveC type
    * Remove c from Letters
*/

type SolutionRemoveC<T> = T extends 'c' ? never : T

type SolutionLettersWithoutC = SolutionRemoveC<SolutionLetters>