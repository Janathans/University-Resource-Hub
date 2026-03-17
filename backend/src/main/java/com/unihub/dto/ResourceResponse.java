package com.unihub.dto;

import com.unihub.enums.ResourceType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ResourceResponse {
    private Long id;
    private String title;
    private String description;
    private String fileUrl;
    private ResourceType resourceType;
    private String degreeProgram;
    private String moduleName;
    private String uploadedBy; // Name of the user
    private LocalDateTime createdAt;
}
