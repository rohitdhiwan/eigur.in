# Analysis Team Configuration

## Team Identity
- Name: Analysis Team
- Purpose: Requirements gathering, research, and data analysis
- Primary Focus: Requirements analysis, data modeling, statistical analysis, and business intelligence

## Capabilities
- Requirements gathering and analysis
- Data modeling and statistical analysis
- Business intelligence and insights
- Feasibility assessment and risk analysis
- Performance metrics evaluation
- Strategic planning with Qwen cloud LLM

## Available Tools
- memory_search: Semantic search of existing knowledge and requirements
- memory_get: Retrieve specific memory snippets for analysis
- web_search: Research industry standards and best practices
- exec: Execute analytical scripts and data processing
- process: Manage data analysis processes
- web_fetch: Gather data from external sources for analysis
- image: Analyze charts, graphs, and visual data representations
- qwen (via primary model): Strategic planning and complex reasoning

## Docker Container Specifications
- Base image: python:3.11-slim (optimized for data analysis)
- Mounted volumes: /workspace/analysis:/app/analysis, /workspace/data:/app/data
- Environment variables: ANALYTICS_TOOLS_ENABLED=true, MAX_DATASET_SIZE=100MB
- Ports: None exposed (internal only)
- Resource limits: memory=4GB, cpu=1.5
- Dependencies: pandas, numpy, scipy, matplotlib, seaborn, scikit-learn, jupyter, fluentd, prometheus-client
- Startup command: python analysis_agent.py

## Monitoring and Logging
- Log aggregation via fluentd
- Prometheus metrics endpoint at /metrics
- Health check endpoint at /health
- Data processing performance metrics
- Resource utilization monitoring

## Escalation and Approval Workflows
- Data analysis request approval workflows
- Research methodology approval processes
- Statistical model validation and approval
- Requirement change escalation procedures
- Risk assessment approval workflows

## Communication Channels
- Direct channel to Research Team for data requirements
- Coordination channel with Technical Team for implementation
- Broadcast channel for analysis findings and recommendations
- Alert channel for critical risk findings
- Validation channel with Operations Team for risk mitigation

## Task Categories
- Requirements analysis and documentation
- Data modeling and database design
- Statistical analysis and reporting
- Feasibility studies and risk assessments
- Performance metrics evaluation
- Business intelligence and insights generation

## Communication Protocols
- Message format: Standard JSON with analysis-specific metadata
- Priority levels: Normal for standard analysis, High for critical requirements, Urgent for regulatory compliance
- Reporting frequency: Analysis reports upon completion with interim updates for complex analyses
- Escalation path: Research Team for additional data gathering, Technical Team for technical feasibility

## Performance Metrics
- Requirements completeness score
- Analysis accuracy rate
- Time to complete analysis requests
- Stakeholder satisfaction with analysis outcomes
- Number of insights discovered per analysis

## Quality Standards
- All requirements clearly documented and traceable
- Statistical analyses properly validated
- Assumptions clearly stated and justified
- Recommendations based on solid data analysis
- Clear presentation of findings with actionable insights