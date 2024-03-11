from utils.jwt_utils import verify_token, generate_token
from fastapi import Request





def get_current_user(request: Request):
    token = request.headers.get("Authorization")
    user = verify_token(token)
    if user:
        return user
    
