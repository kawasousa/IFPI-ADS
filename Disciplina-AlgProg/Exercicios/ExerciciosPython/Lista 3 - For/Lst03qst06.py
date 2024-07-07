from utils.text_utils import showTitle

def main():
	showTitle("Tabuada Completa")
	operators = ["Adição", "Subtração", "Multiplicação", "Divisão"]
	for operation in operators:
		print(f"\n)) Tabuada de {operation}")
		for number in range(1, 11):
			show_operation(number, operation)
	

def show_operation(number, operation):
	print("\n|", number)
	for term in range(1, 11):
		result = calculate_result(operation, number, term)
		op_symbol = identify_operation(operation)
		print(f"{number}{op_symbol}{term} = {result}")

def calculate_result(operation, number, term):
	if operation == "Adição":
		return number+term
	elif operation == "Subtração":
		return number-term
	elif operation == "Multiplicação":
		return number*term
	else:
		result = number/term
		return (round(result, 2))

def identify_operation(operation):
	if operation == "Adição":
		return "+"
	elif operation == "Subtração":
		return "-"
	elif operation == "Multiplicação":
		return "x"
	else:
		return "÷"

main()