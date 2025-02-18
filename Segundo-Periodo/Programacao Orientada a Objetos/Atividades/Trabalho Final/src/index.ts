import UserInterface from "./ui/UserInterface";

async function main() {
  const ui = new UserInterface();
  await ui.iniciar();
}

main();