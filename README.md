# Sistema de Seguimiento de Pedidos con Listas Enlazadas

## Descripción del Proyecto
Este sistema permite a las empresas gestionar de manera eficiente el seguimiento de pedidos de sus clientes. Utiliza una **lista enlazada dinámica** para registrar, buscar, ordenar y eliminar pedidos. Este proyecto está desarrollado en JavaScript y es completamente ejecutable desde la consola.

---

## Funcionalidades Principales
1. **Registro de pedidos**:  
   - Agrega un nuevo pedido a la lista enlazada.
2. **Consulta de pedidos**:  
   - Permite buscar pedidos específicos mediante su ID.
3. **Ordenamiento por prioridad**:  
   - Ordena los pedidos según su prioridad (`Alta > Media > Baja`) utilizando el algoritmo de burbuja.
4. **Eliminación de pedidos**:  
   - Elimina un pedido específico por su ID.
5. **Visualización de pedidos**:  
   - Muestra todos los pedidos registrados en la lista.

---

## Clases Implementadas

### **Clase Pedido**
Modela la estructura de un pedido con los siguientes atributos:
- `id`: Identificador único del pedido.
- `cliente`: Nombre del cliente que realizó el pedido.
- `fecha`: Fecha en que se creó el pedido.
- `prioridad`: Nivel de prioridad (`Alta`, `Media`, `Baja`).
- `estado`: Bandera binaria (0 = Pendiente, 1 = Procesado).

### **Clase LinkedList**
Permite gestionar dinámicamente los pedidos con los siguientes métodos:
- **`registrarPedido(pedido)`**: Agrega un pedido al final de la lista.
- **`buscarPedido(id)`**: Busca un pedido en la lista por su ID.
- **`ordenarPorPrioridad()`**: Ordena la lista de pedidos según la prioridad.
- **`eliminarPedido(id)`**: Elimina un pedido de la lista por su ID.
- **`mostrarPedidos()`**: Muestra todos los pedidos de la lista.

---

## Cómo Ejecutar el Proyecto

### Prerrequisitos
- Tener instalado [Node.js](https://nodejs.org/).

