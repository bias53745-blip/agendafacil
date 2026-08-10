const defaultServices = [
  {
    name: "Corte de Cabelo",
    category: "Salão / Barbearia",
    duration_minutes: 30,
    price: 50.0,
  },
  {
    name: "Manicure e Pedicure",
    category: "Estética",
    duration_minutes: 45,
    price: 40.0,
  },
];

const servicesList = document.getElementById("services-list");
const serviceForm = document.getElementById("service-form");

function formatMoney(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function renderServices() {
  if (!servicesList) {
    return;
  }

  if (defaultServices.length === 0) {
    servicesList.innerHTML = "<p>Nenhum serviço cadastrado.</p>";
    return;
  }

  servicesList.innerHTML = defaultServices
    .map(
      (service) => `
        <article class="service-card">
          <h3>${service.name}</h3>
          <p><strong>Categoria:</strong> ${service.category}</p>
          <p><strong>Duração:</strong> ${service.duration_minutes} minutos</p>
          <p><strong>Preço:</strong> ${formatMoney(service.price)}</p>
        </article>`
    )
    .join("");
}

function addService(name, category, durationMinutes, price) {
  const newService = {
    name,
    category,
    duration_minutes: durationMinutes,
    price,
  };

  defaultServices.push(newService);
  renderServices();
  alert(`Serviço "${name}" cadastrado com sucesso!`);
}

if (serviceForm) {
  serviceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value.trim();
    const durationMinutes = Number(
      document.getElementById("duration").value
    );
    const price = Number(document.getElementById("price").value);

    if (!name || !category || durationMinutes <= 0 || price < 0) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    addService(name, category, durationMinutes, price);
    serviceForm.reset();
  });
}

renderServices();
