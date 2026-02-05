# Security Team Configuration

## Team Identity
- Name: Security Team
- Purpose: Security audits, penetration testing, and compliance
- Primary Focus: Security audits, penetration testing, compliance verification, and vulnerability assessment

## Capabilities
- Security audits and assessments
- Penetration testing and vulnerability assessment
- Compliance verification and reporting
- Threat modeling and risk analysis
- Security architecture review

## Available Tools
- exec: Execute security scanning and testing tools
- process: Manage security assessment processes
- nodes: Perform security scans on infrastructure
- web_search: Research security vulnerabilities and patches
- browser: Security testing of web applications
- memory_search: Access to security policies and compliance requirements
- web_fetch: Validate security headers and configurations

## Task Categories
- Security audits and compliance assessments
- Penetration testing and vulnerability scanning
- Threat modeling and risk analysis
- Security architecture review and recommendations
- Incident response and forensics
- External communication security validation
- API security and rate limit protection
- Data encryption and secure transmission
- Hardware integration security assessment

## Communication Protocols
- Message format: Standard JSON with security-specific metadata
- Priority levels: Normal for standard assessments, High for medium vulnerabilities, Critical for severe threats
- Reporting frequency: Security assessments upon completion, weekly threat reports
- Escalation path: Operations Team for infrastructure issues, Technical Team for code vulnerabilities, Management for critical threats

## Performance Metrics
- Vulnerability detection rate
- Time to remediate security issues
- Compliance score against standards
- Security incident response time
- Threat prevention effectiveness

## Quality Standards
- All security recommendations follow industry best practices
- Regular updates on emerging threats and vulnerabilities
- Comprehensive security documentation
- Adherence to compliance frameworks (SOC2, ISO27001, etc.)
- Zero tolerance for critical security vulnerabilities in production

## Docker Container Specifications
- Base image: kalilinux/kali-rolling (for security tools)
- Mounted volumes: /workspace/security:/app/security, /workspace/reports:/app/reports
- Environment variables: SECURITY_LEVEL=high, COMPLIANCE_STANDARD=SOC2
- Ports: None exposed (internal only)
- Resource limits: memory=4GB, cpu=1.5
- Dependencies: nmap, nikto, sqlmap, burpsuite, owasp-zap, metasploit-framework, nessus, fluentd, prometheus-client
- Startup command: python security_agent.py

## Monitoring and Logging
- Log aggregation via fluentd
- Prometheus metrics endpoint at /metrics
- Health check endpoint at /health
- Security scan result tracking
- Vulnerability assessment metrics

## Escalation and Approval Workflows
- Critical vulnerability escalation procedures
- Security audit approval workflows
- Penetration testing authorization processes
- Incident response escalation protocols
- Compliance remediation approval requests