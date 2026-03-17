package com.unihub.controller;

import com.unihub.dto.ResourceRequest;
import com.unihub.dto.ResourceResponse;
import com.unihub.enums.ResourceType;
import com.unihub.service.ResourceService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
@RequiredArgsConstructor
public class ResourceController {

    private final ResourceService resourceService;

    @PostMapping
    public ResponseEntity<ResourceResponse> uploadResource(@Valid @RequestBody ResourceRequest request, java.security.Principal principal) {
        return new ResponseEntity<>(resourceService.uploadResource(request, principal.getName()), HttpStatus.CREATED);
    }

    @GetMapping("/my-uploads")
    public ResponseEntity<List<ResourceResponse>> getMyResources(java.security.Principal principal) {
        return ResponseEntity.ok(resourceService.getMyResources(principal.getName()));
    }

    @GetMapping
    public ResponseEntity<List<ResourceResponse>> getAllResources() {
        return ResponseEntity.ok(resourceService.getAllResources());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResourceResponse> getResourceById(@PathVariable Long id) {
        return ResponseEntity.ok(resourceService.getResourceById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<ResourceResponse>> searchResources(@RequestParam String title) {
        return ResponseEntity.ok(resourceService.searchResources(title));
    }

    @GetMapping("/filter")
    public ResponseEntity<List<ResourceResponse>> filterResources(
            @RequestParam(required = false) String degreeProgram,
            @RequestParam(required = false) ResourceType resourceType) {
        return ResponseEntity.ok(resourceService.filterResources(degreeProgram, resourceType));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
        return ResponseEntity.noContent().build();
    }
}
