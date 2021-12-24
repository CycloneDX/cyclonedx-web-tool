#!/usr/bin/env bash
dotnet publish --configuration Release --output ./gh-pages src/CycloneDX.WebTool
cd gh-pages/wwwroot
python3 -m http.server 8000