def getNumber(message):
	return int(input(message))

def getPositiveNumber(message):
	number = getNumber(message)
	while number < 0:
		print('Número inválido, digite número positivo!')
		number = getNumber(message)
	return number

