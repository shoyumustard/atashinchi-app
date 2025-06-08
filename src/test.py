import os
import json
import re

def add_ruby(japanese, furigana):
    j_tokens = japanese.strip().split()
    f_tokens = furigana.strip().split()
    result = []
    for i, j_tok in enumerate(j_tokens):
        if i < len(f_tokens):
            result.append(f"<ruby>{j_tok}<rt>{f_tokens[i]}</rt></ruby>")
        else:
            result.append(j_tok)
    return " ".join(result)

# === Setup ===
input_dir = "./subtitles"
output_dir = "./subtitles_with_ruby"
os.makedirs(output_dir, exist_ok=True)

def js_to_json(js_text):
    # Remove JS variable/external export lines
    js_text = re.sub(r'^const subtitles\s*=\s*', '', js_text)
    js_text = re.sub(r';?\s*export\s+default\s+subtitles\s*;?\s*$', '', js_text)

    # Fix unquoted keys like: japanese: => "japanese":
    js_text = re.sub(r'(\s*)(\w+):', r'\1"\2":', js_text)

    # Remove trailing commas before array/object endings
    js_text = re.sub(r',\s*([\]}])', r'\1', js_text)

    return js_text.strip()


for filename in os.listdir(input_dir):
    if filename.endswith(".js") or filename.endswith(".json"):
        path = os.path.join(input_dir, filename)
        with open(path, "r", encoding="utf-8") as f:
            raw = f.read()

        try:
            json_data = json.loads(js_to_json(raw))
        except Exception as e:
            print(f"❌ Failed to parse {filename}: {e}")
            continue

        for entry in json_data:
            if "japanese" in entry and "furigana" in entry:
                entry["ruby"] = add_ruby(entry["japanese"], entry["furigana"])

        # Write new .js file
        out_path = os.path.join(output_dir, filename)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write("const subtitles = ")
            json.dump(json_data, f, ensure_ascii=False, indent=2)
            f.write(";\n\nexport default subtitles;")

        print(f"✔ Converted: {filename}")
