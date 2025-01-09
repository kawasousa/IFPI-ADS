from flask import Flask, jsonify, request
import json

app = Flask(__name__)
dataPath = './db/books.json'

# Retorna todos os livros do banco de dados
@app.route('/books',methods=['GET']) # Liga a função ao endpoint '/books'
def GetBooks():
    with open(dataPath, 'r') as data:
        books = json.load(data)

    return jsonify(books)

# Retorna o livro com o ID recebido
@app.route('/books/<int:ID>',methods=['GET'])
def GetBookByID(ID):
    with open(dataPath, 'r') as data:
        books = json.load(data)
    
    for book in books:
        if book.get('ID') == ID:
            return jsonify(book)
    
    return jsonify({'error':'Livro não encontrado'})

# Atualiza um livro
@app.route('/books/<int:ID>',methods=['PUT'])
def UpdateBookByID(ID):
    with open(dataPath, 'r') as data:
        books = json.load(data)

    updatedBook = request.get_json()
    for index,book in enumerate(books):
        if book.get('ID') == ID:
            books[index].update(updatedBook)
            return jsonify(books[index])

# Cria um novo livro
@app.route('/books',methods=['POST'])
def CreateBook():
    with open(dataPath, 'r') as data:
        books = json.load(data)

    newBook = request.get_json()
    newBook['ID'] = len(books)
    books.append(newBook)

    with open(dataPath, 'w') as data:
        json.dump(books, data, indent=4)
    
    return jsonify(books)

# Exclui um livro da base de dados
@app.route('/books/<int:ID>',methods=['DELETE'])
def DeleteBook(ID):
    with open(dataPath, 'r') as data:
        books = json.load(data)

    for index,book in enumerate(books):
        if book.get('ID') == ID:
            del books[index]
    
    with open(dataPath, 'w') as data:
        json.dump(books, data, indent=4)
    
    return jsonify(books)

# Função para inicializar a aplicação
app.run(port=5000,host='localhost',debug=True)