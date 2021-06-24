export type Gesture = "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock";
export const GESTURES: Array<Gesture> = [
  "Rock",
  "Paper",
  "Scissors",
  "Lizard",
  "Spock"
];
export type Result = "Player" | "Computer" | "Draw";

// TODO: Implement selection of computer gesture
// const generateComputerGesture = () => GESTURES[Math.floor(Math.random() * GESTURES.length)];

export const play = (
  playerGesture: Gesture,
  computerGesture: Gesture
): Result => {
  if (playerGesture === computerGesture) return "Draw";
  if (winConditions[playerGesture].includes(computerGesture)) return "Player";
  return "Computer";
};

const winConditions = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Lizard", "Paper"],
  Lizard: ["Paper", "Spock"],
  Spock: ["Rock", "Scissors"]
};
// Rock beats scissors
// Rock beats lizard

// Paper beats rock
// Paper beats spock

// Scissors beats lizard
// Scissors beats paper

// Lizard beats paper
// Lizard beats spock

// Spock beats rock
// Spock beats scissors

// Any gesture against itself results in a draw
