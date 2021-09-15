CREATE TABLE IF NOT EXISTS status (
	codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO status (descricao) values ('ABERTO');
INSERT INTO status (descricao) values ('ANDAMENTO');
INSERT INTO status (descricao) values ('ENCERRADO');
