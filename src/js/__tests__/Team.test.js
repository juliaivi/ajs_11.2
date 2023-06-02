import Team from '../Team';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('this character already exists', () => {
  const team = new Team();
  team.add('Bowman');
  expect(() => team.add('Bowman')).toThrow('Такой персонаж уже есть!!!');
});

test('adding a new character', () => {
  const team = new Team();
  team.add('Bowman');
  expect(team.members.has('Bowman')).toBe(true);
});

test('adding all characters', () => {
  const team = new Team();
  team.addAll('Bowman', 'Swordsman', 'Magician');
  expect(team.members.has('Bowman', 'Swordsman', 'Magician')).toBe(true);
  expect(team.members.size).toBe(3);
});

test('converting an object to an array', () => {
  const team = new Team();
  team.addAll('Bowman', 'Swordsman', 'Magician');
  expect(team.toArray()).toEqual(['Bowman', 'Swordsman', 'Magician']);
});

describe('test iterator', () => {
  const opposingTeam = [
    new Undead('Li'),
    new Zombie('Rik'),
    new Daemon('Saimon'),
  ];

  test('testing iterator  and getting one value', () => {
    const team = new Team();
    team.addAll(...opposingTeam);
    const iterator = team[Symbol.iterator]();

    const expected = {
      name: 'Li',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    const received = iterator.next().value;

    expect(received).toEqual(expected);
  });

  test('testing iterator and getting all values', () => {
    const team = new Team();
    const expected = team.toArray(team.addAll(...opposingTeam));
    const received = [];
    for (const person of team) {
      received.push(person);
    }
    expect(received).toEqual(expected);
  });
});
