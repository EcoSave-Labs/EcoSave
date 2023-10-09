# EcoSave

![EcoSave Logo](.github/logo.svg)

## About

**The Problem**: The emission of gases such as carbon dioxide (CO2) and methane (CH4) into the atmosphere is a significant environmental challenge. These gases contribute significantly to global warming and climate change. Human activities, such as burning fossil fuels, deforestation, and agricultural practices, are the main sources of these emissions. The increase in the concentration of these gases in the atmosphere leads to the so-called greenhouse effect, where they trap solar heat, causing an increase in Earth's average temperatures. This results in extreme weather events, glacier melting, rising sea levels, and negative impacts on biodiversity and the planet's overall health.

**Objective**: The EcoSave project aims to reduce carbon dioxide (CO2) and methane (CH4) in the atmosphere through unprecedented intelligent reforestation. To achieve this, we use NASA EMIT to access carbon emission data in specific regions of the globe and monitor it daily, cross-referencing the data with our solution and verifying its effectiveness.

Watch the elevator pitch of the EcoSave project on YouTube: [EcoSave project elevator pitch](https://youtu.be/7i4QlLIDfXM?si=WJIb9izYj73SC-tp)

## Project Demo

Interact with our project demo on the following link: [EcoSave Demo](https://eco-save.vercel.app/)


## Installation
### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [NPM](https://www.npmjs.com/) (v7 or higher)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/) (v13 or higher)

### Steps
- Clone the repository
  ```bash
  git clone https://github.com/EcoSave-Labs/EcoSave.git
  ```

- Install dependencies
  ```bash
  cd EcoSave && npm install
  ```

- Create a .env file
  ```bash
  touch .env
  ```

- Copy the contents of .env.example into .env
  ```bash
  cat .env.example > .env
  ```
  > Note: You will need to fill in the values for the environment variables in the .env file.

- Run the migrations
  ```bash
  npm run prisma generate && npm run prisma migrate dev
  ```
  > Note: You will need to have a PostgreSQL database running on your machine.

- Start the development server
  ```bash
  npm run dev
  ```
  
## Technologies
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/)
- [Prisma](https://www.prisma.io/)

## Authors
- [Erick Nathan](https://github.com/ericknathan)
- [Ariel Betti](https://github.com/arielbetti)
- Jenifer Morati

## License
This project is licensed under the [MIT License](LICENSE).

