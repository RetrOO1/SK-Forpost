from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import uvicorn
import asyncio
from database.postgresql import engine
from database.models import Base
from controllers import mail_controller, news_controller, auf_controller


app = FastAPI()

app.include_router(mail_controller.router)
app.include_router(news_controller.router)
app.include_router(auf_controller.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    #allow_origins=['https://forpost-sk.ru/'],  
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

async def create_models(engine, Base):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

if __name__ == "__main__":
    asyncio.run(create_models(engine, Base))
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
