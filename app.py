from flask import Flask, render_template, jsonify
import numpy as np

app = Flask(__name__)
# random_decimal = np.random.rand()
random_decimal = None


@app.route('/update_decimal', methods=['POST', 'GET'])
def updatedecimal():
    # random_decimal = np.random.rand()
    random_decimal = True
    return jsonify(x=random_decimal)
# '', render_template('index.html', x=random_decimal)

@app.route('/')
def homepage():
    return render_template('index.html', x=random_decimal)


app.run()
