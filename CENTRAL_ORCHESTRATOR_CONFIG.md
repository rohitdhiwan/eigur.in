# CENTRAL_ORCHESTRATOR_CONFIG.md

## Central Orchestrator Configuration

This file contains the configuration for the 9-agent orchestration system.

### Agent Teams Overview

1. **Research Team** - Market analysis, competitive intelligence, technology trends
2. **Technical Team** - Software development, architecture, technical implementation
3. **Creative Team** - Design, branding, content creation, visual assets
4. **Integration Team** - System integration, API connections, data flows
5. **Analysis Team** - Data analysis, metrics evaluation, performance assessment
6. **Operations Team** - Day-to-day operations, workflow optimization, logistics
7. **DevOps Team** - Deployment, CI/CD, infrastructure, system maintenance
8. **QA Team** - Quality assurance, testing, bug detection
9. **Security Team** - Cybersecurity, data protection, compliance

### Docker Container Configuration

Each team operates in isolated Docker containers with specific resource limits:

```yaml
research-team:
  image: node:18-alpine
  resources:
    memory: 4G
    cpu: 2
  volumes:
    - ./teams/research:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=Research

technical-team:
  image: node:18-alpine
  resources:
    memory: 6G
    cpu: 3
  volumes:
    - ./teams/technical:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=Technical
    - QWEN_API_KEY=${QWEN_API_KEY}

creative-team:
  image: node:18-alpine
  resources:
    memory: 4G
    cpu: 2
  volumes:
    - ./teams/creative:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=Creative

integration-team:
  image: node:18-alpine
  resources:
    memory: 4G
    cpu: 2
  volumes:
    - ./teams/integration:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=Integration

analysis-team:
  image: python:3.11-slim
  resources:
    memory: 6G
    cpu: 2
  volumes:
    - ./teams/analysis:/workspace
  environment:
    - PYTHONPATH=/workspace
    - TEAM_NAME=Analysis
    - QWEN_API_KEY=${QWEN_API_KEY}

operations-team:
  image: node:18-alpine
  resources:
    memory: 2G
    cpu: 1
  volumes:
    - ./teams/operations:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=Operations

devops-team:
  image: docker:dind
  privileged: true
  resources:
    memory: 4G
    cpu: 2
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
    - ./teams/devops:/workspace
  environment:
    - TEAM_NAME=DevOps

qa-team:
  image: node:18-alpine
  resources:
    memory: 4G
    cpu: 2
  volumes:
    - ./teams/qa:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=QA

security-team:
  image: node:18-alpine
  resources:
    memory: 4G
    cpu: 2
  volumes:
    - ./teams/security:/workspace
  environment:
    - NODE_ENV=production
    - TEAM_NAME=Security
```

### Communication Protocol

Teams communicate through structured JSON messages:

```json
{
  "id": "unique-message-id",
  "timestamp": "ISO timestamp",
  "from": "sender-team-name",
  "to": "recipient-team-name",
  "type": "request|response|notification|escalation",
  "priority": "low|normal|high|critical",
  "content": {
    "subject": "brief description",
    "details": "full message content",
    "attachments": ["file_paths"],
    "deadline": "optional deadline"
  },
  "metadata": {
    "projectId": "optional project reference",
    "escalationLevel": "1-6 for critical issues"
  }
}
```

### Escalation Levels

1. **Level 1**: Team-level decision
2. **Level 2**: Team lead approval needed
3. **Level 3**: Department manager approval
4. **Level 4**: Senior management review
5. **Level 5**: Executive committee review
6. **Level 6**: CEO notification for critical security issues

### Monitoring & Logging

- Centralized logging with Prometheus
- Health checks for each team container
- Performance metrics collection
- Alerting for system failures
- Executive dashboard for status updates