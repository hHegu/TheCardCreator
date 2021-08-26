// misc.

const melee = [[2, 1]]

const longMelee = [[2, 1, 1]]

const swipe = [
  [0, 1],
  [2, 1],
  [0, 1],
]

const ranged = [[1]]

const diagonalSwipe = [
  [2, 1],
  [1, 1],
]

// 3x3

const aoe = [
  [1, 1, 1],
  [1, 2, 1],
  [1, 1, 1],
]

const cross = [
  [0, 1, 0],
  [1, 2, 1],
  [0, 1, 0],
]

const diagonalCross = [
  [1, 0, 1],
  [0, 2, 0],
  [1, 0, 1],
]

// 5x5

const largeAoe = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]

export const shapes: { [key: string]: any } = {
  melee,
  longMelee,
  swipe,
  ranged,
  diagonalSwipe,
  aoe,
  cross,
  diagonalCross,
  largeAoe,
}
