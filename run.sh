#!/bin/bash

npx tsc && cd dist && node --es-module-specifier-resolution=node index.js