from flask import Flask, request, send_file
from flask_cors import CORS
from PIL import Image, ImageDraw, ImageFont
import io

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/generate-image', methods=['POST'])
def generate_image():
    data = request.get_json()
    text = data.get('text', '')

    # Create an image with PIL
    img = Image.new('RGB', (400, 300), color=(73, 109, 137))
    d = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    d.text((10, 150), text, fill=(255, 255, 0), font=font)

    # Save the image to a BytesIO object
    img_io = io.BytesIO()
    img.save(img_io, 'JPEG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(debug=True)
