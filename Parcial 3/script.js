// Clase Pedido
class Pedido {
    constructor(id, cliente, fecha, prioridad, estado) {
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.prioridad = prioridad; // "Alta", "Media", "Baja"
        this.estado = estado; // 0 = pendiente, 1 = procesado
        this.siguiente = null; // Para la estructura LinkedList
    }
}

// Clase LinkedList para gestionar los pedidos dinámicamente
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Método para registrar un nuevo pedido
    registrarPedido(pedido) {
        if (this.head === null) {
            this.head = pedido;
        } else { //en caso tal
            let actual = this.head;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = pedido;
        }
        this.size++;
        console.log(`Pedido registrado: ID=${pedido.id}, Cliente=${pedido.cliente}, Fecha=${pedido.fecha}, Prioridad=${pedido.prioridad}, Estado=${pedido.estado === 0 ? 'Pendiente' : 'Procesado'}`);
    }

    // Método para buscar un pedido específico por ID
    buscarPedido(id) {
        let actual = this.head;
        while (actual !== null) {
            if (actual.id === id) {
                console.log(`Pedido encontrado: ID=${actual.id}, Cliente=${actual.cliente}, Fecha=${actual.fecha}, Prioridad=${actual.prioridad}, Estado=${actual.estado === 0 ? 'Pendiente' : 'Procesado'}`);
                return actual;
            }
            actual = actual.siguiente;
        }
        console.log(`Pedido con ID=${id} no encontrado.`);
        return null;
    }

    // Ordenar pedidos por prioridad usando el algoritmo de burbuja
    ordenarPorPrioridad() {
        if (this.size < 2) {
            console.log("No hay suficientes pedidos para ordenar.");
            return;
        }

        let cambiado;
        do {
            cambiado = false;
            let actual = this.head;
            while (actual.siguiente !== null) {
                if (this.getPrioridadNumerica(actual.prioridad) < this.getPrioridadNumerica(actual.siguiente.prioridad)) {
                    // Intercambio de datos
                    [actual.prioridad, actual.siguiente.prioridad] = [actual.siguiente.prioridad, actual.prioridad];
                    [actual.id, actual.siguiente.id] = [actual.siguiente.id, actual.id];
                    [actual.cliente, actual.siguiente.cliente] = [actual.siguiente.cliente, actual.cliente];
                    [actual.fecha, actual.siguiente.fecha] = [actual.siguiente.fecha, actual.fecha];
                    [actual.estado, actual.siguiente.estado] = [actual.siguiente.estado, actual.estado];
                    cambiado = true;
                }
                actual = actual.siguiente;
            }
        } while (cambiado);

        console.log("Pedidos ordenados por prioridad.");
        this.mostrarPedidos();
    }

    // Convertir prioridad a valor numérico para comparación
    getPrioridadNumerica(prioridad) {
        if (prioridad === "Alta") return 3;
        if (prioridad === "Media") return 2;
        if (prioridad === "Baja") return 1;
        return 0;
    }

    // Método para eliminar un pedido por ID
    eliminarPedido(id) {
        if (this.head === null) {
            console.log("La lista está vacía. No se puede eliminar.");
            return;
        }

        if (this.head.id === id) {
            console.log(`Pedido eliminado: ID=${this.head.id}, Cliente=${this.head.cliente}`);
            this.head = this.head.siguiente;
            this.size--;
            return;
        }

        let actual = this.head;
        while (actual.siguiente !== null && actual.siguiente.id !== id) {
            actual = actual.siguiente;
        }

        if (actual.siguiente === null) {
            console.log(`Pedido con ID=${id} no encontrado.`);
            return;
        }

        console.log(`Pedido eliminado: ID=${actual.siguiente.id}, Cliente=${actual.siguiente.cliente}`);
        actual.siguiente = actual.siguiente.siguiente;
        this.size--;
    }

    // Mostrar todos los pedidos
    mostrarPedidos() {
        if (this.head === null) {
            console.log("No hay pedidos en la lista.");
            return;
        }

        console.log("Lista de pedidos:");
        let actual = this.head;
        while (actual !== null) {
            console.log(`ID=${actual.id}, Cliente=${actual.cliente}, Fecha=${actual.fecha}, Prioridad=${actual.prioridad}, Estado=${actual.estado === 0 ? 'Pendiente' : 'Procesado'}`);
            actual = actual.siguiente;
        }
    }
}

// Uso del sistema
console.log("** Inicio del sistema de gestión de pedidos **");

// Crear lista enlazada
const listaPedidos = new LinkedList();

// Registrar pedidos
console.log("\n--- Registro de pedidos ---");
listaPedidos.registrarPedido(new Pedido(1, "Juan Pérez", "2025-03-07", "Alta", 0));
listaPedidos.registrarPedido(new Pedido(2, "Ana García", "2025-03-06", "Media", 0));
listaPedidos.registrarPedido(new Pedido(3, "Luis Gómez", "2025-03-05", "Baja", 0));

// Mostrar pedidos registrados
console.log("\n--- Lista inicial de pedidos ---");
listaPedidos.mostrarPedidos();

// Ordenar pedidos por prioridad
console.log("\n--- Ordenar pedidos por prioridad ---");
listaPedidos.ordenarPorPrioridad();

// Buscar pedidos específicos
console.log("\n--- Buscar pedidos específicos ---");
listaPedidos.buscarPedido(1); // Pedido existente
listaPedidos.buscarPedido(5); // Pedido inexistente

// Eliminar un pedido
console.log("\n--- Eliminar pedidos ---");
listaPedidos.eliminarPedido(2); // Eliminar un pedido existente
listaPedidos.eliminarPedido(5); // Intentar eliminar un pedido inexistente

// Mostrar pedidos después de eliminar
console.log("\n--- Lista final de pedidos ---");
listaPedidos.mostrarPedidos();
