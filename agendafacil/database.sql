-- Criação da tabela de serviços
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    duration_minutes INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Inserção dos dados iniciais na tabela (incluindo o novo serviço)
INSERT INTO services (name, category, duration_minutes, price) VALUES 
('Corte de Cabelo', 'Salão / Barbearia', 30, 50.00),
('Manicure e Pedicure', 'Estética', 45, 40.00),
('Design de Sobrancelha', 'Estética', 20, 30.00);
