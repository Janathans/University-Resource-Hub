package com.unihub.repository;

import com.unihub.entity.FieldOfStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FieldOfStudyRepository extends JpaRepository<FieldOfStudy, Long> {
    List<FieldOfStudy> findByFieldNameContainingIgnoreCaseOrderByFieldNameAsc(String name);
    List<FieldOfStudy> findAllByOrderByFieldNameAsc();
}
