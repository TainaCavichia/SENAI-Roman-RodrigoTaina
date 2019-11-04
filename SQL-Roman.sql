use M_Roman;

CREATE TABLE Temas(
	IdTema INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(200) NOT NULL,
)

CREATE TABLE Professores(
	IdProfessor INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(200) NOT NULL,
	Email VARCHAR(200) NOT NULL UNIQUE,
	Senha VARCHAR(200) NOT NULL,
)

CREATE TABLE Projetos(
	IdProjeto INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(200) NOT NULL,
	Descricao VARCHAR(200) NOT NULL UNIQUE,
	IdTema INT FOREIGN KEY REFERENCES Temas(IdTema) NOT NULL,
	IdProfessor INT FOREIGN KEY REFERENCES Professores(IdProfessor) NOT NULL,
)


INSERT INTO Temas(Nome)
VALUES	('Gestão'),
		('HQ\''s'),
		('Redes');

INSERT INTO Professores(Nome, Email, Senha)
VALUES	('Erik','erik@email.com','123123'),
		('Taina','Taina@email.com','123123'),
		('Rodrigo','Rodrigo@email.com','123123');

INSERT INTO Projetos(Nome, Descricao, IdTema, IdProfessor)
VALUES	('Controle de estoque','controlar estoque',1,3),
		('listagem de personagens','listar personagens',2,2);


Select * from Temas

Select * from Professores

Select * from Projetos