

# Decentralized Ticketing System

This decentralized ticketing system leverages Ethereum smart contracts, a backend server, and a frontend application to facilitate event creation, ticket allocation via balloting, and payment processing.

---

## Project Overview

### **Components**
1. **Smart Contracts**: Written in Solidity and deployed on Ethereum using Hardhat.
2. **Backend**: Built with Node.js and Express, using MongoDB for data storage.
3. **Frontend**: Developed with Next.js and React for an intuitive user experience.

### **Features**
- Create and manage events.
- Register interest for events.
- Allocate tickets using a balloting system.
- Secure payment processing for allocated tickets.
- View event details and purchased tickets.

---

## Installation and Setup

### **Prerequisites**
- Node.js and npm
- Hardhat
- MongoDB
- MetaMask (for Ethereum network interaction)

### **Setup Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/decentralized-ticketing.git
   cd decentralized-ticketing
   ```

2. **Install Dependencies**:
   - **Backend**:
     ```bash
     cd backend
     npm install
     ```
   - **Frontend**:
     ```bash
     cd ../frontend
     npm install
     ```
   - **Smart Contracts**:
     ```bash
     cd ../smartcontract
     npm install
     ```

3. **Set Environment Variables**:
   - Create a `.env` file in the **backend** and **smartcontract** directories with the required variables (e.g., `RPC_URL`, `CONTRACT_ADDRESS`).

---

## Usage Guide

### **Running the Backend**
1. Start MongoDB to ensure the database is running.
2. Run the backend server:
   ```bash
   cd backend
   npm run dev
   ```

### **Running the Frontend**
1. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
   ```

### **Deploying Smart Contracts**
1. Compile and deploy contracts to the desired Ethereum network:
   ```bash
   cd smartcontract
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network your-network
   ```

---

## Testing

### **Smart Contracts**:
Use Hardhat to test the contracts:
```bash
cd smartcontract
npx hardhat test
```

---

## Contributing

Contributions are encouraged! Please fork the repository, create a new branch for your changes, and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, reach out to:  
**Email**: [your-email@example.com]

--- 

### Summary of Key Sections
- **Project Overview**: Highlights the system's purpose and components.
- **Features**: Lists primary functionalities.
- **Installation**: Detailed setup instructions.
- **Usage**: Guide for running the system.
- **Testing**: Instructions for verifying the smart contracts.
- **Contributing**: Information for contributors.
- **License**: Legal information.
- **Contact**: Support and communication details.

Customize the README as needed to reflect specific details about your project!