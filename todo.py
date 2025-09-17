todos = []

def mostrar_todos():
    if not todos:
        print("No hay tareas")
    else:
        for i, t in enumerate(todos, 1):
            print(f"{i}. {t}")

while True:
    print("\nOpciones: [1] Agregar [2] Listar [3] Borrar [4] Salir")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        tarea = input("Nueva tarea: ")
        todos.append(tarea)
        print("Tarea agregada ✅")
    elif opcion == "2":
        print("\nTus tareas:")
        mostrar_todos()
    elif opcion == "3":
        mostrar_todos()
        idx = int(input("Número de tarea a borrar: ")) - 1
        if 0 <= idx < len(todos):
            todos.pop(idx)
            print("Tarea eliminada 🗑️")
        else:
            print("Número inválido")
    elif opcion == "4":
        print("Adiós 👋")
        break
    else:
        print("Opción inválida")
