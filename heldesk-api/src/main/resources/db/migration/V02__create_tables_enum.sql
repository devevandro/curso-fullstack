CREATE TABLE IF NOT EXISTS perfis (
	codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO perfis (descricao) values ('ROLE_ADMIN');
INSERT INTO perfis (descricao) values ('ROLE_CLIENTE');
INSERT INTO perfis (descricao) values ('ROLE_TECNICO');
