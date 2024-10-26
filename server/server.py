from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return jsonify(message="Hello world!")

@app.route('/api/diagnosis')
def diagnosis():
    return

@app.route('/api/translator')
def translation():
    return

if __name__ == '__main__':
    app.run(debug=True)