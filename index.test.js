import { Triangle, Disk } from '.'
import assert from 'assert/strict'

describe('Triangle', () => {
  test('constructor validates sides\' length', () => {
    expect(() => new Triangle(0, 5, 7)).toThrow(assert.AssertionError)
    expect(() => new Triangle(3, -5, 7)).toThrow(assert.AssertionError)
    expect(() => new Triangle(3, 5, -10)).toThrow(assert.AssertionError)
  })

  test('area() validates sides\' lengths', () => {
    const triangle = new Triangle(3, 5, 7)
    triangle.a = 0
    expect(triangle.area).toThrow(assert.AssertionError)
    triangle.a = 3
    triangle.b = 0
    expect(triangle.area).toThrow(assert.AssertionError)
    triangle.b = 5
    triangle.c = 0
    expect(triangle.area).toThrow(assert.AssertionError)
  })

  test('isRectangular() validates sides\' length', () => {
    const triangle = new Triangle(3, 5, 7)
    triangle.a = 0
    expect(triangle.isRectangular).toThrow(assert.AssertionError)
    triangle.a = 3
    triangle.b = 0
    expect(triangle.isRectangular).toThrow(assert.AssertionError)
    triangle.b = 5
    triangle.c = 0
    expect(triangle.isRectangular).toThrow(assert.AssertionError)
  })

  test('isRectangular() works correctly', () => {
    let triangle = new Triangle(3, 5, 7)
    let res = triangle.isRectangular()
    expect(res).toEqual(false)
    triangle = new Triangle(4, 5, 3)
    res = triangle.isRectangular()
    expect(res).toEqual(true)
  })

  test('area() works correctly', () => {
    let triangle = new Triangle(13, 15, 4)
    let res = triangle.area()
    expect(res).toEqual(24)
    triangle = new Triangle(5, 6, 7)
    res = Math.ceil(triangle.area() * 10)
    expect(res).toEqual(147)
  })
})

describe('Disk', () => {
  test('constructor validates radius', () => {
    expect(() => new Disk(-5)).toThrow(assert.AssertionError)
    expect(() => new Disk(0)).toThrow(assert.AssertionError)
  })

  test('area() validates radius', () => {
    const disk = new Disk(3)
    disk.radius = 0
    expect(disk.area).toThrow(assert.AssertionError)
    disk.radius = -5
    expect(disk.area).toThrow(assert.AssertionError)
  })

  test('area() works correctly', () => {
    const disk = new Disk(3)
    let res = Math.ceil(disk.area() * 1000000)
    expect(res).toEqual(28274334)
    disk.radius = 17
    res = Math.ceil(disk.area() * 1000000)
    expect(res).toEqual(907920277)
  })
})