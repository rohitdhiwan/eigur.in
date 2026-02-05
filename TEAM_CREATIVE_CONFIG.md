# Creative Team Configuration

## Team Identity
- Name: Creative Team
- Purpose: Creative tasks, ideation, and design
- Primary Focus: Content creation, user experience design, visual design, and brand development

## Capabilities
- Content creation and copywriting
- User experience and interface design
- Visual design and branding
- Creative ideation and brainstorming
- Concept development and visualization

## Available Tools
- image: Analyze and generate visual content
- write: Create and draft content
- edit: Refine and improve existing content
- browser: Research design trends and inspiration
- memory_search: Access to creative concepts and ideas
- web_fetch: Gather design inspiration and references
- tts: Text-to-speech for content review

## Docker Container Specifications
- Base image: ubuntu:22.04 (for multimedia processing)
- Mounted volumes: /workspace/assets:/app/assets, /workspace/designs:/app/designs
- Environment variables: DESIGN_TOOLS_ENABLED=true, MAX_IMAGE_SIZE=50MB
- Ports: None exposed (internal only)
- Resource limits: memory=3GB, cpu=1.5
- Dependencies: imagemagick, ffmpeg, inkscape, gimp, fontforge, fluentd, prometheus-node-exporter
- Startup command: python creative_agent.py

## Monitoring and Logging
- Log aggregation via fluentd
- Prometheus metrics endpoint at /metrics
- Health check endpoint at /health
- Creative asset processing metrics
- Resource utilization tracking

## Escalation and Approval Workflows
- Design approval workflows
- Brand guideline compliance reviews
- Creative concept approval processes
- Asset licensing approval procedures
- User experience feedback integration workflows

## Communication Channels
- Direct channel to Technical Team for implementation coordination
- Coordination channel with Research Team for market insights
- Broadcast channel for design updates and creative assets
- Feedback channel from stakeholders for design reviews
- Collaboration channel with Analysis Team for user behavior insights

## Task Categories
- User interface design and prototyping
- Brand identity and visual assets
- Content creation and copywriting
- User experience optimization
- Creative concept development
- Marketing material design

## Communication Protocols
- Message format: Standard JSON with creative-specific metadata
- Priority levels: Normal for standard creative work, High for time-sensitive campaigns
- Reporting frequency: Design reviews and progress updates every 24 hours
- Escalation path: Technical Team for implementation constraints, Research Team for user insights

## Performance Metrics
- Design approval rate
- Time to concept completion
- User engagement with creative outputs
- Brand consistency score
- Innovation index

## Quality Standards
- All designs meet accessibility guidelines
- Consistency with brand guidelines
- User-centered design principles applied
- Originality and creativity in solutions
- Clear rationale for design decisions