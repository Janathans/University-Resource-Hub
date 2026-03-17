package com.unihub.repository;

import com.unihub.entity.Resource;
import com.unihub.enums.ResourceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
    
    List<Resource> findByTitleContainingIgnoreCase(String title);
    
    @Query("SELECT r FROM Resource r WHERE " +
           "( :degreeProgram IS NULL OR r.degreeProgram = :degreeProgram ) AND " +
           "( :resourceType IS NULL OR r.resourceType = :resourceType )")
    List<Resource> filterResources(@Param("degreeProgram") String degreeProgram, 
                                   @Param("resourceType") ResourceType resourceType);
}
