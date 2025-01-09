# Banco de Dados para gerenciamento de diárias em internações de pacientes através de planos de saúde em hospitais

## Hospital
Este sistema controla valores de diárias dos apartamentos pagos por diferentes planos de saúde em diferentes <span style="color:rgb(0, 176, 240)">hospitais</span>.
## Plano de saúde
No BD do sistema deve constar o cadastro de todos os <span style="color:rgb(0, 176, 240)">planos de saúde</span>, com o nome, descrição, e-mail e telefone de contato.
## Apartamento
Um mesmo <span style="color:rgb(0, 176, 240)">apartamento</span> pode ser ocupado através de diferentes planos de saúde, podendo ter o mesmo valor de diária ou não.
*Cada apartamento está vinculado a um único hospital*. O banco de dados deve manter o cadastro de todos os hospitais que disponibilizam apartamentos através da aplicação.
## Categoria
Cada apartamento possui uma <span style="color:rgb(0, 176, 240)">categoria</span>, onde são descritos o seu nome, o tamanho do quarto (em metros quadrados), além de uma descrição dos itens contidos nele. 
## Médico
O sistema também deve manter os dados dos <span style="color:rgb(0, 176, 240)">médicos</span> de cada hospital, informando o nome, telefone, data de nascimento, dentre outras informações. *Um médico só pode ser vinculado a um único hospital*.
## Especialidade
Cada médico possui apenas uma <span style="color:rgb(0, 176, 240)">especialidade</span>. Nome, descrição, dentre outras informações de especialidade devem ser armazenadas no banco de dados.
Os hospitais mantêm um esquema de supervisão entre os médicos, ou seja, *um médico pode supervisionar um grupo de outros médicos, desde que estes pertençam ao mesmo hospital. Da mesma forma, um médico pode ter mais de um supervisor*. Este esquema visa proporcionar uma melhor qualidade no serviço dos hospitais.
## Paciente
Os dados cadastrais dos <span style="color:rgb(0, 176, 240)">pacientes</span> devem ser mantidos no banco de dados. Os pacientes serão internados em um apartamento de um plano de saúde. *O sistema não precisa conhecer antecipadamente o plano de saúde de cada paciente*. Apenas no ato da internação, *ele será internado em um apartamento vinculado a um plano de saúde*.
## Internação
No ato da <span style="color:rgb(0, 176, 240)">internação</span>, deverá ser informada a data de entrada, além do motivo da internação (texto escrito livremente).
Um médico do hospital será responsável pela internação do paciente. Isto também deverá ser armazenado no banco de dados.
## Regras+
O sistema não deverá permitir que um médico lotado em um determinado hospital interne um paciente em um apartamento de um outro hospital. Baseando-se nas informações anteriores, modele o BD do sistema utilizando o Modelo Entidade-Relacionamento e, se for o caso, as suas extensões.