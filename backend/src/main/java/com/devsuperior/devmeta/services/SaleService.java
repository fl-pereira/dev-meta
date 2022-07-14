package com.devsuperior.devmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.devsuperior.devmeta.entities.Sale;
import com.devsuperior.devmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today 	= LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
				
		LocalDate minD = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate maxD = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return repository.findSales(minD, maxD, pageable);
	}
	
}
