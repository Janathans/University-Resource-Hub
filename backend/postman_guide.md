# University Resource Hub - Postman Testing Guide

This guide will help you verify the full-stack backend workflow using Postman.

## Base URL
`http://localhost:8080/api`

---

## 1. Authentication Flow

### A. Register a New User
- **Method**: `POST`
- **URL**: `{{BaseURL}}/auth/register`
- **Body** (JSON):
```json
{
    "fullName": "Janathan Doe",
    "email": "janathan@university.com",
    "password": "Password123",
    "role": "STUDENT"
}
```
- **Expected Result**: `201 Created`. The response will include a `token`. **Copy this token.**

### B. Login
- **Method**: `POST`
- **URL**: `{{BaseURL}}/auth/login`
- **Body** (JSON):
```json
{
    "email": "janathan@university.com",
    "password": "Password123"
}
```
- **Expected Result**: `200 OK`. The response will include a fresh `token`.

---

## 2. Resource Management (Protected)

For these requests, you must include the token in the **Authorization** tab:
- **Type**: Bearer Token
- **Token**: `paste_your_token_here`

### A. Upload a Resource
- **Method**: `POST`
- **URL**: `{{BaseURL}}/resources`
- **Body** (JSON):
```json
{
    "title": "Introduction to Algorithms",
    "description": "Comprehensive notes for the Algorithms module.",
    "fileUrl": "https://example.com/notes.pdf",
    "resourceType": "LECTURE_NOTE",
    "degreeProgram": "Computer Science",
    "moduleName": "CS101"
}
```
- **Expected Result**: `201 Created`. The `uploadedBy` field will automatically be set to your name.

### B. Get "My Uploads"
- **Method**: `GET`
- **URL**: `{{BaseURL}}/resources/my-uploads`
- **Expected Result**: `200 OK`. A list of resources you uploaded.

### C. Delete a Resource
- **Method**: `DELETE`
- **URL**: `{{BaseURL}}/resources/{id}`
- **Expected Result**: `204 No Content`.

---

## 3. Resource Discovery (Public/Protected)

### A. Get All Resources
- **Method**: `GET`
- **URL**: `{{BaseURL}}/resources`

### B. Get Resource by ID
- **Method**: `GET`
- **URL**: `{{BaseURL}}/resources/1`

### C. Search by Title
- **Method**: `GET`
- **URL**: `{{BaseURL}}/resources/search?title=Algo`

### D. Filter by Program/Type
- **Method**: `GET`
- **URL**: `{{BaseURL}}/resources/filter?degreeProgram=Computer Science&resourceType=LECTURE_NOTE`
