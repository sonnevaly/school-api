# Reflective Questions on JWT Authentication

**1. What are the main benefits of using JWT for authentication?**  
- Stateless: No server-side session needed.  
- Scalable: Works well in distributed systems.  
- Cross-domain: Supports SSO.  
- Secure: Can be signed/encrypted.  
- Flexible: Supports custom claims.

**2. Where should you store your JWT secret and why?**  
- In environment variables (e.g., `.env`), not in code.  
- This keeps secrets secure, easy to update, and environment-specific.

**3. Why hash passwords even if using JWT?**  
- Protects passwords if the database is breached.  
- Adds another security layer.  
- Meets compliance requirements.

**4. What if a protected route does not check the JWT?**  
- Anyone could access or modify sensitive data.  
- Leads to security breaches and non-compliance.

**5. How does Swagger help frontend developers or API consumers?**  
- Provides clear, interactive API docs.  
- Allows direct testing of endpoints.  
- Supports code generation and standardization.

**6. What tradeoffs come with using token expiration (e.g., 1 hour)?**  
- **Pros:** Increases security, controls sessions.  
- **Cons:** Can frustrate users, adds complexity for token refresh.