import re
from pathlib import Path

for path in Path("docs/示例").iterdir():
    if path.name == "index.md":
        continue
    print(path.name)
    text = path.read_text(encoding="utf-8")
    date = path.stem
    code_content = Path(f"codes/{date}.py").read_text(encoding="utf-8")

    match = re.search(r"^```py\w*\n[\s\S]*?```$", text, re.MULTILINE | re.DOTALL)
    if not match:
        print("No code block found in ", path.name)
        continue

    replacement = f"```py\n{code_content}\n```"
    text = text[: match.start()] + replacement + text[match.end() :]

    print(text)
    path.write_text(text, encoding="utf-8")
