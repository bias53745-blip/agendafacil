// Estrutura inicial para cadastro de serviços do AgendaFácil
const defaultServices = [
    {
        name: "Corte de Cabelo",
        category: "Salão / Barbearia",
        duration_minutes: 30,
        price: 50.00
    },
    {
        name: "Manicure e Pedicure",
        category: "Estética",
        duration_minutes: 45,
        price: 40.00
    }
];

// Função para cadastrar um novo serviço
function addService(servicesList, name, category, durationMinutes, price) {
    const newService = {
        name: name,
        category: category,
        duration_minutes: durationMinutes,
        price: price
    };
    
    servicesList.push(newService);
    console.log(`Serviço "${name}" cadastrado com sucesso!`);
}

// Testando o cadastro de um novo serviço
addService(defaultServices, "Design de Sobrancelha", "Estética", 20, 30.00);

// Nova lógica de agendamento
function scheduleService(serviceName, clientName, date) {
    console.log(`Agendamento realizado: "${serviceName}" para ${clientName} no dia ${date}.`);
}

// Teste de agendamento
scheduleService("Corte de Cabelo", "Maria Silva", "15/08/2026");

// Exibindo todos os serviços atualizados
console.log("Lista completa de serviços:", defaultServices);
