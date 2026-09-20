from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=220):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is close to white
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            new_data.append((255, 255, 255, 0)) # Fully transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_white_bg("/Users/JSM/.gemini/antigravity/brain/3e8eb13a-5fbf-46a9-b452-37f779ee9b22/.user_uploaded/media_1789837628182.png", "public/fomra-logo-clean.png")
