async function main() {
  // Fetch congtract to deploy
  const Token = await ethers.getContractFactory("Token")

//Deploy contract
  const token = await Token.deploy('The Big Scoop', 'BGSCP', '1000000')
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
