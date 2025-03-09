const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS category (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS item (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR (255),
price DECIMAL (10, 2),
category_id INTEGER NOT NULL,
FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
);

INSERT INTO category (name) VALUES
('Board Games'), ('Video Games'), ('Table Top Games'), ('Card Games');

INSERT INTO item (name, price, category_id) VALUES
('Halo 3', 29.99, 2), ('Cards Against Humanity', 14.99, 4), ('Monopoly', 14.99, 3), ('Call of Duty 4', 49.99, 2);
`;

async function main() {
    console.log("seeding....");
    const client = new Client({
        connectionString: "postgresql://bryan:root@localhost:5432/inventory_app",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();