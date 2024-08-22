// execute node myFile.js 

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


// New timers, tasks, operations are recorded from myFile running.
myFile.runContent();

function shouldContinue () {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening to port)
  // Check three: Any pending long running operations? (like fs module)

  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) node looks at pendingTimers and sees if any functions
  // are ready to be called setTimeout, setInterval

  // 2) node looks at pendingOsTasks and pendingOperations
  // and calls relevant callbacks

  // 3) pause execution. continue when
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4) Look at pendingTimers. call any setImmediate

  // 5) Handle any 'close' events
}


// exit and return to terminal