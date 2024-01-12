import Structure from "./Structure";

describe('Structure', () => {
  const structure = new Structure(['name', 'age', 'sex'])

  structure.set('name', 'Misha')
  structure.set('age', 20)
  structure.set('sex', 'male')

  test('contract', () => {
    expect(structure.get('name')).toEqual('Misha')
    expect(structure.get('age')).toEqual(20)
    expect(structure.get('sex')).toEqual('male')
  })

  test('corner cases', () => {
    expect(structure.get('other')).toEqual(undefined)
  })
})