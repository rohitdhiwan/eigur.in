#!/bin/bash
# Setup script for Eigur AI Website

echo "Setting up Eigur AI Website..."

# Install dependencies
npm install

# Generate type definitions
npm run build -- --no-lint

echo "Setup complete! You can now run the development server with 'npm run dev'"