package com.evandro.heldesk.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evandro.heldesk.doamin.Chamado;
import com.evandro.heldesk.doamin.Cliente;
import com.evandro.heldesk.doamin.Tecnico;
import com.evandro.heldesk.domain.enums.Perfil;
import com.evandro.heldesk.domain.enums.Prioridade;
import com.evandro.heldesk.domain.enums.Status;
import com.evandro.heldesk.repositories.ChamadoRepository;
import com.evandro.heldesk.repositories.ClienteRepository;
import com.evandro.heldesk.repositories.TecnicoRepositoty;

@Service
public class DBService {
	@Autowired
	private TecnicoRepositoty tecnicoRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;
	

	public void instanciaDB() {
		Tecnico tec1 = new Tecnico(null, "Evandro", "06506048905", "evandro@mail.com", "123");
		tec1.addPerfil(Perfil.ADMIN);
		Cliente cli1 = new Cliente(null, "Teste", "06506047925", "teste@mail.com", "123");
		Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "chamado 01", "Primeiro chamado", tec1, cli1);
		
		this.tecnicoRepository.saveAll(Arrays.asList(tec1));
		this.clienteRepository.saveAll(Arrays.asList(cli1));
		this.chamadoRepository.saveAll(Arrays.asList(c1));
	}
}
