CREATE TABLE IF NOT EXISTS prioridade (
	codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO prioridade (descricao) values ('BAIXA');
INSERT INTO prioridade (descricao) values ('MEDIA');
INSERT INTO prioridade (descricao) values ('ALTA');