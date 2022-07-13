package com.devsuperior.devmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsuperior.devmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
