package com.unihub.entity;

import com.unihub.enums.ResourceType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "resources")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Resource {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false)
    private String fileUrl;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ResourceType resourceType;
    
    @Column(nullable = false)
    private String degreeProgram;
    
    @Column(nullable = false)
    private String moduleName;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uploaded_by", nullable = false)
    private User uploadedBy;
    
    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;
}
