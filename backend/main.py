import jwt
from fastapi import FastAPI
from pydantic import BaseModel
from constants import *
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

origins = ['http://localhost:3000']


# dummy db
my_db = {
    'username': 'alien@g.c',
    'password': '1234'
}


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# schema for login
class Login(BaseModel):
    username: str
    password: str


@app.get('/')
def root():
    return {'message': 'Hello, World!'}


@app.post('/login')
async def login(login: Login):
    data = jsonable_encoder(login)
    if my_db['username'] == data['username'] and my_db['password'] == data['password']:
        encoded_jwt = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        return {'token': encoded_jwt}
    else:
        return {'message': 'Invalid Credentials'}
