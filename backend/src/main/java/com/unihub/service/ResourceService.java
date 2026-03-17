package com.unihub.service;

import com.unihub.dto.ResourceRequest;
import com.unihub.dto.ResourceResponse;
import com.unihub.entity.Resource;
import com.unihub.entity.User;
import com.unihub.enums.ResourceType;
import com.unihub.repository.ResourceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ResourceService {

    private final ResourceRepository resourceRepository;
    private final UserService userService;

    public ResourceResponse uploadResource(ResourceRequest request, String userEmail) {
        User uploader = userService.findByEmail(userEmail);

        Resource resource = Resource.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .fileUrl(request.getFileUrl())
                .resourceType(request.getResourceType())
                .degreeProgram(request.getDegreeProgram())
                .moduleName(request.getModuleName())
                .uploadedBy(uploader)
                .build();

        Resource savedResource = resourceRepository.save(resource);
        return mapToResponse(savedResource);
    }

    public List<ResourceResponse> getMyResources(String email) {
        return resourceRepository.findByUploadedByEmail(email).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<ResourceResponse> getAllResources() {
        return resourceRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<ResourceResponse> searchResources(String title) {
        return resourceRepository.findByTitleContainingIgnoreCase(title).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<ResourceResponse> filterResources(String degreeProgram, ResourceType resourceType) {
        return resourceRepository.filterResources(degreeProgram, resourceType).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ResourceResponse getResourceById(Long id) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resource not found"));
        return mapToResponse(resource);
    }

    public void deleteResource(Long id) {
        resourceRepository.deleteById(id);
    }

    private ResourceResponse mapToResponse(Resource resource) {
        return ResourceResponse.builder()
                .id(resource.getId())
                .title(resource.getTitle())
                .description(resource.getDescription())
                .fileUrl(resource.getFileUrl())
                .resourceType(resource.getResourceType())
                .degreeProgram(resource.getDegreeProgram())
                .moduleName(resource.getModuleName())
                .uploadedBy(resource.getUploadedBy().getFullName())
                .createdAt(resource.getCreatedAt())
                .build();
    }
}
