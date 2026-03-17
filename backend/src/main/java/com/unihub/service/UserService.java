package com.unihub.service;

import com.unihub.config.JwtUtils;
import com.unihub.dto.UserLoginRequest;
import com.unihub.dto.UserRegisterRequest;
import com.unihub.dto.UserResponse;
import com.unihub.entity.User;
import com.unihub.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public UserResponse registerUser(UserRegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();

        User savedUser = userRepository.save(user);
        return mapToResponse(savedUser);
    }

    public UserResponse loginUser(UserLoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        return mapToResponse(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    private UserResponse mapToResponse(User user) {
        String token = jwtUtils.generateToken(user.getEmail());
        return UserResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .role(user.getRole())
                .token(token)
                .createdAt(user.getCreatedAt())
                .build();
    }
}
