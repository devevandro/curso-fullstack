CREATE TABLE IF NOT EXISTS pessoa (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha VARCHAR(8) NOT NULL,
	LocalDate DATE,
	perfis INTEGER,
	FOREIGN KEY (perfis) REFERENCES perfis(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pessoa (none, cpf, email, senha) values ('Evandro', '06506048969', 'evandro@gempe.dev', '12345678', 1);
