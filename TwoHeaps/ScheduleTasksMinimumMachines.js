function tasks(tasksList) {
  // Initialize the variables => optimalMachines, machineInUse, machinesAvailable and taskList
  let optimalMachines = 0,
    machinesAvailable = new MinHeap(),
    tasksList = new MinHeap(tasksList),
    machineInUse;
  // Iterate through the taskList:
  while (tasksList.size()) {
    // Pop the root task and if the start time >= machineInUse end time then assign that machine to the current task
    let task = tasksList.poll();

    if (machinesAvailable.size() && task[0] >= machinesAvailable.peek()[0]) {
      machineInUse = machinesAvailable.poll();

      machineInUse = [task[1], machineInUse[1]];
    } else {
      // Else assign a new machine => increment optimalMachines and add the new end time to new machine.
      optimalMachines += 1;
      machineInUse = [task[1], optimalMachines];
    }
    machinesAvailable.offer(machineInUse);
  }
  return optimalMachines;
}
