
from flask import Flask, render_template,send_from_directory
app = Flask(__name__)


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
