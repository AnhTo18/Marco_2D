create user 'se319'@'localhost' identified by 'password';
grant all privileges on *.* to 'se319'@'localhost';
drop database if exists marcodb;
create database if not exists marcodb;
use marcodb;

create table gamecharacter(
	cid integer NOT NULL AUTO_INCREMENT,
    cName varchar(100),
    primary key (cid),
    unique (cName)
	);
    
create table gameuser(
	uName varchar(100),
    passwd varchar(100),
    hashpw varchar(500),
    primary key (uName)
	);

create table gamescore(
	gid integer NOT NULL AUTO_INCREMENT,
    uName varchar(100),
    glevel integer,
    gscore integer,
    primary key (gid),
    foreign key (uName) references gameuser(uName)
	);
    
INSERT INTO gamecharacter VALUES (null,'Marco');
INSERT INTO gamecharacter VALUES (null,'Flash');
INSERT INTO gamecharacter VALUES (null,'Troy');

INSERT INTO gameuser VALUES ('admin','admin',null);
INSERT INTO gameuser VALUES ('user1','user1',null);
INSERT INTO gameuser VALUES ('user2','user2',null);
INSERT INTO gameuser VALUES ('user3','user3',null);
INSERT INTO gameuser VALUES ('user4','user4',null);
INSERT INTO gameuser VALUES ('user5','user5',null);
INSERT INTO gameuser VALUES ('user6','user6',null);

INSERT INTO gamescore VALUES (null,'admin',1,10);
INSERT INTO gamescore VALUES (null,'user4',1,20);
INSERT INTO gamescore VALUES (null,'user1',1,30);
INSERT INTO gamescore VALUES (null,'user3',1,40);
INSERT INTO gamescore VALUES (null,'user1',1,30);
INSERT INTO gamescore VALUES (null,'user3',1,41);
INSERT INTO gamescore VALUES (null,'user5',1,32);
INSERT INTO gamescore VALUES (null,'user3',1,14);
INSERT INTO gamescore VALUES (null,'user4',1,15);
INSERT INTO gamescore VALUES (null,'user6',1,52);

INSERT INTO gamescore VALUES (null,'user2',2,15);
INSERT INTO gamescore VALUES (null,'user3',2,25);
INSERT INTO gamescore VALUES (null,'admin',2,35);
INSERT INTO gamescore VALUES (null,'user1',2,45);
INSERT INTO gamescore VALUES (null,'user2',2,16);
INSERT INTO gamescore VALUES (null,'user6',2,23);
INSERT INTO gamescore VALUES (null,'admin',2,32);
INSERT INTO gamescore VALUES (null,'user4',2,44);
INSERT INTO gamescore VALUES (null,'user5',2,19);
INSERT INTO gamescore VALUES (null,'user1',2,27);

INSERT INTO gamescore VALUES (null,'user1',3,19);
INSERT INTO gamescore VALUES (null,'admin',3,40);
INSERT INTO gamescore VALUES (null,'user4',3,36);
INSERT INTO gamescore VALUES (null,'user2',3,41);
INSERT INTO gamescore VALUES (null,'user1',3,18);
INSERT INTO gamescore VALUES (null,'admin',3,53);
INSERT INTO gamescore VALUES (null,'user4',3,32);
INSERT INTO gamescore VALUES (null,'user2',3,47);
INSERT INTO gamescore VALUES (null,'user1',3,16);
INSERT INTO gamescore VALUES (null,'admin',3,57);
