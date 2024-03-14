from fastapi import APIRouter, Depends, UploadFile, File
import requests
from dotenv import load_dotenv
from os import getenv
from typing import Optional
from services import NewsService, get_news_service
from schemas.schemas_class import ModifyNew, New


router = APIRouter(prefix="/news")

@router.post("/add")
async def add_new(request: New, service: NewsService = Depends(get_news_service)):
    return await service.add_new(request)

@router.post("/picture")
async def add_picture(file: UploadFile = File(None)):
    if file:
        response = requests.post('https://api.imgbb.com/1/upload', params={'key': getenv('IMGBB_KEY')}, files={'image': await file.read()})
    return response.json()["data"]["url"]
    

@router.get("/get/{new_id}")
async def get_new(new_id: str, service: NewsService = Depends(get_news_service)):
    return await service.get_new(new_id)

@router.post("/edit")
async def edit_new(request: ModifyNew, service: NewsService = Depends(get_news_service)):
    return await service.edit_new(request)

@router.get("/all")
async def get_all_news(service: NewsService = Depends(get_news_service)):
    return await service.get_all_news()

@router.delete("/delete/{new_id}")
async def remove_new(new_id: str, service: NewsService = Depends(get_news_service)):
    return await service.remove_new(new_id)