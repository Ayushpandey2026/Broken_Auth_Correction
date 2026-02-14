# Broken Authentication Assignment

This repository contains the solution to the "Broken Authentication" backend debugging assignment.

The task was to debug and fix an intentionally broken authentication flow involving:
- OTP-based login
- Session handling via cookies
- JWT token generation
- Accessing protected routes

---

## Setup Instructions

1. Install dependencies:
```bash
npm install


2. Start the server:

npm start


Server runs at:

http://localhost:3000

```

# Authentication Flow

The complete authentication flow works as follows:

 ## Login

* Endpoint: POST /auth/login

Returns a loginSessionId

OTP is logged in the server console

## Verify OTP

* Endpoint: POST /auth/verify-otp

Verifies OTP and sets a session cookie

## Get Access Token

* Endpoint: POST /auth/token

Exchanges session cookie for JWT access token

## Access Protected Route

* Endpoint: GET /protected

Requires Authorization: Bearer <token>

Returns success response with a unique success flag

Verification

The file output.txt contains the terminal output of:

* Login

* OTP verification

* Token generation

* Accessing the protected route

The final output includes a valid success_flag, proving successful completion of the assignment.

# Notes

Session storage is in-memory.

OTP is logged to the server console for testing purposes.
