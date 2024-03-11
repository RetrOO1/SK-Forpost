from fastapi import APIRouter, Depends
from services import AufService, get_auf_service
from schemas.schemas_class import Auf



router = APIRouter(prefix="/auf")

@router.post("/sign-in")
async def signin(request: Auf, service: AufService = Depends(get_auf_service)):
    pass

@router.post("/sign-up")
async def signup(request: Auf, service: AufService = Depends(get_auf_service)):
    kandidat = await service.get_user_by_username(request.login)
    if kandidat:
        return "v inkubatore takoy est'"



    