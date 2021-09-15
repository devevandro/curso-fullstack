package com.evandro.heldesk.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.evandro.heldesk.doamin.Pessoa;
import com.evandro.heldesk.repositories.PessoaRepository;
import com.evandro.heldesk.security.UserSS;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private PessoaRepository repository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Pessoa> user = this.repository.findByEmail(email);
		
		if (user.isPresent()) {
			return new UserSS(user.get().getId(), user.get().getEmail(), user.get().getSenha(), user.get().getPerfis());
		}
		
		throw new UsernameNotFoundException(email);
	}
	
	
}
