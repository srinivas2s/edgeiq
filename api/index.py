import os
import sys

# Ensure root directory is on Python path so app can be imported
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app

# Vercel serverless function entrypoint
# app is exposed as the WSGI application
