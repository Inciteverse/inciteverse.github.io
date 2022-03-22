
from flask import Flask, render_template,send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)


@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/dif")
def difpoint():
    return "<h1>Second page!</h1>"


app.run(debug=True)
