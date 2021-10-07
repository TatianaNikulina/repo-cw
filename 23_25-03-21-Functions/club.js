const AGE = 18;
const CONTRACT = 2022;
const NAME = "Player";

function main() {
  const club1 = createClub("Zarya", 1925, "Tomsk", {
    gk: 3,
    df: 7,
    mf: 8,
    fw: 4,
  });
  const club2 = createClub("Vympel", 2000, "Zhmerinka", {
    gk: 2,
    df: 5,
    mf: 6,
    fw: 2,
  });

  console.log(club1);
  console.log(club2);
}

function createClub(clubName, year, city, staff) {
  const club = {
    clubName: clubName,
    year: year,
    city: city,
    staff: staff,
    team: createTeam(staff),
  };
  return club;
}

function createTeam(ns) {
  const team = {};
  for (key in ns) {
    team[key] = [];
    for (let i = 0; i < ns[key]; i++) {
      team[key].push(createPlayer(key, i));
    }
  }
  return team;
}

function createPlayer(pos, number) {
  return {
    fName: `${NAME}_${key}_${number + 1}`,
    position: pos,
    age: AGE + Math.floor(Math.random() * Math.floor(7)),
    contract: CONTRACT + Math.floor(Math.random() * Math.floor(4)),
  };
}

main();
