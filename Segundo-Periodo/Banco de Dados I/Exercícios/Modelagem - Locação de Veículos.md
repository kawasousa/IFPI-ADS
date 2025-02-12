# Modelo de Banco de Dados para Gerenciamento de Locação de Veículos

O sistema gerencia o aluguel de veículos, incluindo informações de <span style="font-weight:bold; color:rgb(0, 176, 240)">clientes</span>, <span style="font-weight:bold; color:rgb(0, 176, 240)">veículos</span>, <span style="font-weight:bold; color:rgb(0, 176, 240)">locadoras</span>, <span style="font-weight:bold; color:rgb(0, 176, 240)">motoristas</span> e <span style="font-weight:bold; color:rgb(0, 176, 240)">contratos de locação</span>.
## Locadoras
O banco de dados deve armazenar as informações das locadoras que oferecem veículos para locação, incluindo nome, endereço completo, telefone e e-mail de contato. 
## Veículos
Cada locadora possui um conjunto de veículos, onde cada veículo tem atributos como número de identificação (placa ou VIN), marca, modelo, ano de fabricação, <span style="font-weight:bold; color:rgb(0, 176, 240)">categoria</span> (com nome e descrição, como "SUV", "Econômico", "Luxo") e status de disponibilidade (disponível, em manutenção ou alugado). _Cada veículo está vinculado a uma única locadora_.
## Clientes
O sistema também mantém o cadastro dos clientes que alugam veículos, com informações como nome completo, CPF/CNPJ, data de nascimento, endereço completo, telefone e e-mail de contato.
## Motoristas
Além disso, o sistema gerencia motoristas que podem ser contratados pelas locadoras para dirigir os veículos alugados. Cada motorista está vinculado a uma única locadora e possui informações como nome completo, CNH (número e categoria), data de nascimento, telefone e e-mail.
## Contratos
Os contratos de locação devem incluir o cliente que alugou o veículo, o veículo alugado (que deve estar disponível no momento da locação), a data de início e término do contrato, o valor da locação por dia, o total calculado no encerramento do contrato e, se aplicável, o motorista responsável.
## Histórico de manutenção
Além disso, o sistema registra o histórico de manutenção dos veículos, incluindo veículo, data da manutenção, tipo de manutenção (revisão, troca de peças, etc.), descrição do serviço realizado e custo da manutenção.
## Supervisão de motoristas
Dentro de uma locadora, <span style="color:rgb(255, 0, 0)">alguns motoristas podem supervisionar outros motoristas</span> para garantir a qualidade dos serviços. *Um motorista pode supervisionar vários outros motoristas, e também pode ter múltiplos supervisores*, desde que todos pertençam à mesma locadora.
## Regras+
Por fim, o sistema deve implementar as seguintes regras: apenas veículos disponíveis podem ser alugados, um motorista só pode dirigir veículos vinculados à sua locadora e *um cliente pode alugar mais de um veículo ao mesmo tempo, gerando contratos separados*.

Baseando-se nessas informações, modele o banco de dados utilizando o Modelo Entidade-Relacionamento, representando as entidades principais (locadoras, veículos, clientes, motoristas, contratos, manutenções) e seus relacionamentos, incluindo atributos e associações específicas.