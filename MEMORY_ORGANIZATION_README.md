# Autonomous Multi-Agent Orchestration System - Memory & Organization

## Overview
This system implements a permanent memory and organizational structure for the autonomous multi-agent orchestration system. All core instructions are preserved in a skeleton file that cannot be erased, while project work is organized in structured folders.

## Directory Structure

### Root Level
- `PERMANENT_MEMORY_SKELETON.md` - Core system instructions that cannot be erased
- `MEMORY.md` - Main memory file with system status
- `CENTRAL_ORCHESTRATOR_CONFIG.md` - Central orchestrator configuration
- `TEAM_*_CONFIG.md` - Individual team configurations

### Projects Directory (`/projects`)
- Contains all project-specific files and documentation
- Each project gets its own file with standardized template
- Project template provided for consistency
- Example project included as reference

### Workspaces Directory (`/workspaces`)
- Contains workspace templates and examples
- Standardized workspace structure for different types of work
- Template provided for creating new workspaces

### Memory Directory (`/memory`)
- Daily memory logs in YYYY-MM-DD.md format
- Historical record of system activities
- Project-specific memory files

### Database Directory (`/database`)
- Schema definitions for system data
- Templates for data organization
- Standardized data structures

## Permanent Memory Protocol

### Core Instructions Preservation
- All original system instructions stored in `PERMANENT_MEMORY_SKELETON.md`
- This file acts as an immutable skeleton that guides all operations
- Cannot be deleted or modified without explicit reinitialization
- Contains all essential directives and system architecture

### Memory Organization
- Daily activities logged in dated memory files
- Project-specific memories in project folders
- System-wide memories in MEMORY.md
- Team-specific memories in team configuration files

### Data Classification
- Projects: Major initiatives with defined scope, timeline, and deliverables
- Workspaces: Temporary or ongoing work areas with specific purposes
- Communications: Inter-team and system communications
- System Events: Important system-level occurrences

## Usage Guidelines

### For New Projects
1. Create a new project file in `/projects` using the template
2. Assign appropriate teams based on project requirements
3. Track progress using the standardized format
4. Log communications and status updates regularly

### For Daily Operations
1. Update MEMORY.md with significant system changes
2. Add daily activities to the appropriate date file in `/memory`
3. Use workspace templates for new work areas
4. Follow standardized naming conventions

### For Communications
1. Log important team communications in project files
2. Use structured formats for consistency
3. Maintain audit trails for decisions and changes
4. Escalate issues according to established protocols

This organizational structure ensures that all system knowledge is preserved, easily accessible, and properly categorized for future reference.