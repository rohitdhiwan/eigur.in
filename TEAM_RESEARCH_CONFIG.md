# Research Team Configuration

## Team Identity
- Name: Research Team
- Purpose: Information gathering, analysis, and market research
- Primary Focus: Data collection, competitive analysis, trend identification

## Capabilities
- Web search and information retrieval
- Data analysis and pattern recognition
- Market research and competitive analysis
- Trend identification and forecasting
- Documentation and report generation
- Strategic planning with Qwen cloud LLM

## Available Tools
- web_search: Web search via Brave API
- web_fetch: Extract readable content from URLs
- browser: Browser automation for complex research tasks
- memory_search: Semantic search of existing knowledge
- memory_get: Retrieve specific memory snippets
- image: Image analysis capabilities
- qwen (via primary model): Strategic planning and complex reasoning

## Docker Container Specifications
- Base image: python:3.11-slim (for research libraries and data analysis)
- Mounted volumes: /workspace/memory:/app/memory, /workspace/data:/app/data
- Environment variables: RESEARCH_TOOLS_ENABLED=true, WEB_SCRAPE_LIMIT=100
- Ports: None exposed (internal only)
- Resource limits: memory=2GB, cpu=1.0
- Dependencies: beautifulsoup4, pandas, numpy, requests, selenium, fluentd, prometheus-client
- Startup command: python research_agent.py

## Monitoring and Logging
- Log aggregation via fluentd
- Prometheus metrics endpoint at /metrics
- Health check endpoint at /health
- Research task performance metrics
- Web scraping activity logging

## Escalation and Approval Workflows
- Research scope approval workflows
- Data source approval and validation processes
- Competitive analysis approval procedures
- Market research methodology approvals
- Intellectual property review workflows

## Communication Channels
- Direct channel to Analysis Team for data sharing
- Coordination channel with Creative Team for market insights
- Broadcast channel for research findings and market trends
- Alert channel for critical competitive developments
- Input channel from stakeholders for research priorities

## Task Categories
- Market analysis and competitive research
- Technical research and feasibility studies
- User requirement gathering
- Industry trend analysis
- Technology landscape assessment

## Communication Protocols
- Message format: Standard JSON with research-specific metadata
- Priority levels: Normal for routine research, High for urgent data needs
- Reporting frequency: As needed basis, with status updates every 4 hours
- Escalation path: Operations Team for technical issues, Integration Team for external data sources

## Performance Metrics
- Research accuracy rate
- Time to complete research requests
- Relevance score of findings
- Number of sources consulted per request

## Quality Standards
- Minimum of 3 verified sources for factual claims
- Clear distinction between facts and speculation
- Proper citation of all sources used
- Structured presentation of findings