from pydantic import BaseModel

class New(BaseModel):
    title: str
    body: str
    picture_url: str
    
class ModifyNew(New):
    uuid: str

class Auf(BaseModel):
    login: str
    password: str

class Feedback(BaseModel):
    name: str
    email: str
    phone_number: str
    message: str
