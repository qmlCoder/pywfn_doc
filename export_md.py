import subprocess, sys
from pathlib import Path

nb_path = Path("docs/教程/设计理念.ipynb")
python = sys.executable  # 或 .venv/Scripts/python.exe

subprocess.run([
    python, "-m", "nbconvert",
    str(nb_path),
    "--to", "markdown",
    "--output", nb_path.with_suffix(".md").name,
    "--output-dir", str(nb_path.parent)
])