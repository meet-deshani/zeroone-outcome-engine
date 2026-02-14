# Security & Compliance

> **Access:** INVESTOR | TEAM

---

## Security Philosophy

Security isn't a feature — it's a foundation. Every system we build follows six pillars that protect your data, your users, and your business.

---

## Six Security Pillars

### 1. Access Control — Least Privilege & Separation of Duties
- Every user and system gets only the permissions they need — nothing more
- Separation of duties ensures no single person or process can compromise the system
- Role-based access control (RBAC) on all infrastructure

### 2. Encryption — AES + TLS
- **At Rest:** AES encryption (128/192/256-bit) for stored data
- **In Transit:** TLS 1.2+ for all network communication
- **FIPS-Compliant:** Encryption implementations follow FIPS standards
- All API communications encrypted end-to-end

### 3. Data Minimization — Collect Only What's Needed
- Default to collecting the minimum data necessary
- **Tokenization** preferred over storing raw sensitive data
- **Redaction** applied to logs and outputs
- **PII Strategy:** Pseudonymization first, full anonymization where possible
- Data retention policies — delete when no longer needed

### 4. Application Security — OWASP Standards
- Code reviewed against OWASP Application Security Verification Standard (ASVS)
- Protected against OWASP Top 10 vulnerabilities:
  - SQL Injection
  - Cross-Site Scripting (XSS)
  - Broken Authentication
  - Sensitive Data Exposure
  - Security Misconfiguration
  - And more
- Regular security audits and code reviews

### 5. Audit Trails — Everything is Logged
- Comprehensive audit trails for all system actions
- Who accessed what, when, and from where
- Immutable logs — can't be tampered with after creation
- Log retention aligned with compliance requirements

### 6. Compliance — SOC 2 Trust Services Criteria
- Controls aligned with SOC 2 Trust Services Criteria:
  - **Security** — System is protected against unauthorized access
  - **Availability** — System is available for operation and use
  - **Processing Integrity** — System processing is complete and accurate
  - **Confidentiality** — Information designated as confidential is protected
  - **Privacy** — Personal information is collected, used, retained, and disclosed correctly

---

## Data Handling

### PII (Personally Identifiable Information)
| Approach | How We Apply It |
|----------|----------------|
| **Minimization** | Don't collect what you don't need |
| **Pseudonymization** | Replace identifiers with tokens |
| **Tokenization** | Store references, not raw data |
| **Redaction** | Strip PII from logs and AI outputs |
| **Encryption** | AES for storage, TLS for transmission |

### Data Residency & Isolation
- **Per-customer isolation** — your data is never mixed with another client's
- **BYO-VPC option** — run everything on your own infrastructure
- **Geographic control** — choose where your data is stored
- **On-premise deployment** — for maximum data sovereignty

---

## Infrastructure Security

### Network
- Private Docker bridge network — containers isolated from public internet
- Only nginx exposed externally (ports 80/443)
- SSL/TLS 1.2+ enforced on all external connections
- Let's Encrypt certificates auto-renewed

### Container Security
- Each service runs in its own Docker container (isolated namespace)
- Container images regularly updated for security patches
- No root access within containers
- Resource limits enforced per container

### Server
- Ubuntu 24.04 LTS with security updates enabled
- Non-standard SSH configuration
- Firewall rules restricting inbound connections
- Regular security patches applied

---

## AI-Specific Security

### Model Security
- AI models run locally (Ollama) — no data sent to external model providers for sensitive queries
- Model weights stored encrypted
- Inference results not logged unless explicitly configured

### Prompt Security
- Input sanitization on all AI prompts
- Output filtering to prevent data leakage
- No PII in AI training data without explicit consent

### Privacy Routing
- The AI Council routes sensitive queries to local models (DeepSeek R1)
- Only non-sensitive queries can be sent to cloud models (Claude, Gemini)
- Configurable policies per data classification level

---

## Benefits Summary

| Benefit | For Whom | What It Means |
|---------|----------|---------------|
| **Lower Risk** | Investors, Leadership | Measurable reduction in data breach exposure |
| **Faster, Safer Change** | Dev Teams | Deploy code with confidence using SLO-aware alerting |
| **Easier Audits** | Compliance Teams | SOC 2-aligned controls with audit-ready documentation |
| **Customer Trust** | Sales Teams | Security posture becomes a selling point |
| **Data Sovereignty** | Regulated Industries | Full control over where data lives and who accesses it |

---

## Compliance Readiness

| Standard | Status |
|----------|--------|
| **SOC 2** | Controls aligned with Trust Services Criteria |
| **OWASP ASVS** | Application security verified against ASVS checklist |
| **FIPS** | Encryption implementations follow FIPS standards |
| **GDPR** | Data minimization and right-to-erasure supported |
| **India DPDPA** | Personal data handling aligned with Digital Personal Data Protection Act |
