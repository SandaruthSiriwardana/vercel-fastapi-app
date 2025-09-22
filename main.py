import streamlit as st

# Simple login credentials (for demo only, don't use in production)
USERNAME = "admin"
PASSWORD = "1234"

st.set_page_config(page_title="Login Page", page_icon="🔑", layout="centered")

st.title("🔑 Simple Login Page")

# Login form
with st.form("login_form"):
    username = st.text_input("Username")
    password = st.text_input("Password", type="password")
    submitted = st.form_submit_button("Login")

if submitted:
    if username == USERNAME and password == PASSWORD:
        st.success(f"✅ Welcome, {username}!")
        st.write("🎉 You are now logged in.")
    else:
        st.error("❌ Invalid username or password")
