Pasta 'Original Files' contém a maneira usada para fazer o HTML, CSS e JS em arquivos separados, porém não consegui arranjar uma maneira de fazer com que o estilo e a lógica continuem presentes no arquivo HTML sendo chamado pelo FastAPI em Python.

Já a pasta 'static' contém o arquivo 'index.html' com todo o CSS e JS incorporado.

Há um problema na lógica JS. O envio de dados no método POST do FastAPI está aceitando qualquer valor passado.
    Ajeitei isso no arquivo app.py, mas o JS não está funcionando corretamente.