package com.evandro.heldesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evandro.heldesk.doamin.Chamado;

public interface ChamadoRepository extends JpaRepository<Chamado, Integer>{

}
