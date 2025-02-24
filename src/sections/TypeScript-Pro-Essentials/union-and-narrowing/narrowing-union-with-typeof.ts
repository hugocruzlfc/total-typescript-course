const convertTime = (time: string | number | boolean) => {
  if (typeof time === "string") {
    console.log(time); // `time` is a string
  } else {
    console.log(time); // `time` is  number | boolean
  }

  console.log(time); // `time` is string | number | boolean
};
