const fs = require("fs");
const hre = require("hardhat");

async function main() {
  const network = hre.network.name;
  const timestamp = new Date().toISOString();

  // Deploy the "Spark" contract
  const sparkContractName = "Spark";
  const sparkFactory = await hre.ethers.getContractFactory(sparkContractName);
  const spark = await sparkFactory.deploy();

  const sparkContractAddress = spark.target;

  const contractInfoSpark = {
    contractName: sparkContractName,
    network,
    timestamp,
    contractAddress: sparkContractAddress,
  };

  // Load existing JSON data or initialize an empty array
  let contractData = [];
  try {
    const existingData = fs.readFileSync("contracts.json", "utf8");
    contractData = JSON.parse(existingData);
  } catch (error) {
    // File doesn't exist or is empty, initialize with an empty array
    contractData = [];
  }

  contractData.push(contractInfoSpark);

  // Write the updated array back to the JSON file
  fs.writeFileSync("contracts.json", JSON.stringify(contractData, null, 2));

  console.log(
    `Contract "${sparkContractName}" deployed to:`,
    sparkContractAddress
  );
  console.log("Network:", network);

  // Deploy the "Vault" contract with parameters
  const vaultContractName = "Vault";
  const vaultFactory = await hre.ethers.getContractFactory(vaultContractName);

  // Replace the parameters below with the actual values you want to use
  const param2 = 100;
  const param3 = 100;
  const param4 = 2629743;

  const vault = await vaultFactory.deploy(
    sparkContractAddress,
    param2,
    param3,
    param4
  );
  const vaultContractAddress = vault.target;

  const contractInfoVault = {
    contractName: vaultContractName,
    network,
    timestamp,
    contractAddress: vaultContractAddress,
  };
  contractData.push(contractInfoVault);

  // Write the updated array back to the JSON file
  fs.writeFileSync("contracts.json", JSON.stringify(contractData, null, 2));

  console.log(
    `Contract "${vaultContractName}" deployed to:`,
    vaultContractAddress
  );
  console.log("Network:", network);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
