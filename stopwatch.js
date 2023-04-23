let state = {
    running: false,
    elapsed: 0,
    intervalId: null
  };
  
  function update() {
    let display = document.getElementById("display");
    let minutes = Math.floor(state.elapsed / 60000);
    let seconds = Math.floor((state.elapsed % 60000) / 1000);
    let milliseconds = Math.floor((state.elapsed % 1000) / 10);
    display.innerText = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  }
  
  function pad(number) {
    return number < 10 ? `0${number}` : number;
  }
  
  function start() {
    if (!state.running) {
      state.intervalId = setInterval(() => {
        state.elapsed += 10;
        update();
      }, 10);
      state.running = true;
    }
}

function stop() {
  if (state.running) {
    clearInterval(state.intervalId);
    state.running = false;
  }
}

function reset() {
  stop();
  state.elapsed = 0;
  update();
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

update();