const repeatLog = (n, action) => {
  for (let i = 0; i < n; i++) {
    action(i);
  }
};

repeatLog(11, console.log);
