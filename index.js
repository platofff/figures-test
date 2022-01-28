import assert from 'assert/strict'

class AbstractFigure {
  area () {
    throw new Error('Not implemented!')
  }

  validate () {
    throw new Error('Not implemented!')
  }
}

class Triangle extends AbstractFigure {
  constructor (sideA, sideB, sideC) {
    super()
    this.a = sideA
    this.b = sideB
    this.c = sideC
    this.validate()
  }

  validate () {
    assert.equal(this.a <= 0, false)
    assert.equal(this.b <= 0, false)
    assert.equal(this.c <= 0, false)
  }

  area = () => {
    this.validate()
    const p = (this.a + this.b + this.c) / 2.0
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
  }

  isRectangular = () => {
    this.validate()
    const squareA = Math.pow(this.a, 2)
    const squareB = Math.pow(this.b, 2)
    const squareC = Math.pow(this.c, 2)
    const cosAlpha = (squareB + squareC - squareA) / (2.0 * this.b * this.c)
    if (cosAlpha === 0.0) {
      return true
    }
    const cosBeta = (squareA + squareC - squareB) / (2.0 * this.a * this.c)
    if (cosBeta === 0.0) {
      return true
    }
    return (180 - Math.acos(cosAlpha) - Math.acos(cosBeta)) === 90.0
  }
}

class Disk extends AbstractFigure {
  constructor (radius) {
    super()
    this.radius = radius
    this.validate()
  }

  validate () {
    assert.equal(this.radius <= 0, false)
  }

  area = () => {
    this.validate()
    return Math.PI * Math.pow(this.radius, 2)
  }
}

export { Triangle, Disk }
