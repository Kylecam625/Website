from pathlib import Path

import streamlit as st
from PIL import Image

# --- PATH SETTINGS ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir / "styles" / "main.css"
resume_file = current_dir / "assets" / "resume.pdf"
profile_pic = current_dir / "assets" / "profile-pic.png"


# --- GENERAL SETTINGS ---
PAGE_TITLE = 'Digital CV | Kyle Camuti'
PAGE_ICON = ':wave:'
NAME = 'Kyle Camuti'
DESCRIPTION = '''Senior Data Analyst, assisting enterprises by supporting data-driven decision-making.'''

EMAIL = 'Kylecam625@gmail.com'
SOCIAL_MEDIA = {
    "youtube":
    "linkedIn"
    "GitHub"
    "Twitter / X"
}

PROJECTS = {
    "blah",
    "Blah", 
    "BLah",
    "BLAH",
}


st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)

st.title("Hello, World! :wave:")


# --- LOAD CSS, DP





















