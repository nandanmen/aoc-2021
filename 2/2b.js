export default function dive(...commands) {
  let depth = 0;
  let horizontalPos = 0;
  let aim = 0;

  commands.forEach((commandStr) => {
    const [command, argStr] = commandStr.split(" ");
    const arg = Number(argStr);

    switch (command) {
      case "forward":
        horizontalPos += arg;
        depth += aim * arg;
        break;
      case "down":
        aim += arg;
        break;
      case "up":
        aim -= arg;
        break;
      default:
        console.error(`Unknown command ${command}`);
        break;
    }
  });

  return depth * horizontalPos;
}
