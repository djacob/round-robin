INSERT INTO sport (id, name) VALUES ('1', 'SPORTBALL');

INSERT INTO team (id, name) VALUES ('1', 'SPORTS1');
INSERT INTO team (id, name) VALUES ('2', 'SPORTS2');

INSERT INTO player (id, name) VALUES ('1', 'ALICE');
INSERT INTO player (id, name) VALUES ('2', 'BOB');
INSERT INTO player (id, name) VALUES ('3', 'CANDICE');
INSERT INTO player (id, name) VALUES ('4', 'DAN');

INSERT INTO team_player (team_fk, player_fk) VALUES ('1', '1');
INSERT INTO team_player (team_fk, player_fk) VALUES ('1', '2');
INSERT INTO team_player (team_fk, player_fk) VALUES ('2', '3');
INSERT INTO team_player (team_fk, player_fk) VALUES ('2'', 4');

INSERT INTO tournament (id, name) VALUES ('1', 'TEST TOURNAMENT');

INSERT INTO tournament_player (tournament_fk, player_fk) VALUES ('1', '1');
INSERT INTO tournament_player (tournament_fk, player_fk) VALUES ('1', '2');
INSERT INTO tournament_player (tournament_fk, player_fk) VALUES ('1', '3');
INSERT INTO tournament_player (tournament_fk, player_fk) VALUES ('1', '4');

INSERT INTO match (id, tournament_fk) VALUES ('1', '1');
INSERT INTO match (id, tournament_fk) VALUES ('2', '1');
INSERT INTO match (id, tournament_fk) VALUES ('3', '1');
INSERT INTO match (id, tournament_fk) VALUES ('4', '1');

INSERT INTO encounter (id, match_fk) VALUES ('1', '1');
INSERT INTO encounter (id, match_fk) VALUES ('2', '1');
INSERT INTO encounter (id, match_fk) VALUES ('3', '1');
INSERT INTO encounter (id, match_fk) VALUES ('4', '2');
INSERT INTO encounter (id, match_fk) VALUES ('5', '2');
INSERT INTO encounter (id, match_fk) VALUES ('6', '2');
INSERT INTO encounter (id, match_fk) VALUES ('7', '3');
INSERT INTO encounter (id, match_fk) VALUES ('8', '3');
INSERT INTO encounter (id, match_fk) VALUES ('9', '3');
INSERT INTO encounter (id, match_fk) VALUES ('A', '4');
INSERT INTO encounter (id, match_fk) VALUES ('B', '4');
INSERT INTO encounter (id, match_fk) VALUES ('C', '4');

INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('1', '1');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('1', '2');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('2', '1');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('2', '2');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('3', '1');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('3', '2');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('4', '1');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('4', '3');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('5', '1');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('5', '3');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('6', '1');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('6', '3');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('7', '2');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('7', '4');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('8', '2');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('8', '4');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('9', '2');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('9', '4');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('A', '4');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('A', '3');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('B', '4');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('B', '3');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('C', '4');
INSERT INTO encounter_player (encounter_fk, player_fk) VALUES ('C', '3');

