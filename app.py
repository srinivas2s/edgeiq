import os
from flask import Flask, render_template

# Define explicit paths for templates and static files to ensure reliability across environments (local & Vercel)
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
TEMPLATE_DIR = os.path.join(BASE_DIR, 'templates')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
