package com.unihub.dto;

import com.unihub.enums.ResourceType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ResourceRequest {
    @NotBlank(message = "Title is required")
    private String title;
    
    private String description;
    
    @NotBlank(message = "File URL is required")
    private String fileUrl;
    
    @NotNull(message = "Resource type is required")
    private ResourceType resourceType;
    
    @NotBlank(message = "Degree program is required")
    private String degreeProgram;
    
    @NotBlank(message = "Module name is required")
    private String moduleName;
    
    @NotNull(message = "Uploader ID is required")
    private Long uploadedById;
}
