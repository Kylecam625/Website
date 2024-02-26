from pathlib import Path

import streamlit as st
from PIL import Image

# --- PATH SETTINGS ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir / "styles" / "main.css"
resume_file = current_dir / "assets" / "resume.pdf"
profile_pic = current_dir / "assets" / "profile-pic.png"


# --- GENERAL SETTINGS --- #
PAGE_TITLE = 'Digital CV | Kyle Camuti'
PAGE_ICON = ':wave:'
NAME = 'Kyle Camuti'
DESCRIPTION = '''I'm Kyle Camuti, passionate about AI, machine learning, programming, and robotics.
Pursuing a computer science degree at St. Petersburg College, I'm captivated by how quantum mechanics can transform computing and AI.
Outside academics and work, I delve into game development, 3D printing, and AI projects, viewing these activities as vital to my drive for innovation.
Thank you for exploring my profile and interests.
'''

EMAIL = 'Kylecam625@gmail.com'
PHONENUMBER = '727-288-4138'
SOCIAL_MEDIA = {
    "▶️ YouTube" : "https://www.youtube.com/channel/UCRt3FOsR3y4dgQpvQKvcg7A",
    "🖇️ linkedIn" : "https://www.linkedin.com/in/kyle-camuti-4816192b3/",
    "😼 GitHub" : "https://github.com/Kylecam625",
    "✖️ Twitter / X" : "https://twitter.com/KCamuti",
}

st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)


# --- LOAD CSS, PDF, AND PROFILE PIC --- #
with open(css_file) as f:
    st.markdown("<style>{}<style>".format(f.read()), unsafe_allow_html=True)
with open(resume_file, "rb") as f:
    PDFbytes = f.read()
profile_pic = Image.open(profile_pic)

# --- HERO SECTION --- #
col1, col2 = st.columns(2, gap="small")
with col1:
    st.image(profile_pic, width=230)
    
with col2:
    st.title(NAME)
    st.write(DESCRIPTION)
    st.download_button(
        label="📝 Download Resume",
        data=PDFbytes,
        file_name=resume_file.name,
        mime="application/octet-stream",
        help="Download my resume to learn more about me",
    )

st.write("📬",EMAIL)
st.write("📞",PHONENUMBER)


# --- SOCIAL MEDIA --- #
st.write("#")
cols = st.columns(len(SOCIAL_MEDIA))
for index, (platform, link) in enumerate(SOCIAL_MEDIA.items()):
    cols[index].write(f"[{platform}]({link})")
    
    
# --- WORK EXPERIENCE & QUALIFICATIONS --- #
st.write("#")
st.subheader("Work Experience & Qualifications")
st.write(
    """
    - ✅ March 2023 - Current: Barista Starbucks, Largo, Fl
    - ✅ June 2021 - June 2023: Floor Manager Lucky 777s Arcade, Largo, FL
    - ✅ January 2018 - November 2022 - Electrical Apprentice CGS Construction, Largo, FL
    
    """
)

# --- HARD SKILLS --- #
st.write("#")
st.subheader("Hard Skills")
st.write(
    """ 
    - 💡 Fast-Learner
    - 💻 Enthusiasm Regarding Programming
    - 🛠️ Workstation Maintenance
    - 👨‍💼 Leading Employees
    - ⚡ Electrical Engineering Experience
    - 🏗️ Construction Experience
    - 🤝 Customer Service
    
    """
)

# --- WORK HISTORY --- #
st.write("#")
st.subheader("Work History")
st.write("---")

# --- JOB 1 --- #
st.write("☕️", "Barista | Starbucks")
st.write("📅", "March 2023 - Current")
st.write(
    """
    -  Pleasantly interacted with customers during hectic periods to promote fun, positive environment.
    -  Controlled line and crowd with quick, efficient service.
    -  Cleaned counters, machines, utensils, and seating areas daily.
    -  Maintained regular and consistent attendance and punctuality.
    -  Memorized recipes for specialty coffee beverages and seasonal offerings.
    -  Recommended products based on solid understanding of individual customer needs and preferences.
    
    """
)
st.write("---")

# --- JOB 2 --- #
st.write("🕹️", "Floor Manager | Lucky 777s Arcade")
st.write("📅", "June 2021 - June 2023")
st.write(
    """
    -  Managed team of employees to maintain smooth-running operations of shop floor
    -  Completed efficient daily opening and closing processes to prepare teams and maintain optimal financial controls
    -  Managed store inventory and stock levels to maintain availability of products
    -  Coached employees and trained on methods for handling various aspects of sales, complicated issues, and difficult customers.
    -  Oversaw employee performance, corrected problems, and increased efficiency to maintain productivity targets.
    
    """
)
st.write("---")

# --- JOB 3 --- #
st.write("🔌", "Electrical Apprentice | CGS Construction")
st.write("📅", "January 2018 - November 2022")
st.write(
    """
    -  Worked under supervision of journeyman electrician to learn trade and develop electrical knowledge.
    -  Installed EMT consuit and PVC piping according to plans and code requirements.
    -  Installed electrical circuitry per plans and code requirements.
    -  Installed Electrical components per building specifications.
    -  Studied the proper use and care of power tools and equipment to install and maintain electrical systems.
    -  Adhered to electrical and building codes when installing and repairing electrical systems or components.
    -  Maintained a clean and safe work environment thorugh OSHA requirments.
    
    """
)
st.write("---")

# --- EDUCATION & CERTIFICATIONS --- #
st.write("#")
st.subheader("Education & Certifications")

# Expected Graduation
st.write("🎓", "**Expected in May 2025**", "- Associate of Arts in Computer and Information Science", "🏫", "St. Petersburg College, Clearwater, FL")

# High School Diploma
st.write("🎓", "High School Diploma", " - Seminole High School, Seminole, FL - May 2020")

# Achievements & Relevant Coursework
st.write("##")
st.subheader("Achievements & Relevant Coursework")
st.write(
    """
    - 🌟 Dean's List (Spring 2023)
    - 📚 Relevant Coursework: Computer Information Technology, Intro to Computer Programming, Programming in C++, Data Science using Python 
    - 📈 GPA: 3.7
    - 🔬 Member of the SemiCircle STEM Club
    - 🧬Associate member of Tri-Beta
    """
)

# --- HOBBIES & INTERESTS --- #
st.write("#")
st.subheader("Hobbies & Interests")
st.write(
    """
    - 🎮 Game Development
    - 🤖 Robotics
    - ⚛️ Quantum Mechanics
    - 🖨️ 3D Printing
    - 💻 Computer Programming
    - 🧠 ML/ Deep Learning Development
    """
)