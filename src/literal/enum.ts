enum Ball {
  Basketball = 'basketball',
  Football = 'football'
}

type BallType = Ball.Basketball | Ball.Football

let a: BallType = 'basketball' as Ball.Basketball