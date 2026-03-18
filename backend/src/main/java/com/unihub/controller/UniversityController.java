package com.unihub.controller;

import com.unihub.entity.University;
import com.unihub.repository.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/universities")
@RequiredArgsConstructor
public class UniversityController {

    private final UniversityRepository universityRepository;

    @GetMapping
    public List<University> getUniversities(@RequestParam(required = false) String search) {
        if (search != null && !search.trim().isEmpty()) {
            return universityRepository.findByUniversityNameContainingIgnoreCaseOrderByUniversityNameAsc(search.trim());
        }
        return universityRepository.findAllByOrderByUniversityNameAsc();
    }
}
