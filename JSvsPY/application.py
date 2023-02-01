from flask import Flask, render_template, request, redirect, session
import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('int.html')


if __name__ == '__main__':
    app.run(debug=True)
