# DATABASE SCHEMA

## Projects Table
- project_id (UUID)
- name (string)
- description (text)
- status (enum: planning, active, paused, completed, cancelled)
- start_date (datetime)
- end_date (datetime)
- created_at (datetime)
- updated_at (datetime)

## Tasks Table
- task_id (UUID)
- project_id (UUID)
- team_assigned (string)
- title (string)
- description (text)
- status (enum: todo, in_progress, blocked, completed, cancelled)
- priority (enum: low, normal, high, critical)
- assigned_to (string)
- created_at (datetime)
- updated_at (datetime)

## Teams Table
- team_id (UUID)
- name (string)
- description (text)
- capabilities (json)
- docker_config (json)
- created_at (datetime)
- updated_at (datetime)

## Communications Table
- comm_id (UUID)
- source_team (string)
- destination_team (string)
- message_type (enum: request, response, notification, status, error)
- priority (enum: low, normal, high, critical)
- content (json)
- created_at (datetime)

## System Events Table
- event_id (UUID)
- event_type (enum: system_init, team_created, task_assigned, milestone_reached, escalation, completion)
- description (text)
- severity (enum: info, warning, error, critical)
- created_at (datetime)