import { play } from "./game";

describe("When player clicks rock", () => {
  it("declares a draw when both gestures are the same", () => {
    expect(play("Rock", "Rock")).toBe("Draw");
  });

  it("declares player the winner correctly", () => {
    expect(play("Scissors", "Paper")).toBe("Player");
  });

  it("declares computer the winner correctly", () => {
    expect(play("Rock", "Paper")).toBe("Computer");
  });

  it("declares Lizard beats Spock", () => {
    expect(play("Lizard", "Spock")).toBe("Player");
  });
});
