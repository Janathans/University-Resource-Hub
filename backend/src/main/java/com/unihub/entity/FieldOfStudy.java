package com.unihub.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "fields_of_study")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FieldOfStudy {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "field_name", nullable = false)
    private String fieldName;
}
