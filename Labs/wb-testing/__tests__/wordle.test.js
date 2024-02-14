import { jest } from "@jest/globals";

const mockIsWord = jest.fn(() => true);
jest.unstable_mockModule("../src/words.js", () => {
    return {
        getWord: jest.fn(() => 'APPLE'),
        isWord: mockIsWord
    }
});

const { buildLetter, Wordle } = await import("../src/wordle");

describe('building a letter object', () => { 
    test('returns a letter object', () => { 
        const letter = buildLetter('A', 'PRESENT');
        expect(letter).toEqual({ letter: 'A', status: 'PRESENT'});
     })
 });

describe('constructing a new wordle game', () => {
    test('maxGuesses is 6 with no args', () => {
        const newWordle = new Wordle();
        expect(newWordle.maxGuesses).toBe(6);
    });

    test('if arg is passed, maxGuesses is set to it, 10', () => {
        const newWordle = new Wordle(10);
        expect(newWordle.maxGuesses).toBe(10);
    });

    test('guesses is same length as maxGuesses, 4', () => {
        const newWordle = new Wordle(4);
        expect(newWordle.guesses.length).toBe(newWordle.maxGuesses);
    });

    test('currentGuess is 0 when new Wordle is created', () => {
        const newWordle = new Wordle();
        expect(newWordle.currGuess).toBe(0);
    });

    test('sets word to getWord()s return', () => {
        const newWordle = new Wordle();
        expect(newWordle.word).toBe('APPLE');
    });
});

describe('testing buildGuessFromWord', () => {
    test('changes status of a letter to CORRECT', () => {
        const newWordle = new Wordle();
        const firstLetter = newWordle.buildGuessFromWord('A____')[0];
        expect(firstLetter.status).toBe('CORRECT');
    });

    test('changes status of letter to PRESENT', () => {
        const newWordle = new Wordle();
        const firstLetter = newWordle.buildGuessFromWord("E____")[0];
        expect(firstLetter.status).toBe('PRESENT');
    });

    test('changes status of letter to ABSENT', () => {
        const newWordle = new Wordle();
        const firstLetter = newWordle.buildGuessFromWord('Z____')[0];
        expect(firstLetter.status).toBe('ABSENT');
    });
})

describe('testing appendGuess function', () => {
    test('error if no more guesses are allowed', () => {
        const newWordle = new Wordle(1);
        expect(() => {
            newWordle.appendGuess("A____");
            newWordle.appendGuess("A_PP_");
        }).toThrow()
    });

    test('error guess.length !== 5', () => {
        const newWordle = new Wordle();
        expect(() => {
            newWordle.appendGuess("A_____");
        }).toThrow();
    });

    test('error if guess not a word', () => {
        const newWordle = new Wordle();
        mockIsWord.mockReturnValueOnce(false);
        expect(() => {
            newWordle.appendGuess("GUESS");
        }).toThrow();
    });

    test('increases currGuess after appendGuess', () => {
        const newWordle = new Wordle();
        newWordle.appendGuess("A____");
        expect(newWordle.currGuess).toBe(1);
    });
});

describe('testing isSolved', () => { 
    test('test if latest guess is correct', () => {
        const newWordle = new Wordle();
        const guess = newWordle.appendGuess("APPLE");
        expect(newWordle.isSolved()).toBeTruthy();
    });

    test('test if latest guess is incorrect', () => {
        const newWordle = new Wordle();
        const guess = newWordle.appendGuess("PECAN");
        expect(newWordle.isSolved()).toBeFalsy();
    });
 });

describe('testing shouldEndGame', () => {
    test('if lastest guess is CORRECT', () => {
        const newWordle = new Wordle();
        const guess = newWordle.appendGuess("APPLE");
        expect(newWordle.shouldEndGame()).toBeTruthy();
    });

    test('if lastest currGuess over maxGuesses', () => {
        const newWordle = new Wordle(1);
        newWordle.appendGuess("APP__");
        expect(newWordle.shouldEndGame()).toBeTruthy();
    });

    test('if no guesses have been made', () => {
        const newWordle = new Wordle();
        expect(newWordle.shouldEndGame()).toBeFalsy();
    });

    test('if no guesses left, and word not guessed', () => {
        const newWordle = new Wordle();
        newWordle.appendGuess("GUESS");
        expect(newWordle.shouldEndGame()).toBeFalsy();
    });
});