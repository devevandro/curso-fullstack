package com.evandro.heldesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evandro.heldesk.doamin.Tecnico;

public interface TecnicoRepositoty extends JpaRepository<Tecnico, Integer> {

}
