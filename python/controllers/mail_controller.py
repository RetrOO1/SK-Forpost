import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os
from fastapi import APIRouter
from schemas.schemas_class import Feedback

load_dotenv()

destination: str = os.getenv("DESTINATION")
email: str = os.getenv("EMAIL")
password: str = os.getenv("PASSWORD")

debuglevel = 0

router = APIRouter(prefix="/mail")


@router.post('/feedback')
def send_feedback(request: Feedback):
    print(request)
    message = f'{request.name}\n{request.email}\n{request.phone_number}\n\n{request.message}'
    try:
        send_email(destination, message)
    except Exception as e:
        print(e)



def send_email(to: str, msg: str):
    message = MIMEMultipart()
    message['From'] = email
    message['To'] = to
    message['Subject'] = 'Feedback'

    message.attach(MIMEText(msg, 'plain'))



    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(email, password)
        server.send_message(message)
