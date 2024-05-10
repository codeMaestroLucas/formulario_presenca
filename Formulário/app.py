from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse, FileResponse
import json

app = FastAPI()
    
matriculas_validas: dict[str : str] = {
    'PRESIDENTE': '1',
    'DIGOV': '2',
    'DIROFL': '3',
    'DIRBEN': '4',
    'DTI': '5',
    'DGP': '6',
    'AUDGER': '7',
    'CORREG': '8',
    'PROCURADOR': '9',
    'COORDENADOR_GERAL': ['10', '11'],
    'OUTRO': None,
}

def read_html(path_file: str) -> HTMLResponse:
    with open(path_file, 'r', encoding='utf8') as f:
        html = f.read()
    return HTMLResponse(html)

def write_file(request: dict) -> None:
    '''
    Function used to Write informations in the file 'awnsers.json'.
    
    If the file doesn't exists, it will be created.
    '''
    with open('awnsers.json', 'a', encoding='utf8') as f:
        json.dump(request, f)
        f.write('\n')

def verify_funcao_matricula(funcao: str, matricula: str) -> bool:
    funcao = funcao.upper()
    
    if matricula not in 'null':
        if funcao not in matriculas_validas.keys():
            return False
        
        
        if int(matriculas_validas[funcao]) != int(matricula):
            return False
        
    return True


@app.get('/')
def home():
    return read_html(r'static\index.html')

@app.post('/')
async def send_awnsers(funcao: str = Form(), matricula: str = Form()):
    if not verify_funcao_matricula(funcao, matricula):
        return "Função ou matrícula inválida."
    
    write_file({'funcao': funcao, 'matricula': matricula})
    return FileResponse('awnsers.json')


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)