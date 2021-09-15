package com.evandro.heldesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evandro.heldesk.doamin.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
