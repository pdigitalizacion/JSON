from flask import Flask, render_template, jsonify

app = Flask(__name__)
x = True


@app.route('/update_decimal', methods=['POST'])
def updatedecimal():
    return jsonify('', render_template('random_decimal_model.html', x=x))


@app.route('/')
def homepage():
    return render_template('prueba.html', x=x)


app.run()
