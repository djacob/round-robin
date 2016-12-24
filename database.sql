CREATE USER roundrobin;
CREATE DATABASE roundrobin;
GRANT ALL PRIVILEGES ON DATABASE roundrobin to roundrobin;

\c roundrobin

CREATE TABLE IF NOT EXISTS sport(
id text NOT NULL PRIMARY KEY,
name text NOT NULL
);

CREATE TABLE IF NOT EXISTS team(
id text NOT NULL PRIMARY KEY,
name text NOT NULL,
sport_fk text REFERENCES sport(id)
);

CREATE TABLE  IF NOT EXISTS player(
id text NOT NULL PRIMARY KEY,
name text NOT NULL
);

CREATE TABLE  IF NOT EXISTS tournament(
id text NOT NULL PRIMARY KEY,
name text NOT NULL,
sport_fk text REFERENCES sport(id),
type text
);

CREATE TABLE  IF NOT EXISTS match(
id text NOT NULL PRIMARY KEY,
tournament_fk text REFERENCES tournament(id)
);

CREATE TABLE  IF NOT EXISTS encounter(
id text NOT NULL PRIMARY KEY,
match_fk text REFERENCES match(id)
);

CREATE TABLE IF NOT EXISTS team_player(
team_fk text REFERENCES team(id),
player_fk text REFERENCES player(id)
);

CREATE TABLE  IF NOT EXISTS tournament_player(
tournament_fk text REFERENCES tournament(id) NOT NULL,
player_fk text REFERENCES player(id) NOT NULL
);

CREATE TABLE  IF NOT EXISTS encounter_player(
player_fk text REFERENCES player(id) NOT NULL,
encounter_fk text REFERENCES encounter(id) NOT NULL
);
