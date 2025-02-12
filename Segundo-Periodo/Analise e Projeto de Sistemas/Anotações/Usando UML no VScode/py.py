from graphviz import Digraph

# Criando o diagrama de sequência
seq_diagram = Digraph('Realizar_Pedido', format='png')

# Definição dos atores e objetos
seq_diagram.node('A', 'Atendente', shape='rectangle')
seq_diagram.node('S', 'Sistema', shape='rectangle')
seq_diagram.node('C', 'Cliente', shape='rectangle')

# Adicionando interações
seq_diagram.edge('A', 'S', '1. Acessa o sistema')
seq_diagram.edge('A', 'S', '2. Busca/Registra Cliente')
seq_diagram.edge('S', 'C', '3. Solicita dados do cliente', dir='both')
seq_diagram.edge('A', 'S', '4. Adiciona pizza ao pedido')
seq_diagram.edge('S', 'A', '5. Confirmação de adição')
seq_diagram.edge('A', 'S', '6. Confirma pedido')
seq_diagram.edge('S', 'A', '7. Exibe tempo estimado')
seq_diagram.edge('S', 'S', '8. Registra pedido no banco')

# Renderizando o diagrama
seq_diagram_path = "/mnt/data/realizar_pedido_sequence"
seq_diagram.render(seq_diagram_path)

# Retornando o caminho do arquivo gerado
seq_diagram_path + ".png"
