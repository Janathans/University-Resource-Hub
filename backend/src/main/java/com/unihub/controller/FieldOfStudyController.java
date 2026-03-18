package com.unihub.controller;

import com.unihub.entity.FieldOfStudy;
import com.unihub.repository.FieldOfStudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fields")
@RequiredArgsConstructor
public class FieldOfStudyController {

    private final FieldOfStudyRepository fieldOfStudyRepository;

    @GetMapping
    public List<FieldOfStudy> getFields(@RequestParam(required = false) String search) {
        if (search != null && !search.trim().isEmpty()) {
            return fieldOfStudyRepository.findByFieldNameContainingIgnoreCaseOrderByFieldNameAsc(search.trim());
        }
        return fieldOfStudyRepository.findAllByOrderByFieldNameAsc();
    }
}
