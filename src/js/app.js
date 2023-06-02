import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';
import Team from './Team';

const opposingTeam = [
  new Undead('Li'),
  new Zombie('Rik'),
  new Daemon('Saimon'),
];

const currentTeam = new Team();
currentTeam.addAll(...opposingTeam);
currentTeam.toArray();

for (const value of currentTeam) {
  console.log(value);
}
