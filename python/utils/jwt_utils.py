import jwt
from dotenv import load_dotenv
from os import getenv

load_dotenv()

secret_key = getenv("SECRET_KEY")


def generate_token(payload: dict):
    token = jwt.encode(payload, secret_key, algorithm="HS256")
    return token

def verify_token(token: str): 
    try:
        return jwt.decode(token, secret_key, algorithms=["HS256"])
    except Exception: 
        return None