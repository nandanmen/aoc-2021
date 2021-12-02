export default function dive(commands) {
  let depth = 0;
  let horizontalPos = 0;

  commands.forEach((commandStr) => {
    const [command, argStr] = commandStr.split(" ");
    const arg = Number(argStr);

    switch (command) {
      case "forward":
        horizontalPos += arg;
        break;
      case "down":
        depth += arg;
        break;
      case "up":
        depth -= arg;
        break;
      default:
        console.error(`Unknown command ${command}`);
        break;
    }
  });

  return depth * horizontalPos;
}
